// Grille tarifaire R DISTRIB SOLUTIONS - Pôle Lyon
// Mise à jour avec la nouvelle grille tarifaire

export interface TarifPalette {
  quantity: number;
  prices: Record<string, number>;
}

export interface TarifMetrePlancher {
  meters: number;
  maxWeight: number;
  prices: Record<string, number>;
}

// Configuration des zones pour Lyon
export const zonesLyon = {
  R1: ['69'],
  R2: ['01', '38', '42', '71'],
  R3: ['03', '21', '39', '43', '63'],
  R4: ['07', '25', '26', '45', '70', '58'],
  R5: ['10', '15', '18', '28', '30', '48', '51', '52', '73', '74', '84'],
  R6: ['04', '06', '13', '24', '34', '36', '37', '41', '67', '68', '83', '89', '90'],
  R7: ['05', '11', '16', '17', '23', '31', '33', '44', '49', '81', '82', '87'],
  R8: ['02', '08', '09', '19', '27', '54', '55', '57', '60', '61', '66', '88'],
  R9: ['14', '46', '47', '59', '62', '72', '76', '79', '80', '85', '86'],
  R10: ['12', '22', '32', '35', '40', '53', '56'],
  R11: ['29', '50', '64', '65']
};

// Tarifs pour palettes 80x120 - Lyon
export const tarifs80x120Lyon: TarifPalette[] = [
  { quantity: 1, prices: { R1: 91, R2: 102, R3: 123, R4: 134, R5: 145, R6: 146, R7: 147, R8: 158, R9: 169, R10: 180, R11: 201 } },
  { quantity: 2, prices: { R1: 121, R2: 132, R3: 153, R4: 164, R5: 165, R6: 176, R7: 197, R8: 208, R9: 229, R10: 250, R11: 261 } },
  { quantity: 3, prices: { R1: 131, R2: 142, R3: 173, R4: 184, R5: 195, R6: 226, R7: 247, R8: 268, R9: 299, R10: 320, R11: 351 } },
  { quantity: 4, prices: { R1: 151, R2: 162, R3: 183, R4: 204, R5: 235, R6: 246, R7: 277, R8: 298, R9: 339, R10: 360, R11: 391 } },
  { quantity: 5, prices: { R1: 161, R2: 172, R3: 193, R4: 224, R5: 255, R6: 286, R7: 307, R8: 338, R9: 379, R10: 400, R11: 431 } },
  { quantity: 6, prices: { R1: 171, R2: 182, R3: 213, R4: 244, R5: 285, R6: 306, R7: 327, R8: 358, R9: 399, R10: 430, R11: 461 } },
  { quantity: 7, prices: { R1: 191, R2: 202, R3: 233, R4: 264, R5: 305, R6: 326, R7: 357, R8: 388, R9: 429, R10: 450, R11: 491 } },
  { quantity: 8, prices: { R1: 201, R2: 212, R3: 253, R4: 284, R5: 315, R6: 346, R7: 377, R8: 408, R9: 449, R10: 480, R11: 521 } },
  { quantity: 9, prices: { R1: 211, R2: 222, R3: 273, R4: 304, R5: 345, R6: 376, R7: 407, R8: 438, R9: 479, R10: 520, R11: 561 } },
  { quantity: 10, prices: { R1: 221, R2: 232, R3: 283, R4: 324, R5: 365, R6: 406, R7: 437, R8: 478, R9: 519, R10: 560, R11: 601 } },
  { quantity: 11, prices: { R1: 231, R2: 242, R3: 293, R4: 334, R5: 375, R6: 406, R7: 447, R8: 488, R9: 539, R10: 580, R11: 621 } },
  { quantity: 12, prices: { R1: 241, R2: 252, R3: 303, R4: 344, R5: 385, R6: 416, R7: 467, R8: 508, R9: 559, R10: 600, R11: 651 } },
  { quantity: 13, prices: { R1: 251, R2: 262, R3: 313, R4: 354, R5: 395, R6: 436, R7: 477, R8: 528, R9: 579, R10: 630, R11: 681 } },
  { quantity: 14, prices: { R1: 261, R2: 282, R3: 323, R4: 364, R5: 415, R6: 466, R7: 507, R8: 548, R9: 609, R10: 660, R11: 711 } },
  { quantity: 15, prices: { R1: 271, R2: 292, R3: 333, R4: 384, R5: 425, R6: 486, R7: 527, R8: 588, R9: 649, R10: 700, R11: 751 } },
  { quantity: 16, prices: { R1: 281, R2: 302, R3: 353, R4: 394, R5: 445, R6: 496, R7: 547, R8: 598, R9: 659, R10: 720, R11: 781 } },
  { quantity: 17, prices: { R1: 291, R2: 312, R3: 363, R4: 404, R5: 455, R6: 506, R7: 557, R8: 608, R9: 679, R10: 740, R11: 801 } },
  { quantity: 18, prices: { R1: 301, R2: 322, R3: 373, R4: 424, R5: 475, R6: 526, R7: 577, R8: 628, R9: 699, R10: 770, R11: 831 } },
  { quantity: 19, prices: { R1: 311, R2: 332, R3: 383, R4: 434, R5: 485, R6: 546, R7: 597, R8: 658, R9: 729, R10: 800, R11: 861 } },
  { quantity: 20, prices: { R1: 321, R2: 342, R3: 393, R4: 444, R5: 505, R6: 566, R7: 617, R8: 678, R9: 749, R10: 820, R11: 881 } },
  { quantity: 21, prices: { R1: 331, R2: 352, R3: 403, R4: 454, R5: 535, R6: 586, R7: 647, R8: 708, R9: 769, R10: 840, R11: 911 } },
  { quantity: 22, prices: { R1: 341, R2: 362, R3: 413, R4: 474, R5: 545, R6: 606, R7: 657, R8: 718, R9: 789, R10: 860, R11: 931 } },
  { quantity: 23, prices: { R1: 351, R2: 372, R3: 423, R4: 484, R5: 565, R6: 616, R7: 677, R8: 738, R9: 819, R10: 890, R11: 961 } },
  { quantity: 24, prices: { R1: 361, R2: 382, R3: 433, R4: 499, R5: 585, R6: 646, R7: 707, R8: 768, R9: 839, R10: 900, R11: 991 } },
  { quantity: 25, prices: { R1: 371, R2: 392, R3: 443, R4: 514, R5: 605, R6: 666, R7: 727, R8: 798, R9: 859, R10: 930, R11: 1011 } },
  { quantity: 26, prices: { R1: 381, R2: 402, R3: 453, R4: 534, R5: 635, R6: 696, R7: 757, R8: 818, R9: 889, R10: 960, R11: 1051 } },
  { quantity: 27, prices: { R1: 391, R2: 412, R3: 463, R4: 554, R5: 655, R6: 716, R7: 777, R8: 828, R9: 809, R10: 990, R11: 1071 } },
  { quantity: 28, prices: { R1: 401, R2: 432, R3: 493, R4: 604, R5: 705, R6: 786, R7: 837, R8: 918, R9: 989, R10: 1080, R11: 1181 } },
  { quantity: 29, prices: { R1: 401, R2: 432, R3: 493, R4: 604, R5: 705, R6: 786, R7: 837, R8: 918, R9: 989, R10: 1080, R11: 1181 } },
  { quantity: 30, prices: { R1: 401, R2: 432, R3: 493, R4: 604, R5: 705, R6: 786, R7: 837, R8: 918, R9: 989, R10: 1080, R11: 1181 } },
  { quantity: 31, prices: { R1: 401, R2: 432, R3: 493, R4: 604, R5: 705, R6: 786, R7: 837, R8: 918, R9: 989, R10: 1080, R11: 1181 } },
  { quantity: 32, prices: { R1: 401, R2: 432, R3: 493, R4: 604, R5: 705, R6: 786, R7: 837, R8: 918, R9: 989, R10: 1080, R11: 1181 } },
  { quantity: 33, prices: { R1: 401, R2: 432, R3: 493, R4: 604, R5: 705, R6: 786, R7: 837, R8: 918, R9: 989, R10: 1080, R11: 1181 } }
];

