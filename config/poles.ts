// Configuration des pôles R DISTRIB SOLUTIONS avec leurs zones respectives

export interface PoleZone {
  code: string;
  name: string;
  departments: string[];
}

export interface Pole {
  id: string;
  name: string;
  zones: PoleZone[];
  hasAutomaticPricing: boolean;
}

// Configuration pour le pôle de Roissy (grille officielle hors Île-de-France)
export const roissyZones: PoleZone[] = [
  {
    code: 'R1',
    name: 'Normandie-Centre',
    departments: ['27', '28', '45', '60', '76']
  },
  {
    code: 'R2',
    name: 'Nord-Centre',
    departments: ['02', '10', '14', '51', '61', '72', '80', '89']
  },
  {
    code: 'R3',
    name: 'Nord-Est-Centre',
    departments: ['08', '18', '36', '37', '41', '59', '62']
  },
  {
    code: 'R4',
    name: 'Est-Centre',
    departments: ['21', '35', '49', '50', '52', '53', '54', '55', '57', '58']
  },
  {
    code: 'R5',
    name: 'Ouest-Sud',
    departments: ['22', '42', '44', '56', '79', '85', '86']
  },
  {
    code: 'R6',
    name: 'Centre-Est-Sud',
    departments: ['01', '16', '17', '25', '38', '69', '70', '71', '87']
  },
  {
    code: 'R7',
    name: 'Centre-Sud-Est',
    departments: ['03', '15', '19', '23', '24', '63', '67', '68', '88', '90']
  },
  {
    code: 'R8',
    name: 'Sud-Est-Alpes',
    departments: ['07', '26', '29', '33', '39', '43', '73', '74']
  },
  {
    code: 'R9',
    name: 'Sud-Ouest',
    departments: ['12', '30', '31', '32', '40', '46', '47', '48', '81', '82']
  },
  {
    code: 'R10',
    name: 'Méditerranée',
    departments: ['06', '13', '34', '83', '84']
  },
  {
    code: 'R11',
    name: 'Sud-Pyrénées',
    departments: ['04', '05', '09', '11', '64', '65', '66']
  },
  {
    code: 'MONACO',
    name: 'Monaco',
    departments: ['98']
  },
  {
    code: 'CORSE',
    name: 'Corse',
    departments: ['2A', '2B']
  }
];

// Configuration pour le pôle de Marseille
export const marseilleZones: PoleZone[] = [
  {
    code: 'R1',
    name: 'Bouches-du-Rhône',
    departments: ['13']
  },
  {
    code: 'R2',
    name: 'Gard-Var-Vaucluse',
    departments: ['30', '83', '84']
  },
  {
    code: 'R3',
    name: 'Alpes-Méditerranée',
    departments: ['04', '05', '06', '07', '26', '34']
  },
  {
    code: 'R4',
    name: 'Languedoc-Rhône',
    departments: ['11', '12', '38', '42', '48', '66', '69']
  },
  {
    code: 'R5',
    name: 'Massif Central-Sud',
    departments: ['01', '09', '15', '31', '43', '71', '73', '74', '81', '82']
  },
  {
    code: 'R6',
    name: 'Centre-France',
    departments: ['03', '21', '32', '39', '63']
  },
  {
    code: 'R7',
    name: 'Sud-Ouest Élargi',
    departments: ['18', '19', '23', '24', '25', '33', '36', '40', '46', '47', '58', '64', '65']
  },
  {
    code: 'R8',
    name: 'Est-France',
    departments: ['10', '16', '41', '45', '70', '87', '88', '89', '90']
  },
  {
    code: 'R9',
    name: 'Centre-Est',
    departments: ['37', '51', '52', '54', '68', '86']
  },
  {
    code: 'R10',
    name: 'Nord-Ouest',
    departments: ['02', '17', '27', '28', '44', '49', '53', '55', '57', '60', '61', '67', '72', '76', '79', '80', '85']
  },
  {
    code: 'R11',
    name: 'Nord-France',
    departments: ['08', '14', '22', '29', '35', '50', '56', '59', '62']
  },
  {
    code: 'MONACO',
    name: 'Monaco',
    departments: ['98']
  },
  {
    code: 'CORSE',
    name: 'Corse',
    departments: ['2A', '2B']
  }
];

