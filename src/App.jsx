//import { Route, Routes } from 'react-router-dom';
import { DataProvider } from './Context/DataContext'
import GameMode from './Components/GameMode/GameModes'

function App() {


  return (

    <DataProvider>

      <GameMode />

    </DataProvider>



  )
}

export default App
