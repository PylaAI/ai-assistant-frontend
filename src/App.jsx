import { Route, Routes } from 'react-router-dom';
import { DataProvider } from './Context/DataContext'
import GameMode from './Components/GameMode/GameModes'
import Home from './Components/Home/Home'
import Navbar from './Components/Header/Navbar';
import Brawlers from './Components/Brawlers/Brawlers';
import './app.css'

function App() {


  return (
    <div className='container'>

      <DataProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/maps' element={<GameMode />} />
          <Route path='/brawlers' element={<Brawlers />} />
        </Routes>


      </DataProvider>
    </div>
  )
}

export default App
