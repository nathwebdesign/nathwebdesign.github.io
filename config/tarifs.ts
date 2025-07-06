// Grille tarifaire R DISTRIB SOLUTIONS

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

// Tarifs pour palettes 80x120
export const tarifs80x120: TarifPalette[] = [
  { quantity: 1, prices: { R1: 55, R2: 60, R3: 65, R4: 70, R5: 75, R6: 80, R7: 85, R8: 90, R9: 95, R10: 100, R11: 105, MONACO: 150, CORSE: 180 } },
  { quantity: 2, prices: { R1: 80, R2: 90, R3: 100, R4: 110, R5: 120, R6: 130, R7: 140, R8: 150, R9: 160, R10: 170, R11: 180, MONACO: 250, CORSE: 320 } },
  { quantity: 3, prices: { R1: 105, R2: 120, R3: 135, R4: 150, R5: 165, R6: 180, R7: 195, R8: 210, R9: 225, R10: 240, R11: 255, MONACO: 350, CORSE: 460 } },
  { quantity: 4, prices: { R1: 130, R2: 150, R3: 170, R4: 190, R5: 210, R6: 230, R7: 250, R8: 270, R9: 290, R10: 310, R11: 330, MONACO: 450, CORSE: 600 } },
  { quantity: 5, prices: { R1: 155, R2: 180, R3: 205, R4: 230, R5: 255, R6: 280, R7: 305, R8: 330, R9: 355, R10: 380, R11: 405, MONACO: 550, CORSE: 740 } },
  { quantity: 6, prices: { R1: 180, R2: 210, R3: 240, R4: 270, R5: 300, R6: 330, R7: 360, R8: 390, R9: 420, R10: 450, R11: 480, MONACO: 650, CORSE: 880 } },
  { quantity: 7, prices: { R1: 205, R2: 240, R3: 275, R4: 310, R5: 345, R6: 380, R7: 415, R8: 450, R9: 485, R10: 520, R11: 555, MONACO: 750, CORSE: 1020 } },
  { quantity: 8, prices: { R1: 230, R2: 270, R3: 310, R4: 350, R5: 390, R6: 430, R7: 470, R8: 510, R9: 550, R10: 590, R11: 630, MONACO: 850, CORSE: 1160 } },
  { quantity: 9, prices: { R1: 255, R2: 300, R3: 345, R4: 390, R5: 435, R6: 480, R7: 525, R8: 570, R9: 615, R10: 660, R11: 705, MONACO: 950, CORSE: 1300 } },
  { quantity: 10, prices: { R1: 280, R2: 330, R3: 380, R4: 430, R5: 480, R6: 530, R7: 580, R8: 630, R9: 680, R10: 730, R11: 780, MONACO: 1050, CORSE: 1440 } },
  { quantity: 11, prices: { R1: 305, R2: 360, R3: 415, R4: 470, R5: 525, R6: 580, R7: 635, R8: 690, R9: 745, R10: 800, R11: 855, MONACO: 1150, CORSE: 1580 } },
  { quantity: 12, prices: { R1: 330, R2: 390, R3: 450, R4: 510, R5: 570, R6: 630, R7: 690, R8: 750, R9: 810, R10: 870, R11: 930, MONACO: 1250, CORSE: 1720 } },
  { quantity: 13, prices: { R1: 355, R2: 420, R3: 485, R4: 550, R5: 615, R6: 680, R7: 745, R8: 810, R9: 875, R10: 940, R11: 1005, MONACO: 1350, CORSE: 1860 } },
  { quantity: 14, prices: { R1: 380, R2: 450, R3: 520, R4: 590, R5: 660, R6: 730, R7: 800, R8: 870, R9: 940, R10: 1010, R11: 1080, MONACO: 1450, CORSE: 2000 } },
  { quantity: 15, prices: { R1: 405, R2: 480, R3: 555, R4: 630, R5: 705, R6: 780, R7: 855, R8: 930, R9: 1005, R10: 1080, R11: 1155, MONACO: 1550, CORSE: 2140 } },
  { quantity: 16, prices: { R1: 430, R2: 510, R3: 590, R4: 670, R5: 750, R6: 830, R7: 910, R8: 990, R9: 1070, R10: 1150, R11: 1230, MONACO: 1650, CORSE: 2280 } },
  { quantity: 17, prices: { R1: 455, R2: 540, R3: 625, R4: 710, R5: 795, R6: 880, R7: 965, R8: 1050, R9: 1135, R10: 1220, R11: 1305, MONACO: 1750, CORSE: 2420 } },
  { quantity: 18, prices: { R1: 480, R2: 570, R3: 660, R4: 750, R5: 840, R6: 930, R7: 1020, R8: 1110, R9: 1200, R10: 1290, R11: 1380, MONACO: 1850, CORSE: 2560 } },
  { quantity: 19, prices: { R1: 505, R2: 600, R3: 695, R4: 790, R5: 885, R6: 980, R7: 1075, R8: 1170, R9: 1265, R10: 1360, R11: 1455, MONACO: 1950, CORSE: 2700 } },
  { quantity: 20, prices: { R1: 530, R2: 630, R3: 730, R4: 830, R5: 930, R6: 1030, R7: 1130, R8: 1230, R9: 1330, R10: 1430, R11: 1530, MONACO: 2050, CORSE: 2840 } },
  { quantity: 21, prices: { R1: 555, R2: 660, R3: 765, R4: 870, R5: 975, R6: 1080, R7: 1185, R8: 1290, R9: 1395, R10: 1500, R11: 1605, MONACO: 2150, CORSE: 2980 } },
  { quantity: 22, prices: { R1: 580, R2: 690, R3: 800, R4: 910, R5: 1020, R6: 1130, R7: 1240, R8: 1350, R9: 1460, R10: 1570, R11: 1680, MONACO: 2250, CORSE: 3120 } },
  { quantity: 23, prices: { R1: 605, R2: 720, R3: 835, R4: 950, R5: 1065, R6: 1180, R7: 1295, R8: 1410, R9: 1525, R10: 1640, R11: 1755, MONACO: 2350, CORSE: 3260 } },
  { quantity: 24, prices: { R1: 630, R2: 750, R3: 870, R4: 990, R5: 1110, R6: 1230, R7: 1350, R8: 1470, R9: 1590, R10: 1710, R11: 1830, MONACO: 2450, CORSE: 3400 } },
  { quantity: 25, prices: { R1: 655, R2: 780, R3: 905, R4: 1030, R5: 1155, R6: 1280, R7: 1405, R8: 1530, R9: 1655, R10: 1780, R11: 1905, MONACO: 2550, CORSE: 3540 } },
  { quantity: 26, prices: { R1: 680, R2: 810, R3: 940, R4: 1070, R5: 1200, R6: 1330, R7: 1460, R8: 1590, R9: 1720, R10: 1850, R11: 1980, MONACO: 2650, CORSE: 3680 } },
  { quantity: 27, prices: { R1: 705, R2: 840, R3: 975, R4: 1110, R5: 1245, R6: 1380, R7: 1515, R8: 1650, R9: 1785, R10: 1920, R11: 2055, MONACO: 2750, CORSE: 3820 } },
  { quantity: 28, prices: { R1: 730, R2: 870, R3: 1010, R4: 1150, R5: 1290, R6: 1430, R7: 1570, R8: 1710, R9: 1850, R10: 1990, R11: 2130, MONACO: 2850, CORSE: 3960 } },
  { quantity: 29, prices: { R1: 755, R2: 900, R3: 1045, R4: 1190, R5: 1335, R6: 1480, R7: 1625, R8: 1770, R9: 1915, R10: 2060, R11: 2205, MONACO: 2950, CORSE: 4100 } },
  { quantity: 30, prices: { R1: 780, R2: 930, R3: 1080, R4: 1230, R5: 1380, R6: 1530, R7: 1680, R8: 1830, R9: 1980, R10: 2130, R11: 2280, MONACO: 3050, CORSE: 4240 } },
  { quantity: 31, prices: { R1: 805, R2: 960, R3: 1115, R4: 1270, R5: 1425, R6: 1580, R7: 1735, R8: 1890, R9: 2045, R10: 2200, R11: 2355, MONACO: 3150, CORSE: 4380 } },
  { quantity: 32, prices: { R1: 830, R2: 990, R3: 1150, R4: 1310, R5: 1470, R6: 1630, R7: 1790, R8: 1950, R9: 2110, R10: 2270, R11: 2430, MONACO: 3250, CORSE: 4520 } },
  { quantity: 33, prices: { R1: 855, R2: 1020, R3: 1185, R4: 1350, R5: 1515, R6: 1680, R7: 1845, R8: 2010, R9: 2175, R10: 2340, R11: 2505, MONACO: 3350, CORSE: 4660 } }
];

