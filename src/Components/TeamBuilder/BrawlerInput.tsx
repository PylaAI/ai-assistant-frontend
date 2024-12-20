import React, { useState } from "react";

interface BrawlerInputProps {
  onSubmit: (team: string[]) => void;
}

const BrawlerInput: React.FC<BrawlerInputProps> = ({ onSubmit }) => {
  const [selectedBrawlers, setSelectedBrawlers] = useState<string[]>([]);
  const brawlers = ["Shelly", "Colt", "Bull", "Jessie"]; 

  const handleBrawlerClick = (brawler: string) => {
    if (!selectedBrawlers.includes(brawler)) {
      setSelectedBrawlers([...selectedBrawlers, brawler]);
    }
  };

  const handleConfirm = () => {
    onSubmit(selectedBrawlers);
    setSelectedBrawlers([]);
  };

  return (
    <div className="brawler-input">
      <h3>Select Brawlers</h3>
      <div className="brawler-list">
        {brawlers.map((brawler) => (
          <div
            key={brawler}
            className="brawler-item"
            onClick={() => handleBrawlerClick(brawler)}
          >
            {brawler}
          </div>
        ))}
      </div>
      <button onClick={handleConfirm}>Confirm</button>
    </div>
  );
};

export default BrawlerInput;