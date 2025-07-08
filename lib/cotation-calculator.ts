import { getZoneByPostalCodeAndPole, getZoneCodeByPole, getDepartmentFromPostalCode } from '@/config/poles';
import { calculateTarifByPole, calculateTotalPrice } from '@/config/tarifs-manager';
import { 
  isExpressRP, 
  getExpressRPZone, 
  selectExpressRPVehicle, 
  calculateExpressRPPrice 
} from '@/config/tarifs-express-rp';

export interface CotationInput {
  poleId: string; // Identifiant du pôle (roissy, marseille, etc.)
  postalCodeDepart?: string; // Code postal de départ (optionnel, utilise le pôle par défaut)
  postalCodeDestination: string;
  cityNameDestination?: string; // Nom de la ville de destination (pour Express RP)
  typeTransport?: 'palette80x120' | 'palette100x120' | 'metrePlancher' | 'messagerie'; // Optionnel car automatique
  quantity?: number; // Optionnel car automatique
  weight: number; // Maintenant obligatoire
  dimensions: {
    longueur: number; // en cm
    largeur: number; // en cm
    hauteur: number; // en cm
  };
  options: {
    hayon?: boolean;
    attente?: number; // Nombre d'heures
    matieresDangereuses?: boolean;
    valeurMarchandise?: number; // Pour l'assurance
    manutention?: boolean; // Option spécifique Express RP
  };
  nombrePalettes?: number; // Nombre de palettes fourni par l'utilisateur (optionnel)
  forceType?: 'messagerie' | 'affretement'; // Forcer le type de transport
}

export interface CotationResult {
  success: boolean;
  error?: string;
  data?: {
    zone: {
      code: string;
      name: string;
      department: string;
    };
    transport: {
      type: string;
      quantity: number;
      weight: number;
      poidsVolumetrique?: number;
      poidsFacture?: number; // Poids utilisé pour la facturation
      transportMode?: 'messagerie' | 'palette' | 'expressRP';
      selectionReason?: string;
      vehicleType?: string; // Pour Express RP
      calculAffrètement?: { // Information sur le calcul d'affrètement pour dimensions non standard
        longueur: number;
        largeur: number;
        metresCalcules: number;
        metresFactures: number;
      };
      calculVolumetrique?: { // Information sur le calcul volumétrique pour messagerie
        longueur: number;
        largeur: number;
        hauteur: number;
        volumeM3: number;
        poidsVolumetrique: number;
      };
    };
    pricing: {
      basePrice: number;
      supplements: Record<string, number>;
      totalHT: number;
      tva: number;
      totalTTC: number;
    };
    details: {
      delaiLivraison: string;
      conditionsSpeciales?: string[];
    };
  };
}

