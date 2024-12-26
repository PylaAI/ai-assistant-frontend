import React, { useEffect, useState } from "react";

interface AISuggestionProps {
  allyTeam: string[];
  enemyTeam: string[];
  map: string | null;
}

const AISuggestion: React.FC<AISuggestionProps> = ({
  allyTeam,
  enemyTeam,
  map,
}) => {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [cost, setCost] = useState<number>(0);

  useEffect(() => {
    const fetchSuggestions = async () => {
      const response = await fetch(
        `/api/ai/brawl-stars?allyTeam=${allyTeam.join(",")}&enemyTeam=${enemyTeam.join(
          ","
        )}&map=${map}`
      );
      const data = await response.json();
      setSuggestions(data.brawlers);
      setCost(data.cost);
    };

    fetchSuggestions();
  }, [allyTeam, enemyTeam, map]);

  return (
    <div className="ai-suggestions">
      <h3>AI Suggestions</h3>
      <p>Suggested Brawlers: {suggestions.join(", ")}</p>
      <p>Cost: {cost}</p>
    </div>
  );
};


export default AISuggestion;