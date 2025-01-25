import React, { useEffect, useState } from 'react';
import './brawlers.css';
import './main.css';
import { Link } from 'react-router-dom';
import ExampleBrawlers, { IBrawler, IBrawlerRarity } from './exampleBrawlers';
import Brawler from './Brawler';

const rarities = [
  { name: IBrawlerRarity.Common, short: 'C' },
  { name: IBrawlerRarity.Rare, short: 'R' },
  { name: IBrawlerRarity.SuperRare, short: 'S' },
  { name: IBrawlerRarity.Epic, short: 'E' },
  { name: IBrawlerRarity.Mythic, short: 'M' },
  { name: IBrawlerRarity.Legendary, short: 'L' },
];

const Brawlers = () => {
  const [brawlers, setBrawlers] = useState<IBrawler[]>([]);
  const [brawlerFilterInput, setBrawlerFilterInput] = useState<string>('');
  const [selectedRarity, setSelectedRarity] = useState<string>('');

  useEffect(() => {
    setBrawlers(ExampleBrawlers);
  }, []);

  const getBrawlers = () => {
    return brawlers.filter(
      (brawler) =>
        brawler.name.toLowerCase().includes(brawlerFilterInput.toLowerCase()) &&
        (!selectedRarity ||
          brawler.rarity.toLowerCase() === selectedRarity.toLowerCase())
    );
  };

  const handleRarityClick = (rarity: string) => {
    if (selectedRarity === rarity) {
      setSelectedRarity('');
    } else {
      setSelectedRarity(rarity);
    }
  };

  return (
    <>
      <div className="search-bar">
        <div className="input-container">
          <label>Name</label>
          <input
            value={brawlerFilterInput}
            onChange={(ev) => setBrawlerFilterInput(ev.target.value)}
          />
        </div>
        <div className="rarity-options">
          {rarities.map((rarity) => (
            <p
              key={rarity.name}
              className={`rarity ${rarity.name.toLowerCase().replace(/\s+/g, '-')}`}
              style={
                rarity.name === selectedRarity
                  ? { backgroundColor: 'indianred' }
                  : {}
              }
              onClick={() => handleRarityClick(rarity.name)}
            >
              {rarity.short}
            </p>
          ))}
        </div>
      </div>

      <section className="brawlers-list">
        <h1 className="title">
          <b>All Brawlers</b>
        </h1>

        <div style={{ color: 'white' }} className="brawlers">
          {getBrawlers().map((brawler, index) => {
            const brawlerRarityCSSClass = brawler.rarity.replace(/\s+/g, '-');
            return (
              <section
                key={index}
                className={`brawler ${brawlerRarityCSSClass}`}
              >
                <Link to={`${brawler.name}`} className="link">
                  <img src={brawler.img} alt="" className="brawler-img" />
                </Link>
                <b>{brawler.name}</b>
              </section>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Brawlers;