// Fonction principale de calcul de cotation
export function calculateCotation(input: CotationInput): CotationResult {
  try {
    // Convertir l'ID du pôle en format attendu par le système
    const poleIdFormatted = input.poleId.toLowerCase()
      .replace('roissy cdg', 'roissy')
      .replace('le havre', 'le-havre')
      .replace(/ /g, '-');
    
    // Déterminer le code postal de départ (utilise le pôle par défaut si non fourni)
    const departurePostalCode = input.postalCodeDepart || getDefaultPostalCodeForPole(poleIdFormatted);
    
    // Vérifier si c'est une livraison Express RP
    if (poleIdFormatted === 'roissy' && isExpressRP(departurePostalCode, input.postalCodeDestination)) {
      return calculateExpressRPCotation(input, departurePostalCode);
    }
    
    // 1. Déterminer la zone de destination selon le pôle
    console.log('Recherche zone pour:', {
      codePostal: input.postalCodeDestination,
      pole: poleIdFormatted,
      department: getDepartmentFromPostalCode(input.postalCodeDestination)
    });
    
    const zone = getZoneByPostalCodeAndPole(input.postalCodeDestination, poleIdFormatted);
    console.log('Zone trouvée:', zone);
    
    if (!zone) {
      return {
        success: false,
        error: 'Code postal non reconnu ou zone non desservie'
      };
    }
    
    let typeTransport: 'palette80x120' | 'palette100x120' | 'metrePlancher' | 'messagerie';
    let quantity: number;
    let weightForCalculation: number = input.weight;
    let calculAffrètement: any = undefined;
    let estimation: any = undefined;

    console.log('Input reçu:', {
      weight: input.weight,
      dimensions: input.dimensions,
      nombrePalettes: input.nombrePalettes,
      forceType: input.forceType
    });

    // 2. Si forceType est défini, l'utiliser
    if (input.forceType === 'messagerie') {
      // Forcer le mode messagerie
      typeTransport = 'messagerie';
      quantity = 1;
      
      // Pour la messagerie, calculer le poids volumétrique
      // Formule : L × l × h × 250 (dimensions en mètres)
      const longueurM = input.dimensions.longueur / 100;
      const largeurM = input.dimensions.largeur / 100;
      const hauteurM = input.dimensions.hauteur / 100;
      const poidsVolumetrique = longueurM * largeurM * hauteurM * 250;
      
      // Utiliser le plus grand entre poids réel et poids volumétrique
      weightForCalculation = Math.max(input.weight, poidsVolumetrique);
    } else {
      // Sinon, traiter comme palette/affrètement
    console.log('Estimation des palettes...');
    try {
      estimation = estimatePalettes(input.dimensions, input.weight);
      console.log('Estimation:', estimation);
    } catch (error) {
      console.error('Erreur lors de l\'estimation:', error);
      return {
        success: false,
        error: 'Erreur lors de l\'estimation des palettes'
      };
    }
    
    console.log('Après estimation, vérification des conditions...');
    console.log('nombrePalettes:', input.nombrePalettes, 'type:', typeof input.nombrePalettes);
    
    // Si nombre de palettes fourni par l'utilisateur, l'utiliser
    if (input.nombrePalettes && input.nombrePalettes > 0) {
      console.log('Utilisation du nombre de palettes fourni par l\'utilisateur');
      // Déterminer le type de palette basé sur les dimensions
      const longueurM = input.dimensions.longueur / 100;
      const largeurM = input.dimensions.largeur / 100;
      const isPalette100x120 = (longueurM === 1.0 && largeurM === 1.2) || (longueurM === 1.2 && largeurM === 1.0);
      
      typeTransport = isPalette100x120 ? 'palette100x120' : 'palette80x120';
      quantity = input.nombrePalettes;
      
      // Vérifier si le nombre dépasse les limites
      if (typeTransport === 'palette80x120' && quantity > 33) {
        // Passer en mètre plancher
        typeTransport = 'metrePlancher';
        const metresEstimes = quantity * 0.4;
        const paliers = [0.5, 1, 1.2, 1.5, 2, 2.4, 2.8, 3, 3.6, 4, 4.4, 4.8, 5.2, 5.5, 6, 6.4, 6.8, 7.2, 7.6, 8, 8.4, 8.8, 9.2, 9.6, 10, 10.4, 10.8, 11.2, 13.2];
        quantity = paliers.find(p => p >= metresEstimes) || 13.2;
      } else if (typeTransport === 'palette100x120' && quantity > 26) {
        // Passer en mètre plancher
        typeTransport = 'metrePlancher';
        const metresEstimes = quantity * 0.5;
        const paliers = [0.5, 1, 1.2, 1.5, 2, 2.4, 2.8, 3, 3.6, 4, 4.4, 4.8, 5.2, 5.5, 6, 6.4, 6.8, 7.2, 7.6, 8, 8.4, 8.8, 9.2, 9.6, 10, 10.4, 10.8, 11.2, 13.2];
        quantity = paliers.find(p => p >= metresEstimes) || 13.2;
      }
    } else if (input.typeTransport && input.quantity) {
      console.log('Utilisation de l\'estimation manuelle fournie');
      // Si estimation manuelle fournie, l'utiliser
      typeTransport = input.typeTransport;
      quantity = input.quantity;
    } else {
      console.log('Utilisation de l\'estimation automatique');
      // Sinon, utiliser l'estimation automatique
      if (estimation.type === 'metrePlancher') {
        // Utilisation de la formule d'affrètement pour dimensions non standard
        typeTransport = 'metrePlancher';
        quantity = estimation.nombre;
        calculAffrètement = (estimation as any).calculAffrètement;
      } else if ((estimation.type === 'palette80x120' && estimation.nombre > 33) || 
          (estimation.type === 'palette100x120' && estimation.nombre > 26)) {
        // Passer en mètre plancher
        typeTransport = 'metrePlancher';
        const metresEstimes = estimation.nombre * 0.4;
        const paliers = [0.5, 1, 1.2, 1.5, 2, 2.4, 2.8, 3, 3.6, 4, 4.4, 4.8, 5.2, 5.5, 6, 6.4, 6.8, 7.2, 7.6, 8, 8.4, 8.8, 9.2, 9.6, 10, 10.4, 10.8, 11.2, 13.2];
        quantity = paliers.find(p => p >= metresEstimes) || 13.2;
      } else {
        typeTransport = estimation.type as 'palette80x120' | 'palette100x120';
        quantity = estimation.nombre;
      }
    }
    console.log('Fin du traitement des conditions, typeTransport:', typeTransport, 'quantity:', quantity);
    } // Fermeture du else pour forceType
    
    // Vérifier que typeTransport et quantity sont bien définis
    if (!typeTransport || !quantity) {
      console.error('Variables non définies:', { typeTransport, quantity });
      return {
        success: false,
        error: 'Erreur lors de la détermination du type de transport'
      };
    }
    
    console.log('Avant vérification des limites - typeTransport:', typeTransport, 'quantity:', quantity);
    
    // Vérifier les limites pour les palettes
    if (typeTransport === 'palette80x120' && (quantity < 1 || quantity > 33)) {
      return {
        success: false,
        error: 'Pour les palettes 80x120, la quantité doit être entre 1 et 33'
      };
    }
    
    if (typeTransport === 'palette100x120' && (quantity < 1 || quantity > 26)) {
      return {
        success: false,
        error: 'Pour les palettes 100x120, la quantité doit être entre 1 et 26'
      };
    }
    
    if (typeTransport === 'metrePlancher') {
      const validMeters = [0.5, 1, 1.2, 1.5, 2, 2.4, 2.8, 3, 3.6, 4, 4.4, 4.8, 5.2, 5.5, 6, 6.4, 6.8, 7.2, 7.6, 8, 8.4, 8.8, 9.2, 9.6, 10, 10.4, 10.8, 11.2, 13.2];
      if (!validMeters.includes(quantity)) {
        return {
          success: false,
          error: 'Le nombre de mètres de plancher doit correspondre à une valeur de la grille tarifaire'
        };
      }
      
      const maxWeights: Record<number, number> = {
        0.5: 600, 1: 1200, 1.2: 1800, 1.5: 2400, 2: 3000, 2.4: 3600, 2.8: 4200,
        3: 4800, 3.6: 5400, 4: 6000, 4.4: 6600, 4.8: 7200, 5.2: 7800, 5.5: 8400,
        6: 9000, 6.4: 9600, 6.8: 10200, 7.2: 10800, 7.6: 11400, 8: 12000,
        8.4: 12600, 8.8: 13200, 9.2: 13800, 9.6: 14400, 10: 15000,
        10.4: 15600, 10.8: 16200, 11.2: 16800, 13.2: 24000
      };
      
      // Pour le mètre de plancher, ajuster la quantité si le poids dépasse le max
      if (input.weight > maxWeights[quantity]) {
        // Trouver le bon palier en fonction du poids
        const validMeters = [0.5, 1, 1.2, 1.5, 2, 2.4, 2.8, 3, 3.6, 4, 4.4, 4.8, 5.2, 5.5, 6, 6.4, 6.8, 7.2, 7.6, 8, 8.4, 8.8, 9.2, 9.6, 10, 10.4, 10.8, 11.2, 13.2];
        let newQuantity = quantity;
        
        for (const meters of validMeters) {
          if (input.weight <= maxWeights[meters]) {
            newQuantity = meters;
            break;
          }
        }
        
        // Si même 13.2m ne suffit pas
        if (newQuantity === quantity && input.weight > maxWeights[13.2]) {
          return {
            success: false,
            error: `Le poids de ${input.weight}kg dépasse la capacité maximale de 24000kg pour 13.2m`
          };
        }
        
        quantity = newQuantity;
      }
    }

    // 3. Utiliser le poids pour recalculer si nécessaire
    let finalQuantity = quantity;
    let weightForTarif = input.weight;
    
    // Pour les palettes, toujours vérifier si le poids nécessite plus de palettes
    if (typeTransport === 'palette80x120' || typeTransport === 'palette100x120') {
      const poidsMaxPalette = 750; // kg par palette
      
      // Si on a un poids volumétrique, l'utiliser
      if (estimation && estimation.poidsVolumetrique && estimation.poidsFacture) {
        weightForTarif = estimation.poidsFacture;
      }
      
      // Calculer le nombre de palettes basé sur le poids
      const palettesParPoids = Math.ceil(weightForTarif / poidsMaxPalette);
      
      // Prendre le maximum entre la quantité estimée et celle basée sur le poids
      finalQuantity = Math.max(finalQuantity, palettesParPoids);
      
      // Si le nombre dépasse les limites, passer en mètre plancher
      if ((typeTransport === 'palette80x120' && finalQuantity > 33) || 
          (typeTransport === 'palette100x120' && finalQuantity > 26)) {
        typeTransport = 'metrePlancher';
        const metresEstimes = finalQuantity * 0.4;
        const paliers = [0.5, 1, 1.2, 1.5, 2, 2.4, 2.8, 3, 3.6, 4, 4.4, 4.8, 5.2, 5.5, 6, 6.4, 6.8, 7.2, 7.6, 8, 8.4, 8.8, 9.2, 9.6, 10, 10.4, 10.8, 11.2, 13.2];
        finalQuantity = paliers.find(p => p >= metresEstimes) || 13.2;
      }
    }
    
    // 4. Calculer le tarif de base selon le pôle
    console.log('Calcul tarif avec:', {
      pole: poleIdFormatted,
      zoneCode: zone.code,
      typeTransport,
      quantity: finalQuantity,
      weight: typeTransport === 'messagerie' ? weightForCalculation : undefined
    });
    
    const basePrice = calculateTarifByPole(
      poleIdFormatted, 
      zone.code, 
      typeTransport, 
      typeTransport === 'messagerie' ? weightForCalculation : finalQuantity,
      typeTransport === 'messagerie' ? weightForCalculation : undefined
    );
    
    console.log('Prix de base calculé:', basePrice);
    
    if (!basePrice) {
      console.error('Tarif non trouvé pour:', {
        pole: poleIdFormatted,
        zone: zone.code,
        type: typeTransport,
        quantity: finalQuantity
      });
      return {
        success: false,
        error: 'Impossible de calculer le tarif pour cette configuration'
      };
    }

    // 4. Calculer le prix total avec options
    const pricing = calculateTotalPrice(basePrice, input.options, poleIdFormatted);

    // 5. Déterminer le délai de livraison
    let delaiLivraison = '24-48h';
    if (zone.code === 'CORSE') {
      delaiLivraison = '48-72h';
    } else if (zone.code === 'MONACO') {
      delaiLivraison = '48h';
    }

    // 6. Conditions spéciales
    const conditionsSpeciales: string[] = [];
    if (input.options.matieresDangereuses) {
      conditionsSpeciales.push('Transport de matières dangereuses soumis à réglementation ADR');
    }
    if (zone.code === 'CORSE') {
      conditionsSpeciales.push('Livraison en Corse soumise aux conditions maritimes');
    }
    if (zone.code === 'MONACO') {
      conditionsSpeciales.push('Livraison à Monaco soumise aux formalités douanières');
    }

    // Extraire le département du code postal
    const department = getDepartmentFromPostalCode(input.postalCodeDestination);

    // Calculer le poids volumétrique si nécessaire
    let poidsVolumetrique = undefined;
    let poidsFacture = weightForCalculation;
    let calculVolumetrique = undefined;
    
    // Pour la messagerie, ajouter les détails du calcul volumétrique
    if (typeTransport === 'messagerie') {
      const longueurM = input.dimensions.longueur / 100;
      const largeurM = input.dimensions.largeur / 100;
      const hauteurM = input.dimensions.hauteur / 100;
      poidsVolumetrique = longueurM * largeurM * hauteurM * 250;
      calculVolumetrique = {
        longueur: longueurM,
        largeur: largeurM,
        hauteur: hauteurM,
        volumeM3: longueurM * largeurM * hauteurM,
        poidsVolumetrique: poidsVolumetrique
      };
    }

    return {
      success: true,
      data: {
        zone: {
          code: zone.code,
          name: zone.name,
          department
        },
        transport: {
          type: getTransportTypeLabel(typeTransport),
          quantity: finalQuantity,
          weight: input.weight,
          poidsVolumetrique: poidsVolumetrique,
          poidsFacture: poidsFacture,
          transportMode: typeTransport === 'messagerie' ? 'messagerie' : 'palette',
          selectionReason: estimation ? estimation.baseSur : undefined,
          calculAffrètement: calculAffrètement,
          calculVolumetrique: calculVolumetrique
        },
        pricing,
        details: {
          delaiLivraison,
          conditionsSpeciales: conditionsSpeciales.length > 0 ? conditionsSpeciales : undefined
        }
      }
    };
  } catch (error) {
    return {
      success: false,
      error: 'Une erreur est survenue lors du calcul de la cotation'
    };
  }
}

