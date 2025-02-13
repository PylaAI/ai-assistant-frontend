export interface IMapStat {
  id: string;
  winRate: number;
  useRate: number;
}

export interface IMapData {
  id: string;
  name: string;
  stats: IMapStat[];
  imageUrl: string;
  description?: string;
}

export const exampleMapData: IMapData[] = [
  {
    id: '15000004',
    name: 'Gem Fort',
    imageUrl: 'https://cdn.brawlify.com/maps/regular/15000004.png',
    description:
      'Snake Prairie is like a wild west hide-and-seek game where the bushes are your best friend and worst enemy. It’s a grassy labyrinth where you either emerge as a sharpshooting legend or become a cactus snack.',
    stats: [
      { id: '16000081', winRate: 50.2, useRate: 1 },
      { id: '16000024', winRate: 50, useRate: 0.4 },
      { id: '16000034', winRate: 49.2, useRate: 0.8 },
      { id: '16000052', winRate: 49.1, useRate: 0.3 },
      { id: '16000010', winRate: 48.8, useRate: 1.7 },
      { id: '16000026', winRate: 48.7, useRate: 1.8 },
      { id: '16000020', winRate: 48.5, useRate: 1.9 },
      { id: '16000018', winRate: 47.9, useRate: 1.4 },
      { id: '16000071', winRate: 47.9, useRate: 0.4 },
      { id: '16000075', winRate: 47.8, useRate: 0.8 },
      { id: '16000002', winRate: 47.6, useRate: 1.2 },
      { id: '16000058', winRate: 47.5, useRate: 0.3 },
      { id: '16000016', winRate: 47.3, useRate: 0.3 },
      { id: '16000008', winRate: 47.2, useRate: 1.3 },
      { id: '16000035', winRate: 46.8, useRate: 0.7 },
      { id: '16000007', winRate: 46.7, useRate: 1.1 },
      { id: '16000054', winRate: 46.6, useRate: 1.7 },
      { id: '16000088', winRate: 46.5, useRate: 11.1 },
      { id: '16000004', winRate: 46.5, useRate: 3.6 },
      { id: '16000011', winRate: 46.5, useRate: 5.2 },
      { id: '16000022', winRate: 46.3, useRate: 1.1 },
      { id: '16000070', winRate: 46.2, useRate: 0.8 },
      { id: '16000000', winRate: 46.1, useRate: 2.2 },
      { id: '16000068', winRate: 46.1, useRate: 1.1 },
      { id: '16000079', winRate: 46.1, useRate: 0.6 },
      { id: '16000072', winRate: 46, useRate: 0.4 },
      { id: '16000063', winRate: 45.9, useRate: 0.7 },
      { id: '16000030', winRate: 45.9, useRate: 1.1 },
      { id: '16000013', winRate: 45.8, useRate: 0.9 },
      { id: '16000051', winRate: 45.6, useRate: 0.4 },
      { id: '16000062', winRate: 45.6, useRate: 0.3 },
      { id: '16000049', winRate: 45.3, useRate: 2.4 },
      { id: '16000003', winRate: 45.3, useRate: 1.6 },
      { id: '16000014', winRate: 45.1, useRate: 1 },
      { id: '16000005', winRate: 45, useRate: 1.9 },
      { id: '16000085', winRate: 45, useRate: 1.2 },
      { id: '16000023', winRate: 45, useRate: 1.9 },
      { id: '16000025', winRate: 44.8, useRate: 0.6 },
      { id: '16000073', winRate: 44.7, useRate: 0.4 },
      { id: '16000060', winRate: 44.7, useRate: 0.3 },
      { id: '16000015', winRate: 44.6, useRate: 2.5 },
      { id: '16000045', winRate: 44.6, useRate: 2.5 },
      { id: '16000069', winRate: 44.6, useRate: 0.4 },
      { id: '16000028', winRate: 44.6, useRate: 0.5 },
      { id: '16000017', winRate: 44.5, useRate: 0.8 },
      { id: '16000056', winRate: 44.4, useRate: 0.3 },
      { id: '16000078', winRate: 44.3, useRate: 0.7 },
      { id: '16000050', winRate: 44.2, useRate: 0.7 },
      { id: '16000019', winRate: 44.2, useRate: 0.8 },
      { id: '16000048', winRate: 44.1, useRate: 0.6 },
      { id: '16000009', winRate: 44, useRate: 3.5 },
      { id: '16000027', winRate: 44, useRate: 0.9 },
      { id: '16000012', winRate: 43.9, useRate: 1.2 },
      { id: '16000039', winRate: 43.7, useRate: 0.8 },
      { id: '16000038', winRate: 43.6, useRate: 2.5 },
      { id: '16000001', winRate: 43.5, useRate: 3.3 },
      { id: '16000047', winRate: 43.5, useRate: 0.5 },
      { id: '16000043', winRate: 43.4, useRate: 3.7 },
      { id: '16000029', winRate: 43.4, useRate: 0.6 },
      { id: '16000032', winRate: 43.4, useRate: 0.9 },
      { id: '16000061', winRate: 43.4, useRate: 0.7 },
      { id: '16000065', winRate: 43.3, useRate: 0.9 },
      { id: '16000080', winRate: 43.3, useRate: 0.3 },
      { id: '16000076', winRate: 43.3, useRate: 1.4 },
      { id: '16000053', winRate: 43.3, useRate: 0.3 },
      { id: '16000074', winRate: 43.3, useRate: 0.3 },
      { id: '16000057', winRate: 43.3, useRate: 0.3 },
      { id: '16000066', winRate: 43.3, useRate: 0.2 },
      { id: '16000021', winRate: 43.1, useRate: 0.4 },
      { id: '16000064', winRate: 42.7, useRate: 0.7 },
      { id: '16000042', winRate: 42.5, useRate: 0.8 },
      { id: '16000041', winRate: 42.5, useRate: 0.5 },
      { id: '16000086', winRate: 42.4, useRate: 1.2 },
      { id: '16000059', winRate: 42.4, useRate: 0.3 },
      { id: '16000036', winRate: 41.9, useRate: 0.7 },
      { id: '16000031', winRate: 41.8, useRate: 0.2 },
      { id: '16000006', winRate: 41.6, useRate: 0.8 },
      { id: '16000067', winRate: 41.6, useRate: 0.4 },
      { id: '16000040', winRate: 41.3, useRate: 0.4 },
      { id: '16000083', winRate: 41.2, useRate: 0.4 },
      { id: '16000077', winRate: 41.1, useRate: 0.4 },
      { id: '16000082', winRate: 40.9, useRate: 0.7 },
      { id: '16000089', winRate: 40.7, useRate: 0.8 },
      { id: '16000087', winRate: 40.6, useRate: 0.5 },
      { id: '16000046', winRate: 40.2, useRate: 0.5 },
      { id: '16000084', winRate: 40.1, useRate: 0.3 },
      { id: '16000037', winRate: 39.3, useRate: 0.3 },
      { id: '16000044', winRate: 38.3, useRate: 0.2 },
    ],
  },
];
