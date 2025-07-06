// Configuration des zones de livraison R DISTRIB SOLUTIONS

export interface Zone {
  code: string;
  name: string;
  departments: string[];
}

export const zones: Zone[] = [
  {
    code: 'R1',
    name: 'Ile-de-France',
    departments: ['75', '77', '78', '91', '92', '93', '94', '95']
  },
  {
    code: 'R2',
    name: 'Nord-Ouest',
    departments: ['14', '27', '28', '50', '60', '61', '76', '80']
  },
  {
    code: 'R3',
    name: 'Nord-Est',
    departments: ['02', '08', '10', '51', '52', '54', '55', '57', '59', '62', '67', '68', '88']
  },
  {
    code: 'R4',
    name: 'Centre',
    departments: ['18', '36', '37', '41', '45']
  },
  {
    code: 'R5',
    name: 'Ouest',
    departments: ['22', '29', '35', '44', '49', '53', '56', '72', '85']
  },
  {
    code: 'R6',
    name: 'Sud-Ouest',
    departments: ['16', '17', '19', '23', '24', '33', '40', '47', '64', '79', '86', '87']
  },
  {
    code: 'R7',
    name: 'Centre-Est',
    departments: ['01', '03', '15', '21', '25', '39', '42', '43', '58', '63', '69', '70', '71', '89', '90']
  },
  {
    code: 'R8',
    name: 'Sud-Est',
    departments: ['04', '05', '07', '26', '38', '73', '74']
  },
  {
    code: 'R9',
    name: 'Midi-Pyrénées',
    departments: ['09', '12', '31', '32', '46', '65', '81', '82']
  },
  {
    code: 'R10',
    name: 'Languedoc-Roussillon',
    departments: ['11', '30', '34', '48', '66']
  },
  {
    code: 'R11',
    name: 'Provence-Alpes-Côte d\'Azur',
    departments: ['06', '13', '83', '84']
  },
  {
    code: 'MONACO',
    name: 'Monaco',
    departments: ['98'] // Code spécial pour Monaco
  },
  {
    code: 'CORSE',
    name: 'Corse',
    departments: ['2A', '2B']
  }
];

// Fonction utilitaire pour trouver la zone d'un département
export function getZoneByDepartment(department: string): Zone | undefined {
  // Normaliser le département (enlever les espaces, mettre en majuscules pour la Corse)
  const normalizedDept = department.trim().toUpperCase();
  
  return zones.find(zone => 
    zone.departments.some(dept => dept.toUpperCase() === normalizedDept)
  );
}

// Fonction pour obtenir le code de zone d'un département
export function getZoneCode(department: string): string | undefined {
  const zone = getZoneByDepartment(department);
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

// Fonction pour obtenir la zone à partir d'un code postal
export function getZoneByPostalCode(postalCode: string): Zone | undefined {
  const department = getDepartmentFromPostalCode(postalCode);
  return getZoneByDepartment(department);
}