// Tarifs pour palettes 100x120 - Lyon
export const tarifs100x120Lyon: TarifPalette[] = [
  { quantity: 1, prices: { R1: 91, R2: 102, R3: 123, R4: 134, R5: 145, R6: 146, R7: 147, R8: 158, R9: 169, R10: 180, R11: 201 } },
  { quantity: 2, prices: { R1: 121, R2: 132, R3: 153, R4: 164, R5: 165, R6: 176, R7: 197, R8: 208, R9: 229, R10: 250, R11: 261 } },
  { quantity: 3, prices: { R1: 131, R2: 142, R3: 173, R4: 184, R5: 195, R6: 226, R7: 247, R8: 268, R9: 299, R10: 320, R11: 351 } },
  { quantity: 4, prices: { R1: 151, R2: 162, R3: 183, R4: 204, R5: 235, R6: 246, R7: 277, R8: 298, R9: 339, R10: 360, R11: 391 } },
  { quantity: 5, prices: { R1: 161, R2: 172, R3: 193, R4: 224, R5: 255, R6: 286, R7: 307, R8: 338, R9: 379, R10: 400, R11: 431 } },
  { quantity: 6, prices: { R1: 171, R2: 182, R3: 213, R4: 244, R5: 285, R6: 306, R7: 327, R8: 358, R9: 399, R10: 430, R11: 461 } },
  { quantity: 7, prices: { R1: 191, R2: 202, R3: 233, R4: 264, R5: 305, R6: 326, R7: 357, R8: 388, R9: 429, R10: 450, R11: 491 } },
  { quantity: 8, prices: { R1: 201, R2: 212, R3: 253, R4: 284, R5: 315, R6: 346, R7: 377, R8: 408, R9: 449, R10: 480, R11: 521 } },
  { quantity: 9, prices: { R1: 211, R2: 222, R3: 273, R4: 304, R5: 345, R6: 376, R7: 407, R8: 438, R9: 479, R10: 520, R11: 561 } },
  { quantity: 10, prices: { R1: 221, R2: 232, R3: 283, R4: 324, R5: 365, R6: 406, R7: 437, R8: 478, R9: 519, R10: 560, R11: 601 } },
  { quantity: 11, prices: { R1: 231, R2: 242, R3: 293, R4: 334, R5: 375, R6: 406, R7: 447, R8: 488, R9: 539, R10: 580, R11: 621 } },
  { quantity: 12, prices: { R1: 241, R2: 252, R3: 303, R4: 344, R5: 385, R6: 416, R7: 467, R8: 508, R9: 559, R10: 600, R11: 651 } },
  { quantity: 13, prices: { R1: 251, R2: 262, R3: 313, R4: 354, R5: 395, R6: 436, R7: 477, R8: 528, R9: 579, R10: 630, R11: 681 } },
  { quantity: 14, prices: { R1: 261, R2: 282, R3: 323, R4: 364, R5: 415, R6: 466, R7: 507, R8: 548, R9: 609, R10: 660, R11: 711 } },
  { quantity: 15, prices: { R1: 271, R2: 292, R3: 333, R4: 384, R5: 425, R6: 486, R7: 527, R8: 588, R9: 649, R10: 700, R11: 751 } },
  { quantity: 16, prices: { R1: 281, R2: 302, R3: 353, R4: 394, R5: 445, R6: 496, R7: 547, R8: 598, R9: 659, R10: 720, R11: 781 } },
  { quantity: 17, prices: { R1: 291, R2: 312, R3: 363, R4: 404, R5: 455, R6: 506, R7: 557, R8: 608, R9: 679, R10: 740, R11: 801 } },
  { quantity: 18, prices: { R1: 301, R2: 322, R3: 373, R4: 424, R5: 475, R6: 526, R7: 577, R8: 628, R9: 699, R10: 770, R11: 831 } },
  { quantity: 19, prices: { R1: 311, R2: 332, R3: 383, R4: 434, R5: 485, R6: 546, R7: 597, R8: 658, R9: 729, R10: 800, R11: 861 } },
  { quantity: 20, prices: { R1: 321, R2: 342, R3: 393, R4: 444, R5: 505, R6: 566, R7: 617, R8: 678, R9: 749, R10: 820, R11: 881 } },
  { quantity: 21, prices: { R1: 331, R2: 352, R3: 403, R4: 454, R5: 535, R6: 586, R7: 647, R8: 708, R9: 769, R10: 840, R11: 911 } },
  { quantity: 22, prices: { R1: 341, R2: 362, R3: 413, R4: 474, R5: 545, R6: 606, R7: 657, R8: 718, R9: 789, R10: 860, R11: 931 } },
  { quantity: 23, prices: { R1: 341, R2: 362, R3: 413, R4: 474, R5: 545, R6: 606, R7: 657, R8: 718, R9: 789, R10: 860, R11: 931 } },
  { quantity: 24, prices: { R1: 341, R2: 362, R3: 413, R4: 474, R5: 545, R6: 606, R7: 657, R8: 718, R9: 789, R10: 860, R11: 931 } },
  { quantity: 25, prices: { R1: 341, R2: 362, R3: 413, R4: 474, R5: 545, R6: 606, R7: 657, R8: 718, R9: 789, R10: 860, R11: 931 } },
  { quantity: 26, prices: { R1: 341, R2: 362, R3: 413, R4: 474, R5: 545, R6: 606, R7: 657, R8: 718, R9: 789, R10: 860, R11: 931 } }
];