// Fonction utilitaire pour obtenir le label du type de transport
function getTransportTypeLabel(type: string): string {
  switch (type) {
    case 'palette80x120':
      return 'Palette 80x120';
    case 'palette100x120':
      return 'Palette 100x120';
    case 'metrePlancher':
      return 'Mètre de plancher';
    case 'messagerie':
      return 'Messagerie';
    default:
      return type;
  }
}

// Fonction pour estimer le nombre de palettes nécessaires
export function estimatePalettes(dimensions: { longueur: number; largeur: number; hauteur: number }, poids: number) {
  // Convertir les dimensions en mètres
  const longueurM = dimensions.longueur / 100;
  const largeurM = dimensions.largeur / 100;
  const hauteurM = dimensions.hauteur / 100;
  
  // Vérifier si c'est une palette standard
  const isPalette80x120 = (longueurM === 0.8 && largeurM === 1.2) || (longueurM === 1.2 && largeurM === 0.8);
  const isPalette100x120 = (longueurM === 1.0 && largeurM === 1.2) || (longueurM === 1.2 && largeurM === 1.0);
  
  // Si ce n'est pas une palette standard, TOUJOURS utiliser la formule d'affrètement
  if (!isPalette80x120 && !isPalette100x120) {
    // Pour les dimensions non standard, toujours utiliser la formule d'affrètement
    // Formule d'affrètement : longueur × largeur ÷ 2.4
    const metresAffretes = (longueurM * largeurM) / 2.4;
    
    // Arrondir au palier supérieur de la grille
    const paliers = [0.5, 1, 1.2, 1.5, 2, 2.4, 2.8, 3, 3.6, 4, 4.4, 4.8, 5.2, 5.5, 6, 6.4, 6.8, 7.2, 7.6, 8, 8.4, 8.8, 9.2, 9.6, 10, 10.4, 10.8, 11.2, 13.2];
    let metrePlancher = paliers.find(p => p >= metresAffretes) || 13.2;
    
    // Vérifier aussi le poids pour les mètres plancher
    const maxWeights: Record<number, number> = {
      0.5: 600, 1: 1200, 1.2: 1800, 1.5: 2400, 2: 3000, 2.4: 3600, 2.8: 4200,
      3: 4800, 3.6: 5400, 4: 6000, 4.4: 6600, 4.8: 7200, 5.2: 7800, 5.5: 8400,
      6: 9000, 6.4: 9600, 6.8: 10200, 7.2: 10800, 7.6: 11400, 8: 12000,
      8.4: 12600, 8.8: 13200, 9.2: 13800, 9.6: 14400, 10: 15000,
      10.4: 15600, 10.8: 16200, 11.2: 16800, 13.2: 24000
    };
    
    // Si le poids dépasse le max pour les mètres calculés, augmenter
    if (poids > maxWeights[metrePlancher]) {
      for (const meters of paliers) {
        if (poids <= maxWeights[meters]) {
          metrePlancher = meters;
          break;
        }
      }
    }
    
    return {
      nombre: metrePlancher,
      type: 'metrePlancher',
      baseSur: 'affrètement (dimensions non standard)',
      calculAffrètement: {
        longueur: longueurM,
        largeur: largeurM,
        metresCalcules: metresAffretes,
        metresFactures: metrePlancher
      }
    };
  }
  
  // Pour les palettes standard, garder l'ancien calcul
  const surfacePalette80 = 0.8 * 1.2; // 0.96 m²
  const surfacePalette100 = 1.0 * 1.2; // 1.20 m²
  
  // Volume et poids max par palette
  const volumeMaxPalette = 2.4; // m³ (hauteur max 2m)
  const poidsMaxPalette = 750; // kg
  
  // Calcul du volume total
  const volumeTotal = (dimensions.longueur * dimensions.largeur * dimensions.hauteur) / 1000000; // conversion cm³ en m³
  
  // Estimation basée sur le volume
  const palettesParVolume = Math.ceil(volumeTotal / volumeMaxPalette);
  
  // Estimation basée sur le poids
  const palettesParPoids = Math.ceil(poids / poidsMaxPalette);
  
  // Prendre le maximum des deux
  const nombrePalettes = Math.max(palettesParVolume, palettesParPoids);
  
  // Recommander le type de palette
  const type = isPalette80x120 ? 'palette80x120' : 'palette100x120';
  
  return {
    nombre: nombrePalettes,
    type,
    baseSur: palettesParVolume > palettesParPoids ? 'volume' : 'poids'
  };
}


