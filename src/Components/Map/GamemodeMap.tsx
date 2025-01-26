import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { exampleMapData, IMapData } from './exampleMap';
import './main.css';

export const GamemodeMap = () => {
  const { name } = useParams();
  const [map, setMap] = useState<IMapData | null>();

  const getMap = async () => {
    const res = exampleMapData;
    const map = res.find((map) => map.name === name);

    if (map) {
      setMap(map);
    } else {
      setMap(null);
    }
  };

  useEffect(() => {
    getMap();
  });

  if (map === null) {
    return <h1>Map not found.</h1>;
  }

  return (
    <>
      <div className="gamemodeMap-wrapper">
        <div className="map">
          <h1>{map?.name}</h1>

          <div className="map-details">
            <img src={map?.imageUrl}></img>
            <div className="stats">
              <p>
                <span>Description:</span> <br />
                {map?.description ?? 'No description found for this map!'}
              </p>
              <p>
                <span>Best brawlers:</span> <br />
                {map?.stats.slice(0, 6).map((mapStat) => {
                  return (
                    <p>
                      {mapStat.id} WR: {mapStat.winRate}%
                    </p>
                  );
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