// Tarifs au mètre de plancher - Lyon
export const tarifsMetrePlancherLyon: TarifMetrePlancher[] = [
  { meters: 0.5, maxWeight: 600, prices: { R1: 91, R2: 102, R3: 123, R4: 134, R5: 145, R6: 146, R7: 147, R8: 158, R9: 169, R10: 180, R11: 201 } },
  { meters: 1, maxWeight: 1200, prices: { R1: 121, R2: 132, R3: 153, R4: 164, R5: 165, R6: 176, R7: 197, R8: 208, R9: 229, R10: 250, R11: 261 } },
  { meters: 1.2, maxWeight: 1800, prices: { R1: 131, R2: 142, R3: 173, R4: 184, R5: 195, R6: 226, R7: 247, R8: 268, R9: 299, R10: 320, R11: 351 } },
  { meters: 1.5, maxWeight: 2400, prices: { R1: 151, R2: 162, R3: 183, R4: 204, R5: 235, R6: 246, R7: 277, R8: 298, R9: 339, R10: 360, R11: 391 } },
  { meters: 2, maxWeight: 3000, prices: { R1: 161, R2: 172, R3: 193, R4: 224, R5: 255, R6: 286, R7: 307, R8: 338, R9: 379, R10: 400, R11: 431 } },
  { meters: 2.4, maxWeight: 3600, prices: { R1: 171, R2: 182, R3: 213, R4: 244, R5: 285, R6: 306, R7: 327, R8: 358, R9: 399, R10: 430, R11: 461 } },
  { meters: 2.8, maxWeight: 4200, prices: { R1: 191, R2: 202, R3: 233, R4: 264, R5: 305, R6: 326, R7: 357, R8: 388, R9: 429, R10: 450, R11: 491 } },
  { meters: 3, maxWeight: 4800, prices: { R1: 201, R2: 212, R3: 253, R4: 284, R5: 315, R6: 346, R7: 377, R8: 408, R9: 449, R10: 480, R11: 521 } },
  { meters: 3.6, maxWeight: 5400, prices: { R1: 211, R2: 222, R3: 273, R4: 304, R5: 345, R6: 376, R7: 407, R8: 438, R9: 479, R10: 520, R11: 561 } },
  { meters: 4, maxWeight: 6000, prices: { R1: 221, R2: 232, R3: 283, R4: 324, R5: 365, R6: 406, R7: 437, R8: 478, R9: 519, R10: 560, R11: 601 } },
  { meters: 4.4, maxWeight: 6600, prices: { R1: 231, R2: 242, R3: 293, R4: 334, R5: 375, R6: 406, R7: 447, R8: 488, R9: 539, R10: 580, R11: 621 } },
  { meters: 4.8, maxWeight: 7200, prices: { R1: 241, R2: 252, R3: 303, R4: 344, R5: 385, R6: 416, R7: 467, R8: 508, R9: 559, R10: 600, R11: 651 } },
  { meters: 5.2, maxWeight: 7800, prices: { R1: 251, R2: 262, R3: 313, R4: 354, R5: 395, R6: 436, R7: 477, R8: 528, R9: 579, R10: 630, R11: 681 } },
  { meters: 5.5, maxWeight: 8400, prices: { R1: 261, R2: 282, R3: 323, R4: 364, R5: 415, R6: 466, R7: 507, R8: 548, R9: 609, R10: 660, R11: 711 } },
  { meters: 6, maxWeight: 9000, prices: { R1: 271, R2: 292, R3: 333, R4: 384, R5: 425, R6: 486, R7: 527, R8: 588, R9: 649, R10: 700, R11: 751 } },
  { meters: 6.4, maxWeight: 9600, prices: { R1: 281, R2: 302, R3: 353, R4: 394, R5: 445, R6: 496, R7: 547, R8: 598, R9: 659, R10: 720, R11: 781 } },
  { meters: 6.8, maxWeight: 10200, prices: { R1: 291, R2: 312, R3: 363, R4: 404, R5: 455, R6: 506, R7: 557, R8: 608, R9: 679, R10: 740, R11: 801 } },
  { meters: 7.2, maxWeight: 10800, prices: { R1: 301, R2: 322, R3: 373, R4: 424, R5: 475, R6: 526, R7: 577, R8: 628, R9: 699, R10: 770, R11: 831 } },
  { meters: 7.6, maxWeight: 11400, prices: { R1: 311, R2: 332, R3: 383, R4: 434, R5: 485, R6: 546, R7: 597, R8: 658, R9: 729, R10: 800, R11: 861 } },
  { meters: 8, maxWeight: 12000, prices: { R1: 321, R2: 342, R3: 393, R4: 444, R5: 505, R6: 566, R7: 617, R8: 678, R9: 749, R10: 820, R11: 881 } },
  { meters: 8.4, maxWeight: 12600, prices: { R1: 331, R2: 352, R3: 403, R4: 454, R5: 535, R6: 586, R7: 647, R8: 708, R9: 769, R10: 840, R11: 911 } },
  { meters: 8.8, maxWeight: 13200, prices: { R1: 341, R2: 362, R3: 413, R4: 474, R5: 545, R6: 606, R7: 657, R8: 718, R9: 789, R10: 860, R11: 931 } },
  { meters: 9.2, maxWeight: 13800, prices: { R1: 351, R2: 372, R3: 423, R4: 484, R5: 565, R6: 616, R7: 677, R8: 738, R9: 819, R10: 890, R11: 961 } },
  { meters: 9.6, maxWeight: 14400, prices: { R1: 361, R2: 382, R3: 433, R4: 499, R5: 585, R6: 646, R7: 707, R8: 768, R9: 839, R10: 900, R11: 991 } },
  { meters: 10, maxWeight: 15000, prices: { R1: 371, R2: 392, R3: 443, R4: 514, R5: 605, R6: 666, R7: 727, R8: 798, R9: 859, R10: 930, R11: 1011 } },
  { meters: 10.4, maxWeight: 15600, prices: { R1: 381, R2: 402, R3: 453, R4: 534, R5: 635, R6: 696, R7: 757, R8: 818, R9: 889, R10: 960, R11: 1051 } },
  { meters: 10.8, maxWeight: 16200, prices: { R1: 391, R2: 412, R3: 463, R4: 554, R5: 655, R6: 716, R7: 777, R8: 828, R9: 809, R10: 990, R11: 1071 } },
  { meters: 11.2, maxWeight: 16800, prices: { R1: 401, R2: 432, R3: 493, R4: 604, R5: 705, R6: 786, R7: 837, R8: 918, R9: 989, R10: 1080, R11: 1181 } },
  { meters: 13.2, maxWeight: 24000, prices: { R1: 401, R2: 432, R3: 493, R4: 604, R5: 705, R6: 786, R7: 837, R8: 918, R9: 989, R10: 1080, R11: 1181 } }
];

