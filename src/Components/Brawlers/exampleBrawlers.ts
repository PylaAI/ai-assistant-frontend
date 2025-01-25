export enum IBrawlerRarity {
  Common = 'Common',
  Rare = 'Rare',
  SuperRare = 'Super Rare',
  Epic = 'Epic',
  Mythic = 'Mythic',
  Legendary = 'Legendary',
  Chromatic = 'Chromatic',
}

export enum IBrawlerClass {
  DamageDelaer = 'Damage Dealer',
}

export interface IStarPower {
  id: number;
  name: string;
  path: string;
  version: number;
  description: string;
  descriptionHtml: string;
  imageUrl: string;
  released: boolean;
}

export interface IGadget {
  id: number;
  name: string;
  path: string;
  version: number;
  description: string;
  descriptionHtml: string;
  imageUrl: string;
  released: boolean;
}

export interface IBrawler {
  name: string;
  img: string;
  rarity: IBrawlerRarity;
  class: IBrawlerClass;
  starPowers: IStarPower[];
  gadgets: IGadget[];
  description: string;
  health: number;
  attack: number;
}

const ExampleBrawlers: IBrawler[] = [
  {
    name: 'Meeple',
    img: 'https://cdn.brawlify.com/brawlers/borderless/16000089.png',
    rarity: IBrawlerRarity.Epic,
    class: IBrawlerClass.DamageDelaer,
    health: 6200,
    attack: 2800,
    description:
      'Surge is a souped-up soda fountain, always ready to get the party started! Hes got the beats, the moves, and an endless supply of energy drinks.',
    starPowers: [
      {
        id: 23000283,
        name: 'To The Max',
        path: 'To-The-Max',
        version: 1,
        description: "Surge's main attack now splits when hitting walls.",
        descriptionHtml: "Surge's main attack now splits when hitting walls.",
        imageUrl:
          'https://cdn.brawlify.com/star-powers/borderless/23000283.png',
        released: true,
      },
      {
        id: 23000284,
        name: 'Serve Ice Cold',
        path: 'Serve-Ice-Cold',
        version: 1,
        description:
          'Surge keeps his STAGE 1 Super upgrade for the full match duration.',
        descriptionHtml:
          'Surge keeps his STAGE 1 Super upgrade for the full match duration.',
        imageUrl:
          'https://cdn.brawlify.com/star-powers/borderless/23000284.png',
        released: true,
      },
    ],
    gadgets: [
      {
        id: 23000285,
        name: 'Power Surge',
        path: 'Power-Surge',
        version: 1,
        description:
          'Surge overloads his circuits and increases his upgrade stage by x for x seconds.',
        descriptionHtml:
          'Surge overloads his circuits and increases his upgrade stage by <span style="color:#00cc00;">x</span> for <span style="color:#00cc00;">x</span> seconds.',
        imageUrl: 'https://cdn.brawlify.com/gadgets/borderless/23000285.png',
        released: true,
      },
      {
        id: 23000485,
        name: 'Power Shield',
        path: 'Power-Shield',
        version: 1,
        description:
          'Within the next x seconds, Surge consumes x% of the damage of the next incoming hit and uses the energy to reload x ammo.',
        descriptionHtml:
          'Within the next <span style="color:#00cc00;">x</span> seconds, Surge consumes <span style="color:#00cc00;">x%</span> of the damage of the next incoming hit and uses the energy to reload <span style="color:#00cc00;">x</span> ammo.',
        imageUrl: 'https://cdn.brawlify.com/gadgets/borderless/23000485.png',
        released: true,
      },
    ],
  },
];

export default ExampleBrawlers;
