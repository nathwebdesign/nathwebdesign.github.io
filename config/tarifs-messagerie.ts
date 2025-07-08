// Configuration des tarifs messagerie pour tous les pôles
// Grille tarifaire commune à tous les pôles R DISTRIB SOLUTIONS

export interface ZoneMessagerie {
  code: string;
  name: string;
  departments: string[];
  delai: string;
}

export interface TarifMessagerie {
  minWeight: number;
  maxWeight: number;
  zones: Record<string, number>; // Prix par zone
}

// Zones messagerie (communes à tous les pôles)
export const zonesMessagerie: ZoneMessagerie[] = [
  {
    code: 'R1',
    name: 'Zone R1',
    departments: ['27', '28', '45', '60', '76'],
    delai: '24h'
  },
  {
    code: 'R2',
    name: 'Zone R2',
    departments: ['02', '10', '14', '51', '61', '72', '80', '89'],
    delai: '24h'
  },
  {
    code: 'R3',
    name: 'Zone R3',
    departments: ['08', '18', '36', '37', '41', '59', '62'],
    delai: '24h'
  },
  {
    code: 'R4',
    name: 'Zone R4',
    departments: ['21', '35', '49', '50', '52', '53', '54', '55', '57', '58'],
    delai: '24h'
  },
  {
    code: 'R5',
    name: 'Zone R5',
    departments: ['22', '42', '44', '56', '79', '85', '86'],
    delai: '24h'
  },
  {
    code: 'R6',
    name: 'Zone R6',
    departments: ['01', '16', '17', '25', '38', '69', '70', '71', '87'],
    delai: '24h'
  },
  {
    code: 'R7',
    name: 'Zone R7',
    departments: ['03', '15', '19', '23', '24', '63', '67', '68', '88', '90'],
    delai: '24h'
  },
  {
    code: 'R8',
    name: 'Zone R8',
    departments: ['07', '26', '29', '33', '39', '43', '73', '74'],
    delai: '24h'
  },
  {
    code: 'R9',
    name: 'Zone R9',
    departments: ['12', '30', '31', '32', '40', '46', '47', '48', '81', '82'],
    delai: '24h'
  },
  {
    code: 'R10',
    name: 'Zone R10',
    departments: ['06', '13', '34', '83', '84'],
    delai: '24/48h'
  },
  {
    code: 'R11',
    name: 'Zone R11',
    departments: ['04', '05', '09', '11', '64', '65', '66'],
    delai: '24/48h'
  }
];