// Tarifs pour palettes 100x120
export const tarifs100x120: TarifPalette[] = [
  { quantity: 1, prices: { R1: 65, R2: 70, R3: 75, R4: 80, R5: 85, R6: 90, R7: 95, R8: 100, R9: 105, R10: 110, R11: 115, MONACO: 170, CORSE: 200 } },
  { quantity: 2, prices: { R1: 100, R2: 110, R3: 120, R4: 130, R5: 140, R6: 150, R7: 160, R8: 170, R9: 180, R10: 190, R11: 200, MONACO: 290, CORSE: 360 } },
  { quantity: 3, prices: { R1: 135, R2: 150, R3: 165, R4: 180, R5: 195, R6: 210, R7: 225, R8: 240, R9: 255, R10: 270, R11: 285, MONACO: 410, CORSE: 520 } },
  { quantity: 4, prices: { R1: 170, R2: 190, R3: 210, R4: 230, R5: 250, R6: 270, R7: 290, R8: 310, R9: 330, R10: 350, R11: 370, MONACO: 530, CORSE: 680 } },
  { quantity: 5, prices: { R1: 205, R2: 230, R3: 255, R4: 280, R5: 305, R6: 330, R7: 355, R8: 380, R9: 405, R10: 430, R11: 455, MONACO: 650, CORSE: 840 } },
  { quantity: 6, prices: { R1: 240, R2: 270, R3: 300, R4: 330, R5: 360, R6: 390, R7: 420, R8: 450, R9: 480, R10: 510, R11: 540, MONACO: 770, CORSE: 1000 } },
  { quantity: 7, prices: { R1: 275, R2: 310, R3: 345, R4: 380, R5: 415, R6: 450, R7: 485, R8: 520, R9: 555, R10: 590, R11: 625, MONACO: 890, CORSE: 1160 } },
  { quantity: 8, prices: { R1: 310, R2: 350, R3: 390, R4: 430, R5: 470, R6: 510, R7: 550, R8: 590, R9: 630, R10: 670, R11: 710, MONACO: 1010, CORSE: 1320 } },
  { quantity: 9, prices: { R1: 345, R2: 390, R3: 435, R4: 480, R5: 525, R6: 570, R7: 615, R8: 660, R9: 705, R10: 750, R11: 795, MONACO: 1130, CORSE: 1480 } },
  { quantity: 10, prices: { R1: 380, R2: 430, R3: 480, R4: 530, R5: 580, R6: 630, R7: 680, R8: 730, R9: 780, R10: 830, R11: 880, MONACO: 1250, CORSE: 1640 } },
  { quantity: 11, prices: { R1: 415, R2: 470, R3: 525, R4: 580, R5: 635, R6: 690, R7: 745, R8: 800, R9: 855, R10: 910, R11: 965, MONACO: 1370, CORSE: 1800 } },
  { quantity: 12, prices: { R1: 450, R2: 510, R3: 570, R4: 630, R5: 690, R6: 750, R7: 810, R8: 870, R9: 930, R10: 990, R11: 1050, MONACO: 1490, CORSE: 1960 } },
  { quantity: 13, prices: { R1: 485, R2: 550, R3: 615, R4: 680, R5: 745, R6: 810, R7: 875, R8: 940, R9: 1005, R10: 1070, R11: 1135, MONACO: 1610, CORSE: 2120 } },
  { quantity: 14, prices: { R1: 520, R2: 590, R3: 660, R4: 730, R5: 800, R6: 870, R7: 940, R8: 1010, R9: 1080, R10: 1150, R11: 1220, MONACO: 1730, CORSE: 2280 } },
  { quantity: 15, prices: { R1: 555, R2: 630, R3: 705, R4: 780, R5: 855, R6: 930, R7: 1005, R8: 1080, R9: 1155, R10: 1230, R11: 1305, MONACO: 1850, CORSE: 2440 } },
  { quantity: 16, prices: { R1: 590, R2: 670, R3: 750, R4: 830, R5: 910, R6: 990, R7: 1070, R8: 1150, R9: 1230, R10: 1310, R11: 1390, MONACO: 1970, CORSE: 2600 } },
  { quantity: 17, prices: { R1: 625, R2: 710, R3: 795, R4: 880, R5: 965, R6: 1050, R7: 1135, R8: 1220, R9: 1305, R10: 1390, R11: 1475, MONACO: 2090, CORSE: 2760 } },
  { quantity: 18, prices: { R1: 660, R2: 750, R3: 840, R4: 930, R5: 1020, R6: 1110, R7: 1200, R8: 1290, R9: 1380, R10: 1470, R11: 1560, MONACO: 2210, CORSE: 2920 } },
  { quantity: 19, prices: { R1: 695, R2: 790, R3: 885, R4: 980, R5: 1075, R6: 1170, R7: 1265, R8: 1360, R9: 1455, R10: 1550, R11: 1645, MONACO: 2330, CORSE: 3080 } },
  { quantity: 20, prices: { R1: 730, R2: 830, R3: 930, R4: 1030, R5: 1130, R6: 1230, R7: 1330, R8: 1430, R9: 1530, R10: 1630, R11: 1730, MONACO: 2450, CORSE: 3240 } },
  { quantity: 21, prices: { R1: 765, R2: 870, R3: 975, R4: 1080, R5: 1185, R6: 1290, R7: 1395, R8: 1500, R9: 1605, R10: 1710, R11: 1815, MONACO: 2570, CORSE: 3400 } },
  { quantity: 22, prices: { R1: 800, R2: 910, R3: 1020, R4: 1130, R5: 1240, R6: 1350, R7: 1460, R8: 1570, R9: 1680, R10: 1790, R11: 1900, MONACO: 2690, CORSE: 3560 } },
  { quantity: 23, prices: { R1: 835, R2: 950, R3: 1065, R4: 1180, R5: 1295, R6: 1410, R7: 1525, R8: 1640, R9: 1755, R10: 1870, R11: 1985, MONACO: 2810, CORSE: 3720 } },
  { quantity: 24, prices: { R1: 870, R2: 990, R3: 1110, R4: 1230, R5: 1350, R6: 1470, R7: 1590, R8: 1710, R9: 1830, R10: 1950, R11: 2070, MONACO: 2930, CORSE: 3880 } },
  { quantity: 25, prices: { R1: 905, R2: 1030, R3: 1155, R4: 1280, R5: 1405, R6: 1530, R7: 1655, R8: 1780, R9: 1905, R10: 2030, R11: 2155, MONACO: 3050, CORSE: 4040 } },
  { quantity: 26, prices: { R1: 940, R2: 1070, R3: 1200, R4: 1330, R5: 1460, R6: 1590, R7: 1720, R8: 1850, R9: 1980, R10: 2110, R11: 2240, MONACO: 3170, CORSE: 4200 } }
];

