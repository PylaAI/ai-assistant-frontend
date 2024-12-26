import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TeamBuilder from "./Components/TeamBuilder/TeamBuilder";
import ChooseMap from "./Components/TeamBuilder/Choosemap";

function App() {
  const handleMapSelect = (map) => {
    console.log(`Selected map: ${map}`);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<TeamBuilder />} />
        <Route path="/choose-map" element={<ChooseMap onMapSelect={handleMapSelect} />} />
      </Routes>
    </Router>
  );
}

export default App;

