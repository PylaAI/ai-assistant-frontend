import { Route, Routes } from 'react-router-dom';
import { DataProvider } from './Context/DataContext';
import GameMode from './Components/GameMode/GameModes';
import Home from './Components/Home/Home';
import Navbar from './Components/Header/Navbar';
import Brawlers from './Components/Brawlers/Brawlers';
import Brawler from './Components/Brawlers/Brawler';
import { GamemodeMap } from './Components/Map/GamemodeMap';
import { AIAssitant } from './Components/AIAssistant/AIAssistant';
import './app.css';

function App() {
  return (
    <div className="container">
      <DataProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/maps" element={<GameMode />} />
          <Route path="/map/:name" element={<GamemodeMap />} />
          <Route path="/brawlers" element={<Brawlers />} />
          <Route path="brawlers/:name" element={<Brawler />} />
          <Route path="ai-assistant" element={<AIAssitant />} />
        </Routes>
      </DataProvider>
    </div>
  );
}

export default App;
