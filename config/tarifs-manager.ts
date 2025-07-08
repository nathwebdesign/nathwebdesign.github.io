// Gestionnaire centralisé des tarifs pour tous les pôles

import { 
  supplementOptions
} from './tarifs';

import {
  tarifsRoissy,
  getTarifRoissy,
  optionsTarifairesRoissy
} from './tarifs-roissy';

import { 
  tarifs80x120Marseille, 
  tarifs100x120Marseille, 
  tarifsMetrePlancherMarseille 
} from './tarifs-marseille';

import { 
  tarifs80x120LeHavre, 
  tarifs100x120LeHavre, 
  tarifsMetrePlancherLeHavre 
} from './tarifs-le-havre';

import { 
  tarifs80x120Lyon, 
  tarifs100x120Lyon, 
  tarifsMetrePlancherLyon,
  supplementOptionsLyon,
  calculateTotalPriceLyon
} from './tarifs-lyon';

import {
  calculateMessageriePrice,
  getZoneMessagerieByDepartment,
  optionsMessagerie
} from './tarifs-messagerie';

export interface TarifPalette {
  quantity: number;
  prices: Record<string, number>;
}

export interface TarifMetrePlancher {
  meters: number;
  maxWeight: number;
  prices: Record<string, number>;
}

export interface TarifMessagerie {
  minWeight: number;
  maxWeight: number;
  prices: Record<string, number>;
}

// Fonction pour obtenir les tarifs selon le pôle
export function getTarifsByPole(poleId: string) {
  switch (poleId) {
    case 'roissy':
      return {
        tarifs80x120: null, // Utiliser la nouvelle structure
        tarifs100x120: null, // Utiliser la nouvelle structure
        tarifsMetrePlancher: null, // Utiliser la nouvelle structure
        tarifsRoissy: tarifsRoissy
      };
    case 'marseille':
      return {
        tarifs80x120: tarifs80x120Marseille,
        tarifs100x120: tarifs100x120Marseille,
        tarifsMetrePlancher: tarifsMetrePlancherMarseille
      };
    case 'le-havre':
      return {
        tarifs80x120: tarifs80x120LeHavre,
        tarifs100x120: tarifs100x120LeHavre,
        tarifsMetrePlancher: tarifsMetrePlancherLeHavre
      };
    case 'lyon':
      return {
        tarifs80x120: tarifs80x120Lyon,
        tarifs100x120: tarifs100x120Lyon,
        tarifsMetrePlancher: tarifsMetrePlancherLyon
      };
    default:
      return null;
  }
}

// Fonction pour calculer le tarif selon le type de marchandise et le pôle
export function calculateTarifByPole(
  poleId: string,
  zoneCode: string,
  type: 'palette80x120' | 'palette100x120' | 'metrePlancher' | 'messagerie',
  quantity: number,
  weight?: number // Pour le mètre de plancher et la messagerie
): number | null {
  // Gestion spéciale pour Roissy avec la nouvelle grille
  if (poleId === 'roissy' && type !== 'messagerie') {
    return getTarifRoissy(zoneCode, type, quantity) || null;
  }
  // Pour la messagerie - utiliser directement la nouvelle fonction
  if (type === 'messagerie' && weight !== undefined) {
    // La grille messagerie utilise toujours les zones R1-R11
    const price = calculateMessageriePrice(weight, zoneCode);
    return price || null;
  }

  const tarifs = getTarifsByPole(poleId);
  if (!tarifs) return null;

  // Pour Roissy, on utilise tarifsRoissy qui est structuré différemment
  if (poleId === 'roissy' && type !== 'messagerie' && tarifs.tarifsRoissy) {
    // La fonction getTarifRoissy a déjà été appelée plus haut
    // On ne devrait pas arriver ici normalement
    return null;
  }
  
  let tarifsList: any[];
  
  switch (type) {
    case 'palette80x120':
      tarifsList = tarifs.tarifs80x120;
      break;
    case 'palette100x120':
      tarifsList = tarifs.tarifs100x120;
      break;
    case 'metrePlancher':
      tarifsList = tarifs.tarifsMetrePlancher;
      break;
    default:
      return null;
  }

  // Pour les palettes
  if (type === 'palette80x120' || type === 'palette100x120') {
    const tarifLine = tarifsList.find(t => t.quantity === quantity);
    return tarifLine ? tarifLine.prices[zoneCode] || null : null;
  }

  // Pour le mètre de plancher
  if (type === 'metrePlancher') {
    const tarifLine = tarifsList.find(t => 
      t.meters === quantity && (!weight || weight <= t.maxWeight)
    );
    return tarifLine ? tarifLine.prices[zoneCode] || null : null;
  }

  return null;
}

