import { useEffect, useState } from 'react';
import ExampleBrawlers, { IBrawler } from '../Brawlers/exampleBrawlers';
import Chat from '../Chat/Chat';
import './main.css';
import { DropdownWithFilter } from '../DropdownWithFilter/DropdownWithFilter';
import { getMaps, IGameMode } from '../GameMode/getMaps';

interface IBrawlerSuggestion {
    brawler: string;
    confidence: 'High' | 'Medium' | 'Low',
    reason: string
}

type AIResponse = IBrawlerSuggestion[]

export const AIAssitant = () => {
  const [allyBrawlers, setAllyBrawlers] = useState<string[]>([]);
  const [actionType, setActionType] = useState<'Ally' | 'Enemy' | 'Map'>(
    'Ally'
  );
  const [enemyBrawlers, setEnemyBrawlers] = useState<string[]>([]);
  const [filterValue, setFilterValue] = useState<string>('');
  const [maps, setMaps] = useState<any[]>([]);
  const [chosenMap, setChosenMap] = useState<string>('');
  const [AIResponse, setAIResponse] = useState<AIResponse>([]);
  const [loadingAIResponse, setLoadingAIResponse] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      const data: IGameMode[] = await getMaps();

      if (data) {
        const gamemodeMaps = data.map((gamemode) => gamemode.maps);
        const maps = data.flatMap((gamemode) => gamemode.maps);
        setMaps(maps);
      }
    };

    fetchData();
  }, []);

  const selectBrawler = (brawlerName: string) => {
    setFilterValue('');

    if (actionType === 'Ally') {
        if (enemyBrawlers.includes(brawlerName)) {
            return;
        }

      if (allyBrawlers.includes(brawlerName)) {
        setAllyBrawlers(allyBrawlers.filter((name) => name !== brawlerName));
      } else {
        if (allyBrawlers.length === 3) {
          return alert("Can't add more brawlers!");
        }

        setAllyBrawlers([...allyBrawlers, brawlerName]);
      }
    } else {
        if (allyBrawlers.includes(brawlerName)) {
            return;
        }

      if (enemyBrawlers.includes(brawlerName)) {
        if (enemyBrawlers.length === 3) {
          return alert("Can't add more brawlers!");
        }

        setEnemyBrawlers(enemyBrawlers.filter((name) => name !== brawlerName));
      } else {
        setEnemyBrawlers([...enemyBrawlers, brawlerName]);
      }
    }
  };

  const renderBrawlers = (brawlersList?: IBrawler[]) => {
    const brawlers = brawlersList ? brawlersList : ExampleBrawlers;
    const filteredBrawlers: IBrawler[] = [];

    for (const brawler of brawlers) {
      const pickedBrawlers = [...allyBrawlers, ...enemyBrawlers];
      if (
        (brawler.name.toLowerCase().includes(filterValue.toLowerCase()) &&
          !pickedBrawlers.includes(brawler.name)) ||
        brawlersList
      ) {
        filteredBrawlers.push(brawler);
      }
    }

    return (
      <>
        {filteredBrawlers.map((brawler) => {
          return (
            <div className="brawler-options">
              <p>{brawler.name}</p>
              <img
                src={brawler.img}
                onClick={() => selectBrawler(brawler.name)}
                style={
                  [...allyBrawlers, ...enemyBrawlers].includes(brawler.name)
                    ? { border: '5px solid rgb(255, 222, 55)' }
                    : {}
                }
              ></img>
            </div>
          );
        })}
      </>
    );
  };

  const getAIResponse = async () => {
    try {
      const data = {
        map_name: chosenMap,
        enemy_brawlers: enemyBrawlers,
        ally_brawlers: allyBrawlers,
      };

      const response = await fetch('http://127.0.0.1:5000/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const onSubmit = async () => {
    if (actionType === 'Ally') {
      setActionType('Enemy');
    } else if (actionType === 'Enemy') {
      setActionType('Map');
    } else {
        setLoadingAIResponse(true);
        const res = await getAIResponse();
      setAIResponse(JSON.parse(res.response));
      setLoadingAIResponse(false);

    }
  };

  if (AIResponse.length === 0 && !loadingAIResponse) {
    return (
        <div className="ai-assistant-wrapper">
          <h1>A.I. assistant </h1>
    
          <div className="menu">
            <div className="add-by-input">
              <input
                placeholder="Filter by name"
                value={filterValue}
                onChange={(e) => setFilterValue(e.target.value)}
              />
            </div>
    
            <div className="picked-brawlers">
              <h2>Picked ally brawlers: </h2>
              {renderBrawlers(
                ExampleBrawlers.filter((br) => allyBrawlers.includes(br.name))
              )}
            </div>
    
            <div className="picked-brawlers">
              <h2>Picked enemy brawlers: </h2>
              {renderBrawlers(
                ExampleBrawlers.filter((br) => enemyBrawlers.includes(br.name))
              )}
            </div>
    
            <div className="main-pick">
              <h2>
                Step: <span style={{ color: 'indianred' }}>{actionType}</span>
              </h2>
              <div className="pick">{renderBrawlers()}</div>
    
              {actionType === 'Map' && (
                <div>
                  <DropdownWithFilter
                    options={maps.map((map) => map.name)}
                    value={chosenMap}
                    setValue={setChosenMap}
                  ></DropdownWithFilter>
                </div>
              )}
    
              <button onClick={onSubmit} id="submit-button">
                Confirm {actionType}
              </button>
            </div>
          </div>
        
            {allyBrawlers.length === 0 && <div className='ai-assitant-guide'>
                <h1>How to use?</h1>
                <p>1. Pick the brawlers your allies has picked. If none, directly click the confirm button</p>
                <p>2. Pick the brawlers your enemies has picked. If none, directly click the confirm button</p>
                <p>3. Pick the map your playing on and click the confirm button</p>
            </div>}
        </div>
      );
  }

  if (loadingAIResponse) {
    return <div className='loading-ai-response'><h1>Loading AI response...</h1></div>
  }

  return <div>
    
    {AIResponse.map((brawlerSuggestion, i) => {
        const confidenceColors = {
            'High': 'cyan',
            'Medium': 'yellow',
            'Low': 'indianred'
        }

        return <div className='ai-response-list'>
            <h1>{i+1}. {brawlerSuggestion.brawler}</h1>
            <p>Confidence: 
                <span style={
                    {
                        color: confidenceColors[brawlerSuggestion.confidence],
                        marginLeft: '.3vw',
                        fontSize: 'calc(.5vw + .5em)'
                    }}>
                     {brawlerSuggestion.confidence}
                </span></p>
            <p>{brawlerSuggestion.reason}</p>
        </div>
    })}
  </div>
 
};
