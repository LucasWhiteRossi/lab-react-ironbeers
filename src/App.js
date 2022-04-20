import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home'
import { Beers } from './pages/Beers'
import { RandomBeer } from './pages/RandomBeer'
import { NewBeer } from './pages/NewBeer'
import { ChosenBeer } from './pages/ChosenBeer'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/beers" element={<Beers/>}/>
        <Route path="/random-beer" element={<RandomBeer/>}/>
        <Route path="/new-beer" element={<NewBeer/>}/>
        <Route path="/beers/:id" element={<ChosenBeer/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