// Configuration pour le pôle du Havre
export const leHavreZones: PoleZone[] = [
  {
    code: 'R1',
    name: 'Normandie',
    departments: ['27', '61', '76']
  },
  {
    code: 'R2',
    name: 'Nord-Ouest Élargi',
    departments: ['02', '14', '28', '35', '45', '50', '53', '59', '60', '62', '72', '80']
  },
  {
    code: 'R3',
    name: 'Grand Nord-Est',
    departments: ['08', '10', '18', '22', '36', '37', '41', '44', '49', '51', '56', '89']
  },
  {
    code: 'R4',
    name: 'Centre-Est',
    departments: ['03', '21', '23', '29', '52', '55', '58', '79', '85', '86']
  },
  {
    code: 'R5',
    name: 'Est',
    departments: ['19', '25', '54', '57', '70', '71', '87', '88']
  },
  {
    code: 'R6',
    name: 'Centre-Sud',
    departments: ['16', '17', '39', '42', '63', '67', '68', '90']
  },
  {
    code: 'R7',
    name: 'Sud',
    departments: ['01', '15', '24', '33', '38', '43', '69', '73', '74']
  },
  {
    code: 'R8',
    name: 'Grand Sud',
    departments: ['07', '12', '26', '32', '40', '46', '47', '48', '81', '82']
  },
  {
    code: 'R9',
    name: 'Méditerranée Ouest',
    departments: ['13', '30', '31', '34', '64', '65', '84']
  },
  {
    code: 'R10',
    name: 'Méditerranée Est',
    departments: ['04', '05', '06', '09', '11', '66', '83']
  },
  {
    code: 'MONACO',
    name: 'Monaco',
    departments: ['98']
  },
  {
    code: 'CORSE',
    name: 'Corse',
    departments: ['2A', '2B']
  }
];

// Configuration pour le pôle de Lyon
export const lyonZones: PoleZone[] = [
  {
    code: 'R1',
    name: 'Rhône',
    departments: ['69']
  },
  {
    code: 'R2',
    name: 'Région proche',
    departments: ['01', '38', '42', '71']
  },
  {
    code: 'R3',
    name: 'Centre-Est',
    departments: ['03', '21', '39', '43', '63']
  },
  {
    code: 'R4',
    name: 'Sud-Est',
    departments: ['07', '25', '26', '45', '70', '58']
  },
  {
    code: 'R5',
    name: 'Sud et Centre',
    departments: ['10', '15', '18', '28', '30', '48', '51', '52', '73', '74', '84']
  },
  {
    code: 'R6',
    name: 'Méditerranée et Est',
    departments: ['04', '06', '13', '24', '34', '36', '37', '41', '67', '68', '83', '89', '90']
  },
  {
    code: 'R7',
    name: 'Sud-Ouest',
    departments: ['05', '11', '16', '17', '23', '31', '33', '44', '49', '81', '82', '87']
  },
  {
    code: 'R8',
    name: 'Nord-Est',
    departments: ['02', '08', '09', '19', '27', '54', '55', '57', '60', '61', '66', '88']
  },
  {
    code: 'R9',
    name: 'Nord-Ouest',
    departments: ['14', '46', '47', '59', '62', '72', '76', '79', '80', '85', '86']
  },
  {
    code: 'R10',
    name: 'Ouest',
    departments: ['12', '22', '32', '35', '40', '53', '56']
  },
  {
    code: 'R11',
    name: 'Extrême Ouest',
    departments: ['29', '50', '64', '65']
  }
];

// Liste des pôles
export const poles: Pole[] = [
  {
    id: 'roissy',
    name: 'Roissy',
    zones: roissyZones,
    hasAutomaticPricing: true
  },
  {
    id: 'marseille',
    name: 'Marseille',
    zones: marseilleZones,
    hasAutomaticPricing: true
  },
  {
    id: 'lyon',
    name: 'Lyon',
    zones: lyonZones,
    hasAutomaticPricing: true
  },
  {
    id: 'le-havre',
    name: 'Le Havre',
    zones: leHavreZones,
    hasAutomaticPricing: true
  }
];

// Fonction pour obtenir un pôle par son ID
export function getPoleById(poleId: string): Pole | undefined {
  return poles.find(pole => pole.id === poleId);
}

// Fonction pour obtenir la zone d'un département pour un pôle donné
export function getZoneByDepartmentAndPole(department: string, poleId: string): PoleZone | undefined {
  const pole = getPoleById(poleId);
  if (!pole) return undefined;
  
  const normalizedDept = department.trim().toUpperCase();
  
  return pole.zones.find(zone => 
    zone.departments.some(dept => dept.toUpperCase() === normalizedDept)
  );
}

// Fonction pour obtenir le code de zone d'un département pour un pôle donné
export function getZoneCodeByPole(department: string, poleId: string): string | undefined {
  const zone = getZoneByDepartmentAndPole(department, poleId);
  return zone?.code;
}

// Fonction pour extraire le département d'un code postal
export function getDepartmentFromPostalCode(postalCode: string): string {
  const code = postalCode.trim();
  
  // Cas spéciaux
  if (code.startsWith('97') || code.startsWith('98')) {
    return code.substring(0, 3); // DOM-TOM et Monaco
  }
  
  // Corse
  if (code.startsWith('20')) {
    const num = parseInt(code);
    if (num <= 20190) {
      return '2A'; // Corse-du-Sud
    } else {
      return '2B'; // Haute-Corse
    }
  }
  
  // Départements standards
  return code.substring(0, 2);
}

// Fonction pour obtenir la zone à partir d'un code postal et d'un pôle
export function getZoneByPostalCodeAndPole(postalCode: string, poleId: string): PoleZone | undefined {
  const department = getDepartmentFromPostalCode(postalCode);
  return getZoneByDepartmentAndPole(department, poleId);
}