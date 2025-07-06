// Grille tarifaire R DISTRIB SOLUTIONS - Pôle Le Havre
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

// Tarifs pour palettes 80x120 - Le Havre
export const tarifs80x120LeHavre: TarifPalette[] = [
  { quantity: 1, prices: { R1: 91, R2: 132, R3: 143, R4: 154, R5: 155, R6: 166, R7: 167, R8: 188, R9: 209, R10: 230 } },
  { quantity: 2, prices: { R1: 111, R2: 152, R3: 163, R4: 174, R5: 195, R6: 216, R7: 227, R8: 238, R9: 249, R10: 280 } },
  { quantity: 3, prices: { R1: 121, R2: 172, R3: 173, R4: 194, R5: 225, R6: 256, R7: 397, R8: 308, R9: 309, R10: 330 } },
  { quantity: 4, prices: { R1: 141, R2: 182, R3: 193, R4: 224, R5: 265, R6: 296, R7: 337, R8: 358, R9: 359, R10: 390 } },
  { quantity: 5, prices: { R1: 161, R2: 202, R3: 233, R4: 254, R5: 295, R6: 336, R7: 377, R8: 398, R9: 419, R10: 450 } },
  { quantity: 6, prices: { R1: 171, R2: 222, R3: 253, R4: 264, R5: 305, R6: 356, R7: 397, R8: 438, R9: 459, R10: 490 } },
  { quantity: 7, prices: { R1: 181, R2: 242, R3: 263, R4: 284, R5: 335, R6: 376, R7: 427, R8: 468, R9: 499, R10: 520 } },
  { quantity: 8, prices: { R1: 191, R2: 252, R3: 273, R4: 294, R5: 355, R6: 396, R7: 447, R8: 488, R9: 529, R10: 560 } },
  { quantity: 9, prices: { R1: 201, R2: 262, R3: 283, R4: 324, R5: 375, R6: 416, R7: 487, R8: 528, R9: 569, R10: 600 } },
  { quantity: 10, prices: { R1: 211, R2: 272, R3: 303, R4: 344, R5: 395, R6: 446, R7: 517, R8: 568, R9: 609, R10: 630 } },
  { quantity: 11, prices: { R1: 221, R2: 282, R3: 323, R4: 354, R5: 415, R6: 476, R7: 537, R8: 588, R9: 629, R10: 670 } },
  { quantity: 12, prices: { R1: 231, R2: 292, R3: 333, R4: 374, R5: 435, R6: 486, R7: 557, R8: 608, R9: 659, R10: 690 } },
  { quantity: 13, prices: { R1: 241, R2: 302, R3: 353, R4: 384, R5: 445, R6: 516, R7: 587, R8: 648, R9: 689, R10: 720 } },
  { quantity: 14, prices: { R1: 251, R2: 312, R3: 363, R4: 394, R5: 465, R6: 536, R7: 607, R8: 668, R9: 729, R10: 760 } },
  { quantity: 15, prices: { R1: 261, R2: 322, R3: 383, R4: 424, R5: 475, R6: 556, R7: 647, R8: 708, R9: 769, R10: 800 } },
  { quantity: 16, prices: { R1: 271, R2: 342, R3: 393, R4: 444, R5: 495, R6: 576, R7: 667, R8: 738, R9: 799, R10: 840 } },
  { quantity: 17, prices: { R1: 281, R2: 352, R3: 413, R4: 464, R5: 525, R6: 596, R7: 687, R8: 758, R9: 839, R10: 880 } },
  { quantity: 18, prices: { R1: 291, R2: 362, R3: 423, R4: 474, R5: 535, R6: 616, R7: 707, R8: 788, R9: 869, R10: 910 } },
  { quantity: 19, prices: { R1: 301, R2: 372, R3: 433, R4: 484, R5: 545, R6: 636, R7: 727, R8: 828, R9: 899, R10: 950 } },
  { quantity: 20, prices: { R1: 311, R2: 382, R3: 443, R4: 504, R5: 565, R6: 646, R7: 747, R8: 918, R9: 949, R10: 980 } },
  { quantity: 21, prices: { R1: 321, R2: 392, R3: 453, R4: 524, R5: 585, R6: 666, R7: 797, R8: 948, R9: 989, R10: 1020 } },
  { quantity: 22, prices: { R1: 331, R2: 402, R3: 463, R4: 534, R5: 605, R6: 686, R7: 787, R8: 978, R9: 1019, R10: 1050 } },
  { quantity: 23, prices: { R1: 341, R2: 412, R3: 473, R4: 544, R5: 625, R6: 706, R7: 817, R8: 998, R9: 1059, R10: 1080 } },
  { quantity: 24, prices: { R1: 351, R2: 422, R3: 483, R4: 554, R5: 635, R6: 726, R7: 837, R8: 1028, R9: 1099, R10: 1120 } },
  { quantity: 25, prices: { R1: 361, R2: 432, R3: 493, R4: 564, R5: 655, R6: 746, R7: 867, R8: 1048, R9: 1149, R10: 1150 } },
  { quantity: 26, prices: { R1: 371, R2: 442, R3: 503, R4: 574, R5: 675, R6: 766, R7: 887, R8: 1088, R9: 1189, R10: 1190 } },
  { quantity: 27, prices: { R1: 381, R2: 452, R3: 513, R4: 594, R5: 695, R6: 786, R7: 907, R8: 1108, R9: 1239, R10: 1240 } },
  { quantity: 28, prices: { R1: 401, R2: 492, R3: 563, R4: 654, R5: 725, R6: 846, R7: 987, R8: 1198, R9: 1299, R10: 1400 } },
  { quantity: 29, prices: { R1: 401, R2: 492, R3: 563, R4: 654, R5: 725, R6: 846, R7: 987, R8: 1198, R9: 1299, R10: 1400 } },
  { quantity: 30, prices: { R1: 401, R2: 492, R3: 563, R4: 654, R5: 725, R6: 846, R7: 987, R8: 1198, R9: 1299, R10: 1400 } },
  { quantity: 31, prices: { R1: 401, R2: 492, R3: 563, R4: 654, R5: 725, R6: 846, R7: 987, R8: 1198, R9: 1299, R10: 1400 } },
  { quantity: 32, prices: { R1: 401, R2: 492, R3: 563, R4: 654, R5: 725, R6: 846, R7: 987, R8: 1198, R9: 1299, R10: 1400 } },
  { quantity: 33, prices: { R1: 401, R2: 492, R3: 563, R4: 654, R5: 725, R6: 846, R7: 987, R8: 1198, R9: 1299, R10: 1400 } }
];

