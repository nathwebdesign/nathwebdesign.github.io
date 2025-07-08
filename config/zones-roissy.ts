// Configuration des zones de livraison pour ROISSY CDG
// Basé sur la grille tarifaire officielle R DISTRIB SOLUTIONS

export interface ZoneRoissy {
  code: string;
  name: string;
  departments: string[];
  delai: string;
}

export const zonesRoissy: ZoneRoissy[] = [
  {
    code: 'R1',
    name: 'Normandie-Centre',
    departments: ['27', '28', '45', '60', '76'],
    delai: '24h'
  },
  {
    code: 'R2',
    name: 'Nord-Centre',
    departments: ['02', '10', '14', '51', '61', '72', '80', '89'],
    delai: '24h'
  },
  {
    code: 'R3',
    name: 'Nord-Est-Centre',
    departments: ['08', '18', '36', '37', '41', '59', '62'],
    delai: '24h'
  },
  {
    code: 'R4',
    name: 'Est-Centre',
    departments: ['21', '35', '49', '50', '52', '53', '54', '55', '57', '58'],
    delai: '24h'
  },
  {
    code: 'R5',
    name: 'Ouest-Sud',
    departments: ['22', '42', '44', '56', '79', '85', '86'],
    delai: '24h'
  },
  {
    code: 'R6',
    name: 'Centre-Est-Sud',
    departments: ['01', '16', '17', '25', '38', '69', '70', '71', '87'],
    delai: '24h'
  },
  {
    code: 'R7',
    name: 'Centre-Sud-Est',
    departments: ['03', '15', '19', '23', '24', '63', '67', '68', '88', '90'],
    delai: '24h'
  },
  {
    code: 'R8',
    name: 'Sud-Est-Alpes',
    departments: ['07', '26', '29', '33', '39', '43', '73', '74'],
    delai: '24h'
  },
  {
    code: 'R9',
    name: 'Sud-Ouest',
    departments: ['12', '30', '31', '32', '40', '46', '47', '48', '81', '82'],
    delai: '24h'
  },
  {
    code: 'R10',
    name: 'Méditerranée',
    departments: ['06', '13', '34', '83', '84'],
    delai: '24/48h'
  },
  {
    code: 'R11',
    name: 'Sud-Pyrénées',
    departments: ['04', '05', '09', '11', '64', '65', '66'],
    delai: '24/48h'
  },
  {
    code: 'MONACO',
    name: 'Monaco',
    departments: ['98'],
    delai: '48h'
  },
  {
    code: 'CORSE',
    name: 'Corse',
    departments: ['2A', '2B'],
    delai: '48/72h'
  }
];

// Fonction pour obtenir la zone Roissy d'un département
export function getZoneRoissyByDepartment(department: string): ZoneRoissy | undefined {
  const normalizedDept = department.trim().toUpperCase();
  
  return zonesRoissy.find(zone => 
    zone.departments.some(dept => dept.toUpperCase() === normalizedDept)
  );
}

// Fonction pour obtenir le code de zone Roissy d'un département
export function getZoneRoissyCode(department: string): string | undefined {
  const zone = getZoneRoissyByDepartment(department);
  return zone?.code;
}

// Note: L'Île-de-France (75, 77, 78, 91, 92, 93, 94, 95) n'est pas dans cette grille
// car elle a sa propre tarification Express RP