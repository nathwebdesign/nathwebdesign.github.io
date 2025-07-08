// Configuration des tarifs Express pour tous les pôles
// Calcul : Distance aller-retour (km) × coefficient du véhicule

export interface VehiculeExpress {
  type: string;
  nom: string;
  coefficient: number;
  capacite: {
    poidsMax: number; // en kg
    volumeMax: number; // en m³
    longueurMax?: number; // en cm
    largeurMax?: number; // en cm
    hauteurMax?: number; // en cm
    nombrePalettesMax?: number; // nombre max de palettes 80x120
    descriptionCapacite?: string; // description de la capacité
  };
}

// Véhicules disponibles pour l'Express
export const vehiculesExpress: VehiculeExpress[] = [
  {
    type: 'break',
    nom: 'Break',
    coefficient: 0.5,
    capacite: {
      poidsMax: 350,
      volumeMax: 2,
      longueurMax: 120,  // 1 palette 80x120
      largeurMax: 80,
      hauteurMax: 100,
      nombrePalettesMax: 1,
      descriptionCapacite: '1 palette 80x120x100'
    }
  },
  {
    type: 'fourgon',
    nom: 'Fourgon',
    coefficient: 0.7,
    capacite: {
      poidsMax: 1200,
      volumeMax: 8,
      longueurMax: 240,  // Pour 3 palettes en longueur (80x3) ou 2x120
      largeurMax: 120,
      hauteurMax: 160,
      nombrePalettesMax: 3,
      descriptionCapacite: '3 palettes 80x120x160'
    }
  },
  {
    type: 'gv20m3',
    nom: 'Grand Volume 20m³',
    coefficient: 0.9,
    capacite: {
      poidsMax: 800,
      volumeMax: 20,
      longueurMax: 560,  // Pour 7 palettes
      largeurMax: 120,
      hauteurMax: 200,
      nombrePalettesMax: 7,
      descriptionCapacite: '7 palettes 80x120x200'
    }
  },
  {
    type: 'porteur',
    nom: 'Porteur',
    coefficient: 1.3,
    capacite: {
      poidsMax: 10000,
      volumeMax: 50,
      longueurMax: 720,  // Pour 18 palettes (plusieurs rangées)
      largeurMax: 240,   // 2 palettes côte à côte
      hauteurMax: 220,
      nombrePalettesMax: 18,
      descriptionCapacite: '18 palettes 80x120x220'
    }
  },
  {
    type: 'semi',
    nom: 'Semi-remorque',
    coefficient: 1.8,
    capacite: {
      poidsMax: 24000,
      volumeMax: 90,
      longueurMax: 1360,  // Longueur standard semi
      largeurMax: 240,    // 2 palettes côte à côte
      hauteurMax: 240,
      nombrePalettesMax: 33,
      descriptionCapacite: '33 palettes 80x120x240'
    }
  }
];

// Fonction pour sélectionner le véhicule approprié
export function selectExpressVehicle(
  poids: number, 
  dimensions: { longueur: number; largeur: number; hauteur: number },
  nombrePalettes?: number
): VehiculeExpress | null {
  // Calculer le volume en m³
  const volumeM3 = (dimensions.longueur * dimensions.largeur * dimensions.hauteur) / 1000000;
  
  // Trouver le plus petit véhicule qui peut contenir la marchandise
  for (const vehicule of vehiculesExpress) {
    const capacite = vehicule.capacite;
    
    // Vérifier le poids
    if (poids > capacite.poidsMax) continue;
    
    // Vérifier le volume
    if (volumeM3 > capacite.volumeMax) continue;
    
    // Vérifier le nombre de palettes si spécifié
    if (nombrePalettes && capacite.nombrePalettesMax && nombrePalettes > capacite.nombrePalettesMax) continue;
    
    // Vérifier les dimensions (si spécifiées)
    if (capacite.longueurMax && dimensions.longueur > capacite.longueurMax) continue;
    if (capacite.largeurMax && dimensions.largeur > capacite.largeurMax) continue;
    if (capacite.hauteurMax && dimensions.hauteur > capacite.hauteurMax) continue;
    
    // Ce véhicule convient
    return vehicule;
  }
  
  // Aucun véhicule ne convient (trop gros)
  return null;
}

// Fonction pour calculer le prix Express
export function calculateExpressPrice(
  distanceAllerRetour: number,
  vehicule: VehiculeExpress,
  options?: {
    hayon?: boolean;
    matieresDangereuses?: boolean;
    rendezVous?: boolean;
  }
): {
  basePrice: number;
  supplements: Record<string, number>;
  totalHT: number;
  tva: number;
  totalTTC: number;
} {
  // Prix de base = distance × coefficient
  const basePrice = distanceAllerRetour * vehicule.coefficient;
  
  const supplements: Record<string, number> = {};
  let totalHT = basePrice;
  
  // Options
  if (options?.hayon) {
    supplements.hayon = 30;
    totalHT += supplements.hayon;
  }
  
  if (options?.matieresDangereuses) {
    supplements.matieresDangereuses = basePrice * 0.25; // +25%
    totalHT += supplements.matieresDangereuses;
  }
  
  if (options?.rendezVous) {
    supplements.rendezVous = 50;
    totalHT += supplements.rendezVous;
  }
  
  // TVA 20%
  const tva = totalHT * 0.20;
  const totalTTC = totalHT + tva;
  
  return {
    basePrice,
    supplements,
    totalHT,
    tva,
    totalTTC
  };
}

// Fonction pour estimer la distance aller-retour
export function estimateDistance(
  coordsDepart: [number, number],
  coordsArrivee: [number, number]
): number {
  // Calcul simple de la distance à vol d'oiseau
  // En pratique, il faudrait utiliser une API de routing pour avoir la vraie distance routière
  const R = 6371; // Rayon de la Terre en km
  const dLat = toRad(coordsArrivee[0] - coordsDepart[0]);
  const dLon = toRad(coordsArrivee[1] - coordsDepart[1]);
  const lat1 = toRad(coordsDepart[0]);
  const lat2 = toRad(coordsArrivee[0]);

  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  const distance = R * c;
  
  // Multiplier par 1.3 pour approximer la distance routière
  // et par 2 pour l'aller-retour
  return Math.round(distance * 1.3 * 2);
}

function toRad(deg: number): number {
  return deg * (Math.PI / 180);
}