// Tarifs au mètre de plancher
export const tarifsMetrePlancher: TarifMetrePlancher[] = [
  { meters: 0.5, maxWeight: 600, prices: { R1: 35, R2: 40, R3: 45, R4: 50, R5: 55, R6: 60, R7: 65, R8: 70, R9: 75, R10: 80, R11: 85, MONACO: 110, CORSE: 140 } },
  { meters: 1, maxWeight: 1200, prices: { R1: 70, R2: 80, R3: 90, R4: 100, R5: 110, R6: 120, R7: 130, R8: 140, R9: 150, R10: 160, R11: 170, MONACO: 220, CORSE: 280 } },
  { meters: 1.5, maxWeight: 1800, prices: { R1: 105, R2: 120, R3: 135, R4: 150, R5: 165, R6: 180, R7: 195, R8: 210, R9: 225, R10: 240, R11: 255, MONACO: 330, CORSE: 420 } },
  { meters: 2, maxWeight: 2400, prices: { R1: 140, R2: 160, R3: 180, R4: 200, R5: 220, R6: 240, R7: 260, R8: 280, R9: 300, R10: 320, R11: 340, MONACO: 440, CORSE: 560 } },
  { meters: 2.5, maxWeight: 3000, prices: { R1: 175, R2: 200, R3: 225, R4: 250, R5: 275, R6: 300, R7: 325, R8: 350, R9: 375, R10: 400, R11: 425, MONACO: 550, CORSE: 700 } },
  { meters: 3, maxWeight: 3600, prices: { R1: 210, R2: 240, R3: 270, R4: 300, R5: 330, R6: 360, R7: 390, R8: 420, R9: 450, R10: 480, R11: 510, MONACO: 660, CORSE: 840 } },
  { meters: 3.5, maxWeight: 4200, prices: { R1: 245, R2: 280, R3: 315, R4: 350, R5: 385, R6: 420, R7: 455, R8: 490, R9: 525, R10: 560, R11: 595, MONACO: 770, CORSE: 980 } },
  { meters: 4, maxWeight: 4800, prices: { R1: 280, R2: 320, R3: 360, R4: 400, R5: 440, R6: 480, R7: 520, R8: 560, R9: 600, R10: 640, R11: 680, MONACO: 880, CORSE: 1120 } },
  { meters: 4.5, maxWeight: 5400, prices: { R1: 315, R2: 360, R3: 405, R4: 450, R5: 495, R6: 540, R7: 585, R8: 630, R9: 675, R10: 720, R11: 765, MONACO: 990, CORSE: 1260 } },
  { meters: 5, maxWeight: 6000, prices: { R1: 350, R2: 400, R3: 450, R4: 500, R5: 550, R6: 600, R7: 650, R8: 700, R9: 750, R10: 800, R11: 850, MONACO: 1100, CORSE: 1400 } },
  { meters: 5.5, maxWeight: 6600, prices: { R1: 385, R2: 440, R3: 495, R4: 550, R5: 605, R6: 660, R7: 715, R8: 770, R9: 825, R10: 880, R11: 935, MONACO: 1210, CORSE: 1540 } },
  { meters: 6, maxWeight: 7200, prices: { R1: 420, R2: 480, R3: 540, R4: 600, R5: 660, R6: 720, R7: 780, R8: 840, R9: 900, R10: 960, R11: 1020, MONACO: 1320, CORSE: 1680 } },
  { meters: 6.6, maxWeight: 8000, prices: { R1: 462, R2: 528, R3: 594, R4: 660, R5: 726, R6: 792, R7: 858, R8: 924, R9: 990, R10: 1056, R11: 1122, MONACO: 1452, CORSE: 1848 } },
  { meters: 7, maxWeight: 8400, prices: { R1: 490, R2: 560, R3: 630, R4: 700, R5: 770, R6: 840, R7: 910, R8: 980, R9: 1050, R10: 1120, R11: 1190, MONACO: 1540, CORSE: 1960 } },
  { meters: 7.5, maxWeight: 9000, prices: { R1: 525, R2: 600, R3: 675, R4: 750, R5: 825, R6: 900, R7: 975, R8: 1050, R9: 1125, R10: 1200, R11: 1275, MONACO: 1650, CORSE: 2100 } },
  { meters: 8, maxWeight: 9600, prices: { R1: 560, R2: 640, R3: 720, R4: 800, R5: 880, R6: 960, R7: 1040, R8: 1120, R9: 1200, R10: 1280, R11: 1360, MONACO: 1760, CORSE: 2240 } },
  { meters: 8.5, maxWeight: 10200, prices: { R1: 595, R2: 680, R3: 765, R4: 850, R5: 935, R6: 1020, R7: 1105, R8: 1190, R9: 1275, R10: 1360, R11: 1445, MONACO: 1870, CORSE: 2380 } },
  { meters: 9, maxWeight: 10800, prices: { R1: 630, R2: 720, R3: 810, R4: 900, R5: 990, R6: 1080, R7: 1170, R8: 1260, R9: 1350, R10: 1440, R11: 1530, MONACO: 1980, CORSE: 2520 } },
  { meters: 9.5, maxWeight: 11400, prices: { R1: 665, R2: 760, R3: 855, R4: 950, R5: 1045, R6: 1140, R7: 1235, R8: 1330, R9: 1425, R10: 1520, R11: 1615, MONACO: 2090, CORSE: 2660 } },
  { meters: 10, maxWeight: 12000, prices: { R1: 700, R2: 800, R3: 900, R4: 1000, R5: 1100, R6: 1200, R7: 1300, R8: 1400, R9: 1500, R10: 1600, R11: 1700, MONACO: 2200, CORSE: 2800 } },
  { meters: 10.5, maxWeight: 12600, prices: { R1: 735, R2: 840, R3: 945, R4: 1050, R5: 1155, R6: 1260, R7: 1365, R8: 1470, R9: 1575, R10: 1680, R11: 1785, MONACO: 2310, CORSE: 2940 } },
  { meters: 11, maxWeight: 13200, prices: { R1: 770, R2: 880, R3: 990, R4: 1100, R5: 1210, R6: 1320, R7: 1430, R8: 1540, R9: 1650, R10: 1760, R11: 1870, MONACO: 2420, CORSE: 3080 } },
  { meters: 11.5, maxWeight: 13800, prices: { R1: 805, R2: 920, R3: 1035, R4: 1150, R5: 1265, R6: 1380, R7: 1495, R8: 1610, R9: 1725, R10: 1840, R11: 1955, MONACO: 2530, CORSE: 3220 } },
  { meters: 12, maxWeight: 14400, prices: { R1: 840, R2: 960, R3: 1080, R4: 1200, R5: 1320, R6: 1440, R7: 1560, R8: 1680, R9: 1800, R10: 1920, R11: 2040, MONACO: 2640, CORSE: 3360 } },
  { meters: 12.5, maxWeight: 15000, prices: { R1: 875, R2: 1000, R3: 1125, R4: 1250, R5: 1375, R6: 1500, R7: 1625, R8: 1750, R9: 1875, R10: 2000, R11: 2125, MONACO: 2750, CORSE: 3500 } },
  { meters: 13, maxWeight: 15600, prices: { R1: 910, R2: 1040, R3: 1170, R4: 1300, R5: 1430, R6: 1560, R7: 1690, R8: 1820, R9: 1950, R10: 2080, R11: 2210, MONACO: 2860, CORSE: 3640 } },
  { meters: 13.2, maxWeight: 24000, prices: { R1: 924, R2: 1056, R3: 1188, R4: 1320, R5: 1452, R6: 1584, R7: 1716, R8: 1848, R9: 1980, R10: 2112, R11: 2244, MONACO: 2904, CORSE: 3696 } }
];