// Grille tarifaire messagerie (commune à tous les pôles)
export const tarifsMessagerie: TarifMessagerie[] = [
  {
    minWeight: 0,
    maxWeight: 9,
    zones: {
      'R1': 41,
      'R2': 42,
      'R3': 43,
      'R4': 44,
      'R5': 45,
      'R6': 46,
      'R7': 47,
      'R8': 48,
      'R9': 49,
      'R10': 60,
      'R11': 61
    }
  },
  {
    minWeight: 10,
    maxWeight: 19,
    zones: {
      'R1': 51,
      'R2': 52,
      'R3': 53,
      'R4': 54,
      'R5': 55,
      'R6': 56,
      'R7': 57,
      'R8': 58,
      'R9': 69,
      'R10': 70,
      'R11': 81
    }
  },
  {
    minWeight: 20,
    maxWeight: 29,
    zones: {
      'R1': 51,
      'R2': 62,
      'R3': 63,
      'R4': 64,
      'R5': 65,
      'R6': 66,
      'R7': 67,
      'R8': 68,
      'R9': 79,
      'R10': 80,
      'R11': 91
    }
  },
  {
    minWeight: 30,
    maxWeight: 39,
    zones: {
      'R1': 61,
      'R2': 62,
      'R3': 63,
      'R4': 64,
      'R5': 65,
      'R6': 66,
      'R7': 67,
      'R8': 78,
      'R9': 79,
      'R10': 80,
      'R11': 91
    }
  },
  {
    minWeight: 40,
    maxWeight: 49,
    zones: {
      'R1': 61,
      'R2': 72,
      'R3': 73,
      'R4': 74,
      'R5': 75,
      'R6': 76,
      'R7': 77,
      'R8': 78,
      'R9': 89,
      'R10': 90,
      'R11': 101
    }
  },
  {
    minWeight: 50,
    maxWeight: 59,
    zones: {
      'R1': 71,
      'R2': 72,
      'R3': 73,
      'R4': 84,
      'R5': 85,
      'R6': 86,
      'R7': 87,
      'R8': 88,
      'R9': 89,
      'R10': 100,
      'R11': 111
    }
  },
  {
    minWeight: 60,
    maxWeight: 69,
    zones: {
      'R1': 81,
      'R2': 82,
      'R3': 83,
      'R4': 84,
      'R5': 85,
      'R6': 86,
      'R7': 87,
      'R8': 88,
      'R9': 99,
      'R10': 100,
      'R11': 121
    }
  },
  {
    minWeight: 70,
    maxWeight: 79,
    zones: {
      'R1': 91,
      'R2': 92,
      'R3': 93,
      'R4': 94,
      'R5': 95,
      'R6': 96,
      'R7': 97,
      'R8': 98,
      'R9': 109,
      'R10': 110,
      'R11': 121
    }
  },
  {
    minWeight: 80,
    maxWeight: 89,
    zones: {
      'R1': 91,
      'R2': 92,
      'R3': 93,
      'R4': 94,
      'R5': 95,
      'R6': 96,
      'R7': 97,
      'R8': 98,
      'R9': 109,
      'R10': 110,
      'R11': 131
    }
  },
  {
    minWeight: 90,
    maxWeight: 99,
    zones: {
      'R1': 101,
      'R2': 102,
      'R3': 103,
      'R4': 104,
      'R5': 105,
      'R6': 106,
      'R7': 107,
      'R8': 108,
      'R9': 119,
      'R10': 120,
      'R11': 131
    }
  },
  {
    minWeight: 100,
    maxWeight: 199,
    zones: {
      'R1': 101,
      'R2': 102,
      'R3': 103,
      'R4': 104,
      'R5': 105,
      'R6': 106,
      'R7': 107,
      'R8': 108,
      'R9': 119,
      'R10': 120,
      'R11': 141
    }
  }
];

// Fonction pour obtenir la zone messagerie d'un département
export function getZoneMessagerieByDepartment(department: string): ZoneMessagerie | undefined {
  const normalizedDept = department.trim().toUpperCase();
  
  return zonesMessagerie.find(zone => 
    zone.departments.some(dept => dept.toUpperCase() === normalizedDept)
  );
}

// Fonction pour calculer le tarif messagerie
export function calculateMessageriePrice(weight: number, zoneCode: string): number | undefined {
  // Arrondir le poids à la dizaine de kilos supérieure pour les poids > 100kg
  let roundedWeight = weight;
  if (weight > 100) {
    roundedWeight = Math.ceil(weight / 10) * 10;
  }
  
  // Trouver la tranche de poids correspondante
  const tarifRow = tarifsMessagerie.find(tarif => 
    roundedWeight >= tarif.minWeight && roundedWeight <= tarif.maxWeight
  );
  
  if (!tarifRow) {
    // Pour les poids > 199kg, on divise par le poids et on arrondit à la dizaine supérieure
    if (weight > 199) {
      // Utiliser le tarif de la tranche 100-199 comme base
      const baseTarif = tarifsMessagerie[tarifsMessagerie.length - 1];
      const basePrice = baseTarif.zones[zoneCode];
      if (basePrice) {
        // Calculer le prix proportionnel
        const pricePerKg = basePrice / 150; // Prix moyen pour 150kg (milieu de la tranche)
        return Math.ceil((pricePerKg * weight) / 10) * 10;
      }
    }
    return undefined;
  }
  
  return tarifRow.zones[zoneCode];
}

// Options messagerie
export const optionsMessagerie = {
  hayon: 30,
  passage: 0.5, // 50% de la course
  assurance: {
    taux: 0.005, // 0.5%
    minimum: 30
  }
};

// Conditions générales
export const conditionsMessagerie = {
  rapportPoidsVolume: 250, // 1m³ = 250 kilos
  delaiIndicatif: true
};