// Options supplémentaires pour Lyon
export const supplementOptionsLyon = {
  hayon: 25, // Forfait hayon (25€ au lieu de 30€ pour Lyon)
  attente: 50, // Par heure d'attente
  matieresDangereuses: 0.25, // +25%
  assuranceMinimum: 35, // Minimum pour l'assurance
  assuranceTaux: 0.004, // 0.40% de la valeur HT
  tva: 0.20 // TVA 20%
};

// Fonction pour obtenir la zone d'un département pour Lyon
export function getZoneLyon(department: string): string | null {
  const dept = department.trim();
  
  for (const [zone, departments] of Object.entries(zonesLyon)) {
    if (departments.includes(dept)) {
      return zone;
    }
  }
  
  return null;
}

// Fonction pour calculer le prix total avec options pour Lyon
export function calculateTotalPriceLyon(
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
  }
): {
  basePrice: number;
  supplements: Record<string, number>;
  totalHT: number;
  tva: number;
  totalTTC: number;
} {
  const supplements: Record<string, number> = {};
  let totalHT = basePrice;

  // Forfait hayon (ancienne méthode)
  if (options.hayon) {
    supplements.hayon = supplementOptionsLyon.hayon;
    totalHT += supplements.hayon;
  }

  // Hayon à l'enlèvement
  if (options.hayonEnlevement) {
    supplements.hayonEnlevement = supplementOptionsLyon.hayon;
    totalHT += supplements.hayonEnlevement;
  }

  // Hayon à la livraison
  if (options.hayonLivraison) {
    supplements.hayonLivraison = supplementOptionsLyon.hayon;
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
    supplements.attente = options.attente * supplementOptionsLyon.attente;
    totalHT += supplements.attente;
  }

  // Matières dangereuses (+25% sur le tarif de base)
  if (options.matieresDangereuses) {
    supplements.matieresDangereuses = basePrice * supplementOptionsLyon.matieresDangereuses;
    totalHT += supplements.matieresDangereuses;
  }

  // Assurance
  if (options.valeurMarchandise && options.valeurMarchandise > 0) {
    const assuranceCalculee = options.valeurMarchandise * supplementOptionsLyon.assuranceTaux;
    supplements.assurance = Math.max(assuranceCalculee, supplementOptionsLyon.assuranceMinimum);
    totalHT += supplements.assurance;
  }

  // Calcul TVA
  const tva = totalHT * supplementOptionsLyon.tva;
  const totalTTC = totalHT + tva;

  return {
    basePrice,
    supplements,
    totalHT,
    tva,
    totalTTC
  };
}