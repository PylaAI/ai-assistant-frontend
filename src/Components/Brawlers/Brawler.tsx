import React from 'react';
import { useParams } from 'react-router-dom';
import './brawlers.css';
import ExampleBrawlers from './exampleBrawlers';

const Brawler = () => {
  const { name } = useParams();
  const brawler = ExampleBrawlers.find((item) => item.name === name);

  if (!brawler) {
    return <h1>Not found.</h1>;
  }

  return (
    <div style={{ color: 'white' }}>
      <div className="brawler-header">
        <div className="brawler-name">
          <h2>{brawler.name}</h2>
          <img src={brawler.img} alt={brawler.name} />
        </div>
        <div className="brawler-desc">
          <p>
            {brawler.description}
          </p>
          <p>
            Health: <br />
            {brawler.health}
          </p>
          <p>
            Attack: <br />
            {brawler.attack}
          </p>
          <p>
            Class: <br />
            {brawler.class}
          </p>
        </div>
      </div>

      <div className="upgrades">
        <div className="upgrade-wrapper">
          <h3>Star Powers:</h3>
          <div className="star-powers">
            {brawler.starPowers.map((starPower) => (
              <div key={starPower.id} className="upgrade">
                <img src={starPower.imageUrl} alt={starPower.name} />
                <p>
                  {starPower.name}: {starPower.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="upgrade-wrapper">
          <h3>Gadgets:</h3>
          {brawler.gadgets.map((gadget) => (
            <div key={gadget.id} className="upgrade">
              <img src={gadget.imageUrl} alt={gadget.name} />
              <p>
                {gadget.name}: {gadget.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brawler;