// Tarifs messagerie (par tranche de poids)
export const tarifsMessagerie: TarifMessagerie[] = [
  { minWeight: 0, maxWeight: 9, prices: { R1: 25, R2: 30, R3: 35, R4: 40, R5: 45, R6: 50, R7: 55, R8: 60, R9: 65, R10: 70, R11: 75, MONACO: 90, CORSE: 110 } },
  { minWeight: 10, maxWeight: 19, prices: { R1: 30, R2: 35, R3: 40, R4: 45, R5: 50, R6: 55, R7: 60, R8: 65, R9: 70, R10: 75, R11: 80, MONACO: 100, CORSE: 125 } },
  { minWeight: 20, maxWeight: 29, prices: { R1: 35, R2: 40, R3: 45, R4: 50, R5: 55, R6: 60, R7: 65, R8: 70, R9: 75, R10: 80, R11: 85, MONACO: 110, CORSE: 140 } },
  { minWeight: 30, maxWeight: 39, prices: { R1: 40, R2: 45, R3: 50, R4: 55, R5: 60, R6: 65, R7: 70, R8: 75, R9: 80, R10: 85, R11: 90, MONACO: 120, CORSE: 155 } },
  { minWeight: 40, maxWeight: 49, prices: { R1: 45, R2: 50, R3: 55, R4: 60, R5: 65, R6: 70, R7: 75, R8: 80, R9: 85, R10: 90, R11: 95, MONACO: 130, CORSE: 170 } },
  { minWeight: 50, maxWeight: 59, prices: { R1: 50, R2: 55, R3: 60, R4: 65, R5: 70, R6: 75, R7: 80, R8: 85, R9: 90, R10: 95, R11: 100, MONACO: 140, CORSE: 185 } },
  { minWeight: 60, maxWeight: 69, prices: { R1: 55, R2: 60, R3: 65, R4: 70, R5: 75, R6: 80, R7: 85, R8: 90, R9: 95, R10: 100, R11: 105, MONACO: 150, CORSE: 200 } },
  { minWeight: 70, maxWeight: 79, prices: { R1: 60, R2: 65, R3: 70, R4: 75, R5: 80, R6: 85, R7: 90, R8: 95, R9: 100, R10: 105, R11: 110, MONACO: 160, CORSE: 215 } },
  { minWeight: 80, maxWeight: 89, prices: { R1: 65, R2: 70, R3: 75, R4: 80, R5: 85, R6: 90, R7: 95, R8: 100, R9: 105, R10: 110, R11: 115, MONACO: 170, CORSE: 230 } },
  { minWeight: 90, maxWeight: 99, prices: { R1: 70, R2: 75, R3: 80, R4: 85, R5: 90, R6: 95, R7: 100, R8: 105, R9: 110, R10: 115, R11: 120, MONACO: 180, CORSE: 245 } },
  { minWeight: 100, maxWeight: 199, prices: { R1: 80, R2: 90, R3: 100, R4: 110, R5: 120, R6: 130, R7: 140, R8: 150, R9: 160, R10: 170, R11: 180, MONACO: 220, CORSE: 300 } }
];