// Tarifs pour palettes 100x120 - Le Havre
export const tarifs100x120LeHavre: TarifPalette[] = [
  { quantity: 1, prices: { R1: 91, R2: 132, R3: 143, R4: 154, R5: 155, R6: 166, R7: 167, R8: 188, R9: 209, R10: 230 } },
  { quantity: 2, prices: { R1: 111, R2: 152, R3: 163, R4: 174, R5: 195, R6: 216, R7: 227, R8: 238, R9: 249, R10: 280 } },
  { quantity: 3, prices: { R1: 121, R2: 172, R3: 173, R4: 194, R5: 225, R6: 256, R7: 397, R8: 308, R9: 309, R10: 330 } },
  { quantity: 4, prices: { R1: 141, R2: 182, R3: 193, R4: 224, R5: 265, R6: 296, R7: 337, R8: 358, R9: 359, R10: 390 } },
  { quantity: 5, prices: { R1: 161, R2: 202, R3: 233, R4: 254, R5: 295, R6: 336, R7: 377, R8: 398, R9: 419, R10: 450 } },
  { quantity: 6, prices: { R1: 171, R2: 222, R3: 253, R4: 264, R5: 305, R6: 356, R7: 397, R8: 438, R9: 459, R10: 490 } },
  { quantity: 7, prices: { R1: 181, R2: 242, R3: 263, R4: 284, R5: 335, R6: 376, R7: 427, R8: 468, R9: 499, R10: 520 } },
  { quantity: 8, prices: { R1: 191, R2: 252, R3: 273, R4: 294, R5: 355, R6: 396, R7: 447, R8: 488, R9: 529, R10: 560 } },
  { quantity: 9, prices: { R1: 201, R2: 262, R3: 283, R4: 324, R5: 375, R6: 416, R7: 487, R8: 528, R9: 569, R10: 600 } },
  { quantity: 10, prices: { R1: 211, R2: 272, R3: 303, R4: 344, R5: 395, R6: 446, R7: 517, R8: 568, R9: 609, R10: 630 } },
  { quantity: 11, prices: { R1: 221, R2: 282, R3: 323, R4: 354, R5: 415, R6: 476, R7: 537, R8: 588, R9: 629, R10: 670 } },
  { quantity: 12, prices: { R1: 231, R2: 292, R3: 333, R4: 374, R5: 435, R6: 486, R7: 557, R8: 608, R9: 659, R10: 690 } },
  { quantity: 13, prices: { R1: 241, R2: 302, R3: 353, R4: 384, R5: 445, R6: 516, R7: 587, R8: 648, R9: 689, R10: 720 } },
  { quantity: 14, prices: { R1: 251, R2: 312, R3: 363, R4: 394, R5: 465, R6: 536, R7: 607, R8: 668, R9: 729, R10: 760 } },
  { quantity: 15, prices: { R1: 261, R2: 322, R3: 383, R4: 424, R5: 475, R6: 556, R7: 647, R8: 708, R9: 769, R10: 800 } },
  { quantity: 16, prices: { R1: 271, R2: 342, R3: 393, R4: 444, R5: 495, R6: 576, R7: 667, R8: 738, R9: 799, R10: 840 } },
  { quantity: 17, prices: { R1: 281, R2: 352, R3: 413, R4: 464, R5: 525, R6: 596, R7: 687, R8: 758, R9: 839, R10: 880 } },
  { quantity: 18, prices: { R1: 291, R2: 362, R3: 423, R4: 474, R5: 535, R6: 616, R7: 707, R8: 788, R9: 869, R10: 910 } },
  { quantity: 19, prices: { R1: 301, R2: 372, R3: 433, R4: 484, R5: 545, R6: 636, R7: 727, R8: 828, R9: 899, R10: 950 } },
  { quantity: 20, prices: { R1: 311, R2: 382, R3: 443, R4: 504, R5: 565, R6: 646, R7: 747, R8: 918, R9: 949, R10: 980 } },
  { quantity: 21, prices: { R1: 321, R2: 392, R3: 453, R4: 524, R5: 585, R6: 666, R7: 797, R8: 948, R9: 989, R10: 1020 } },
  { quantity: 22, prices: { R1: 331, R2: 402, R3: 463, R4: 534, R5: 605, R6: 686, R7: 787, R8: 978, R9: 1019, R10: 1050 } },
  { quantity: 23, prices: { R1: 331, R2: 402, R3: 463, R4: 534, R5: 605, R6: 686, R7: 787, R8: 978, R9: 1019, R10: 1050 } },
  { quantity: 24, prices: { R1: 331, R2: 402, R3: 463, R4: 534, R5: 605, R6: 686, R7: 787, R8: 978, R9: 1019, R10: 1050 } },
  { quantity: 25, prices: { R1: 331, R2: 402, R3: 463, R4: 534, R5: 605, R6: 686, R7: 787, R8: 978, R9: 1019, R10: 1050 } },
  { quantity: 26, prices: { R1: 331, R2: 402, R3: 463, R4: 534, R5: 605, R6: 686, R7: 787, R8: 978, R9: 1019, R10: 1050 } }
];