// Fonction pour déterminer automatiquement le type de transport
export function determineTransportType(weight: number, dimensions: { longueur: number; largeur: number; hauteur: number }): {
  type: 'messagerie' | 'palette';
  details: {
    volume: number;
    isMessagerie: boolean;
    reason: string;
  };
} {
  // Calcul du volume en m³
  const volumeM3 = (dimensions.longueur * dimensions.largeur * dimensions.hauteur) / 1000000;
  
  // Critères : poids < 200kg ET volume < 0.8m³ → Messagerie
  if (weight < 200 && volumeM3 < 0.8) {
    return {
      type: 'messagerie',
      details: {
        volume: volumeM3,
        isMessagerie: true,
        reason: `Poids (${weight}kg) < 200kg et Volume (${volumeM3.toFixed(2)}m³) < 0.8m³`
      }
    };
  } else {
    return {
      type: 'palette',
      details: {
        volume: volumeM3,
        isMessagerie: false,
        reason: `Poids (${weight}kg) ≥ 200kg ou Volume (${volumeM3.toFixed(2)}m³) ≥ 0.8m³`
      }
    };
  }
}

// Fonction pour obtenir le code postal par défaut d'un pôle
function getDefaultPostalCodeForPole(poleId: string): string {
  switch (poleId) {
    case 'roissy':
      return '95700'; // Roissy-en-France
    case 'marseille':
      return '13000';
    case 'lyon':
      return '69000';
    case 'le-havre':
      return '76600';
    default:
      return '95700'; // Par défaut Roissy
  }
}