// Options supplémentaires
export const supplementOptions = {
  hayon: 30, // Forfait hayon
  attente: 50, // Par heure d'attente
  matieresDangereuses: 0.25, // +25%
  assuranceMinimum: 35, // Minimum pour l'assurance
  assuranceTaux: 0.004, // 0.40% de la valeur HT
  tva: 0.20 // TVA 20%
};

// Fonction pour calculer le tarif selon le type de marchandise
export function calculateTarif(
  zoneCode: string,
  type: 'palette80x120' | 'palette100x120' | 'metrePlancher' | 'messagerie',
  quantity: number,
  weight?: number // Pour le mètre de plancher et la messagerie
): number | null {
  let tarifs: any[];
  
  switch (type) {
    case 'palette80x120':
      tarifs = tarifs80x120;
      break;
    case 'palette100x120':
      tarifs = tarifs100x120;
      break;
    case 'metrePlancher':
      tarifs = tarifsMetrePlancher;
      break;
    case 'messagerie':
      tarifs = tarifsMessagerie;
      break;
    default:
      return null;
  }

  // Pour les palettes
  if (type === 'palette80x120' || type === 'palette100x120') {
    const tarifLine = tarifs.find(t => t.quantity === quantity);
    return tarifLine ? tarifLine.prices[zoneCode] || null : null;
  }

  // Pour le mètre de plancher
  if (type === 'metrePlancher') {
    const tarifLine = tarifs.find(t => 
      t.meters === quantity && (!weight || weight <= t.maxWeight)
    );
    return tarifLine ? tarifLine.prices[zoneCode] || null : null;
  }

  // Pour la messagerie
  if (type === 'messagerie' && weight !== undefined) {
    // Pour les colis > 100kg, on utilise le tarif 100-199kg
    if (weight >= 100) {
      const tarifLine = tarifs.find(t => t.minWeight === 100 && t.maxWeight === 199);
      if (tarifLine && tarifLine.prices[zoneCode]) {
        const basePrice = tarifLine.prices[zoneCode];
        // Prix = (tarif 100-199kg / poids) × poids, arrondi à la dizaine supérieure
        const calculatedPrice = basePrice;
        return Math.ceil(calculatedPrice / 10) * 10;
      }
      return null;
    }
    
    // Pour les colis < 100kg, on trouve la tranche de poids appropriée
    const tarifLine = tarifs.find(t => 
      weight >= t.minWeight && weight <= t.maxWeight
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

  // Forfait hayon
  if (options.hayon) {
    supplements.hayon = supplementOptions.hayon;
    totalHT += supplements.hayon;
  }

  // Frais d'attente
  if (options.attente && options.attente > 0) {
    supplements.attente = options.attente * supplementOptions.attente;
    totalHT += supplements.attente;
  }

  // Matières dangereuses (+25% sur le tarif de base)
  if (options.matieresDangereuses) {
    supplements.matieresDangereuses = basePrice * supplementOptions.matieresDangereuses;
    totalHT += supplements.matieresDangereuses;
  }

  // Assurance
  if (options.valeurMarchandise && options.valeurMarchandise > 0) {
    const assuranceCalculee = options.valeurMarchandise * supplementOptions.assuranceTaux;
    supplements.assurance = Math.max(assuranceCalculee, supplementOptions.assuranceMinimum);
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