// Tarifs au mètre de plancher - Le Havre
export const tarifsMetrePlancherLeHavre: TarifMetrePlancher[] = [
  { meters: 0.5, maxWeight: 600, prices: { R1: 91, R2: 132, R3: 143, R4: 154, R5: 155, R6: 166, R7: 167, R8: 188, R9: 209, R10: 230 } },
  { meters: 1, maxWeight: 1200, prices: { R1: 111, R2: 152, R3: 163, R4: 174, R5: 195, R6: 216, R7: 227, R8: 238, R9: 249, R10: 280 } },
  { meters: 1.2, maxWeight: 1800, prices: { R1: 121, R2: 172, R3: 173, R4: 194, R5: 225, R6: 256, R7: 397, R8: 308, R9: 309, R10: 330 } },
  { meters: 1.5, maxWeight: 2400, prices: { R1: 141, R2: 182, R3: 193, R4: 224, R5: 265, R6: 296, R7: 337, R8: 358, R9: 359, R10: 390 } },
  { meters: 2, maxWeight: 3000, prices: { R1: 161, R2: 202, R3: 233, R4: 254, R5: 295, R6: 336, R7: 377, R8: 398, R9: 419, R10: 450 } },
  { meters: 2.4, maxWeight: 3600, prices: { R1: 171, R2: 222, R3: 253, R4: 264, R5: 305, R6: 356, R7: 397, R8: 438, R9: 459, R10: 490 } },
  { meters: 2.8, maxWeight: 4200, prices: { R1: 181, R2: 242, R3: 263, R4: 284, R5: 335, R6: 376, R7: 427, R8: 468, R9: 499, R10: 520 } },
  { meters: 3, maxWeight: 4800, prices: { R1: 191, R2: 252, R3: 273, R4: 294, R5: 355, R6: 396, R7: 447, R8: 488, R9: 529, R10: 560 } },
  { meters: 3.6, maxWeight: 5400, prices: { R1: 201, R2: 262, R3: 283, R4: 324, R5: 375, R6: 416, R7: 487, R8: 528, R9: 569, R10: 600 } },
  { meters: 4, maxWeight: 6000, prices: { R1: 211, R2: 272, R3: 303, R4: 344, R5: 395, R6: 446, R7: 517, R8: 568, R9: 609, R10: 630 } },
  { meters: 4.4, maxWeight: 6600, prices: { R1: 221, R2: 282, R3: 323, R4: 354, R5: 415, R6: 476, R7: 537, R8: 588, R9: 629, R10: 670 } },
  { meters: 4.8, maxWeight: 7200, prices: { R1: 231, R2: 292, R3: 333, R4: 374, R5: 435, R6: 486, R7: 557, R8: 608, R9: 659, R10: 690 } },
  { meters: 5.2, maxWeight: 7800, prices: { R1: 241, R2: 302, R3: 353, R4: 384, R5: 445, R6: 516, R7: 587, R8: 648, R9: 689, R10: 720 } },
  { meters: 5.5, maxWeight: 8400, prices: { R1: 251, R2: 312, R3: 363, R4: 394, R5: 465, R6: 536, R7: 607, R8: 668, R9: 729, R10: 760 } },
  { meters: 6, maxWeight: 9000, prices: { R1: 261, R2: 322, R3: 383, R4: 424, R5: 475, R6: 556, R7: 647, R8: 708, R9: 769, R10: 800 } },
  { meters: 6.4, maxWeight: 9600, prices: { R1: 271, R2: 342, R3: 393, R4: 444, R5: 495, R6: 576, R7: 667, R8: 738, R9: 799, R10: 840 } },
  { meters: 6.8, maxWeight: 10200, prices: { R1: 281, R2: 352, R3: 413, R4: 464, R5: 525, R6: 596, R7: 687, R8: 758, R9: 839, R10: 880 } },
  { meters: 7.2, maxWeight: 10800, prices: { R1: 291, R2: 362, R3: 423, R4: 474, R5: 535, R6: 616, R7: 707, R8: 788, R9: 869, R10: 910 } },
  { meters: 7.6, maxWeight: 11400, prices: { R1: 301, R2: 372, R3: 433, R4: 484, R5: 545, R6: 636, R7: 727, R8: 828, R9: 899, R10: 950 } },
  { meters: 8, maxWeight: 12000, prices: { R1: 311, R2: 382, R3: 443, R4: 504, R5: 565, R6: 646, R7: 747, R8: 918, R9: 949, R10: 980 } },
  { meters: 8.4, maxWeight: 12600, prices: { R1: 321, R2: 392, R3: 453, R4: 524, R5: 585, R6: 666, R7: 797, R8: 948, R9: 989, R10: 1020 } },
  { meters: 8.8, maxWeight: 13200, prices: { R1: 331, R2: 402, R3: 463, R4: 534, R5: 605, R6: 686, R7: 787, R8: 978, R9: 1019, R10: 1050 } },
  { meters: 9.2, maxWeight: 13800, prices: { R1: 341, R2: 412, R3: 473, R4: 544, R5: 625, R6: 706, R7: 817, R8: 998, R9: 1059, R10: 1080 } },
  { meters: 9.6, maxWeight: 14400, prices: { R1: 351, R2: 422, R3: 483, R4: 554, R5: 635, R6: 726, R7: 837, R8: 1028, R9: 1099, R10: 1120 } },
  { meters: 10, maxWeight: 15000, prices: { R1: 361, R2: 432, R3: 493, R4: 564, R5: 655, R6: 746, R7: 867, R8: 1048, R9: 1149, R10: 1150 } },
  { meters: 10.4, maxWeight: 15600, prices: { R1: 371, R2: 442, R3: 503, R4: 574, R5: 675, R6: 766, R7: 887, R8: 1088, R9: 1189, R10: 1190 } },
  { meters: 10.8, maxWeight: 16200, prices: { R1: 381, R2: 452, R3: 513, R4: 594, R5: 695, R6: 786, R7: 907, R8: 1108, R9: 1239, R10: 1240 } },
  { meters: 11.2, maxWeight: 16800, prices: { R1: 401, R2: 492, R3: 563, R4: 654, R5: 725, R6: 846, R7: 987, R8: 1198, R9: 1299, R10: 1400 } },
  { meters: 13.2, maxWeight: 24000, prices: { R1: 401, R2: 492, R3: 563, R4: 654, R5: 725, R6: 846, R7: 987, R8: 1198, R9: 1299, R10: 1400 } }
];

// Options supplémentaires (identiques pour tous les pôles)
export const supplementOptions = {
  hayon: 30, // Forfait hayon
  attente: 50, // Par heure d'attente
  matieresDangereuses: 0.25, // +25%
  assuranceMinimum: 35, // Minimum pour l'assurance
  assuranceTaux: 0.004, // 0.40% de la valeur HT
  tva: 0.20 // TVA 20%
};