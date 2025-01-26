import React, { useState, useEffect } from 'react';
import './gameMaps.css';
import { IGameMode, IMap, getMaps } from './getMaps';
import { useNavigate } from 'react-router-dom';

const GameMode = () => {
  const navigate = useNavigate();
  const [gameModes, setGameModes] = useState<IGameMode[]>([]);
  const [selectedGameMode, setSelectedGameMode] = useState<string>('');
  const [mapNameFilter, setMapNameFilter] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMaps();

      if (data) {
        setGameModes(data);
      }
    };

    fetchData();
  }, []);

  const navigateToMapDetails = (mapId: string) => {
    navigate(`/map/${mapId}`);
  };

  const selectGameMode = (name: string) => {
    if (selectedGameMode === name) {
      setSelectedGameMode('');
    } else {
      setSelectedGameMode(name);
    }
  };

  const getGameModes = () => {
    if (!selectedGameMode) {
      return gameModes;
    }

    return gameModes.filter((gm) => gm.name === selectedGameMode);
  };

  const getGameModesMaps = (maps: IMap[]) => {
    if (!mapNameFilter) {
      return maps;
    }

    return maps.filter((map) =>
      map.name.toLowerCase().includes(mapNameFilter.toLowerCase())
    );
  };

  return (
    <div className="gamemodes-wrapper">
      <div className="page-container">
        <div className="filter">
          <input
            placeholder="Map name"
            value={mapNameFilter}
            onChange={(e) => setMapNameFilter(e.target.value)}
          />

          {gameModes.map((gm) => {
            return (
              <img
                src={gm.iconUrl}
                onClick={() => selectGameMode(gm.name)}
                style={
                  gm.name === selectedGameMode
                    ? { backgroundColor: 'indianred' }
                    : {}
                }
              />
            );
          })}
        </div>

        {gameModes ? (
          getGameModes().map((mode, index) => {
            console.log(gameModes);
            const modeName = mode.name;
            const maps = mode.maps;

            return (
              <div key={index} className="mode-container">
                <section className="mode-info">
                  <img
                    src={mode.iconUrl}
                    alt={`${modeName} icon`}
                    width={'30px'}
                  />
                  <p>{modeName}</p>
                  <samp>{`(${maps.length})`}</samp>
                </section>
                <section className="maps-container">
                  {getGameModesMaps(maps).map((map, i) => (
                    <div
                      className="picture"
                      key={i}
                      onClick={() => navigateToMapDetails(map.name)}
                    >
                      <img src={map.imgUrl} alt="" width={'220px'} />
                      <span className="map-name">{map.name}</span>
                    </div>
                  ))}
                </section>
              </div>
            );
          })
        ) : (
          <p style={{ textAlign: 'center' }}>Loading game modes...</p>
        )}
      </div>
    </div>
  );
};

export default GameMode;
