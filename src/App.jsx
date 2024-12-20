import { Route, Routes } from 'react-router-dom';
import { DataProvider } from './Context/DataContext';
import GameMode from './Components/GameMode/GameModes';
import TeamBuilder from './Components/TeamBuilder/TeamBuilder';

function App() {
  return (
    <DataProvider>
      <Routes>
        <Route path="/" element={<GameMode />} />
        <Route path="/team-builder" element={<TeamBuilder />} />
      </Routes>
    </DataProvider>
  );
}

export default App;