// Fonction pour calculer le prix total avec options
export function calculateTotalPrice(
  basePrice: number,
  options: {
    hayon?: boolean;
    attente?: number; // Nombre d'heures
    matieresDangereuses?: boolean;
    valeurMarchandise?: number; // Pour l'assurance
    hayonEnlevement?: boolean;
    hayonLivraison?: boolean;
    rendezVousEnlevement?: boolean;
    rendezVousLivraison?: boolean;
  },
  poleId?: string // Ajout du pôle pour gérer les différences de tarifs
): {
  basePrice: number;
  supplements: Record<string, number>;
  totalHT: number;
  tva: number;
  totalTTC: number;
} {
  // Utiliser la fonction spécifique pour Lyon si nécessaire
  if (poleId === 'lyon') {
    return calculateTotalPriceLyon(basePrice, options);
  }

  const supplements: Record<string, number> = {};
  let totalHT = basePrice;

  // Forfait hayon (ancienne méthode)
  if (options.hayon) {
    // Utiliser le tarif spécifique de Roissy si applicable
    const hayonPrice = poleId === 'roissy' ? optionsTarifairesRoissy.forfaitHayon : supplementOptions.hayon;
    supplements.hayon = hayonPrice;
    totalHT += supplements.hayon;
  }

  // Hayon à l'enlèvement (30€ pour messagerie selon la grille)
  if (options.hayonEnlevement) {
    const hayonPrice = poleId === 'roissy' ? optionsTarifairesRoissy.forfaitHayon : optionsMessagerie.hayon;
    supplements.hayonEnlevement = hayonPrice;
    totalHT += supplements.hayonEnlevement;
  }

  // Hayon à la livraison (30€ pour messagerie selon la grille)
  if (options.hayonLivraison) {
    const hayonPrice = poleId === 'roissy' ? optionsTarifairesRoissy.forfaitHayon : optionsMessagerie.hayon;
    supplements.hayonLivraison = hayonPrice;
    totalHT += supplements.hayonLivraison;
  }

  // Rendez-vous à l'enlèvement (forfait 50€)
  if (options.rendezVousEnlevement) {
    supplements.rendezVousEnlevement = 50;
    totalHT += supplements.rendezVousEnlevement;
  }

  // Rendez-vous à la livraison (forfait 50€)
  if (options.rendezVousLivraison) {
    supplements.rendezVousLivraison = 50;
    totalHT += supplements.rendezVousLivraison;
  }

  // Frais d'attente
  if (options.attente && options.attente > 0) {
    // Utiliser le tarif spécifique de Roissy si applicable
    const attentePrice = poleId === 'roissy' ? optionsTarifairesRoissy.fraisAttente : supplementOptions.attente;
    supplements.attente = options.attente * attentePrice;
    totalHT += supplements.attente;
  }

  // Matières dangereuses (+25% sur le tarif de base)
  if (options.matieresDangereuses) {
    // Utiliser le taux spécifique de Roissy si applicable
    const tauxMD = poleId === 'roissy' ? optionsTarifairesRoissy.matieresDangereuses : supplementOptions.matieresDangereuses;
    supplements.matieresDangereuses = basePrice * tauxMD;
    totalHT += supplements.matieresDangereuses;
  }

  // Assurance (0.5% de la valeur avec minimum 30€ selon la grille messagerie)
  if (options.valeurMarchandise && options.valeurMarchandise > 0) {
    // Utiliser les tarifs spécifiques de Roissy si applicable
    if (poleId === 'roissy') {
      const assuranceCalculee = options.valeurMarchandise * optionsTarifairesRoissy.assurance.taux;
      supplements.assurance = Math.max(assuranceCalculee, optionsTarifairesRoissy.assurance.minimum);
    } else {
      // Utiliser les tarifs messagerie (0.5% avec minimum 30€)
      const assuranceCalculee = options.valeurMarchandise * optionsMessagerie.assurance.taux;
      supplements.assurance = Math.max(assuranceCalculee, optionsMessagerie.assurance.minimum);
    }
    totalHT += supplements.assurance;
  }

  // Calcul TVA
  const tva = totalHT * supplementOptions.tva;
  const totalTTC = totalHT + tva;

  return {
    basePrice,
    supplements,
    totalHT,
    tva,
    totalTTC
  };
}

// Export des options de suppléments
export { supplementOptions };

// Export des tarifs Express RP
export * from './tarifs-express-rp';