enum IGamemodeName {
  GemGrab = 'Gem Grab',
  BrawlBall = 'Brawl Ball',
}

export interface IMap {
  imgUrl: string;
  name: string;
}

export interface IGameMode {
  name: IGamemodeName;
  iconUrl: string;
  maps: IMap[];
}

export const getMaps: () => Promise<IGameMode[]> = async () => {
  try {
    const res = await fetch('https://pylaaibrawlstars.pythonanywhere.com/maps');
    if (!res.ok) throw Error('Error');
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
    return []; // Return an empty array or handle the error appropriately
  }
};
