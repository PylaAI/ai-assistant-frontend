import React, { useState } from "react";
import MapInput from "./MapInput";
import BrawlerInput from "./BrawlerInput";
import AISuggestion from "./AISuggestion";
import Summary from "./Summary";
import "./TeamBuilder.css";

const TeamBuilder: React.FC = () => {
  const [selectedMap, setSelectedMap] = useState<string | null>(null);
  const [allyTeam, setAllyTeam] = useState<string[]>([]);
  const [enemyTeam, setEnemyTeam] = useState<string[]>([]);
  const [step, setStep] = useState<number>(0);

  const handleMapSelection = (map: string) => {
    setSelectedMap(map);
    setStep(1);
  };

  const handleAllyTeamSubmit = (team: string[]) => {
    setAllyTeam(team);
    setStep(2);
  };

  const handleEnemyTeamSubmit = (team: string[]) => {
    setEnemyTeam(team);
    setStep(3);
  };

  return (
    <div className="team-builder">
      <header className="team-builder-header">
        <h1>Brawl Stars Team Builder</h1>
      </header>
      <main>
        <Summary />
        {step === 0 && <MapInput onSelectMap={handleMapSelection} />}
        {step === 1 && <BrawlerInput onSubmit={handleAllyTeamSubmit} />}
        {step === 2 && <BrawlerInput onSubmit={handleEnemyTeamSubmit} />}
        {step === 3 && (
          <AISuggestion
            allyTeam={allyTeam}
            enemyTeam={enemyTeam}
            map={selectedMap}
          />
        )}
      </main>
    </div>
  );
};

export default TeamBuilder;