// Fonction pour obtenir le prix minimum de la grille tarifaire d'un pôle
export function getMinimumPriceForPole(poleId: string): number {
  switch (poleId) {
    case 'roissy':
      return 91; // Prix minimum pour Roissy (R1, 1 palette)
    case 'marseille':
      return 101; // Prix minimum pour Marseille (R1, 1 palette)
    case 'lyon':
      return 91; // Prix minimum pour Lyon (R1, 1 palette)
    case 'le-havre':
      return 91; // Prix minimum pour Le Havre (R1, 1 palette)
    default:
      return 91;
  }
}

// Fonction pour calculer une cotation Express RP
function calculateExpressRPCotation(input: CotationInput, departurePostalCode: string): CotationResult {
  try {
    // Déterminer la zone Express RP
    const expressZone = getExpressRPZone(input.postalCodeDestination, input.cityNameDestination);
    if (!expressZone) {
      // Si pas de zone Express RP trouvée, retourner une erreur
      return {
        success: false,
        error: 'Zone Express RP non desservie pour ce code postal'
      };
    }
    
    // Calculer le volume total
    const volumeCm3 = input.dimensions.longueur * input.dimensions.largeur * input.dimensions.hauteur;
    
    // Sélectionner le véhicule approprié
    const vehicle = selectExpressRPVehicle(input.weight, volumeCm3);
    
    // Calculer le prix Express RP
    const pricing = calculateExpressRPPrice(vehicle, expressZone, {
      attente: input.options.attente,
      manutention: input.options.manutention,
      hayon: input.options.hayon,
      matieresDangereuses: input.options.matieresDangereuses
    });
    
    if (!pricing) {
      return {
        success: false,
        error: 'Impossible de calculer le tarif Express RP'
      };
    }
    
    // Extraire le département du code postal
    const department = getDepartmentFromPostalCode(input.postalCodeDestination);
    
    return {
      success: true,
      data: {
        zone: {
          code: `EXPRESS_RP_${expressZone}`,
          name: `Express RP - Zone ${expressZone}`,
          department
        },
        transport: {
          type: 'Express RP',
          quantity: 1,
          weight: input.weight,
          transportMode: 'expressRP',
          vehicleType: vehicle,
          selectionReason: `Service Express RP - Véhicule ${vehicle} pour zone ${expressZone}`
        },
        pricing,
        details: {
          delaiLivraison: 'J+1 avant 13h',
          conditionsSpeciales: [
            'Service Express Région Parisienne',
            `Livraison en véhicule ${vehicle}`,
            'Délai garanti J+1 avant 13h'
          ]
        }
      }
    };
  } catch (error) {
    return {
      success: false,
      error: 'Une erreur est survenue lors du calcul Express RP'
    };
  }
}