import React from "react";
import "../TeamBuilder/css/summary.css";

const Summary: React.FC = () => {
  return (
    <div className="summary-container">
      <h2 className="summary-title">How to build the best Team of Brawlers</h2>
      <p>
        Use the Team Builder during Power League or in the Lobby to find the
        best Brawler composition. Each Brawler shows their Win Rate with the
        selected composition. The data is updated when you add Brawlers to your
        team.
      </p>
      <p className="summary-info">
        Info: Statistics are generated with data from Brawl Time Ninja's
        visitors. These players are usually better than the average.
      </p>
    </div>
  );
};

export default Summary;