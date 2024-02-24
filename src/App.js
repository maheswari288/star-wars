import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Card from "./card/Card.js";
import PlanetCard from './PlanetCard/PlanetCard.js';
import PlanetsDirectory from './PlanetsDirectory/PlanetsDirectroy.js';
import Nav from './Nav/Nav.js';


function App() {

  
  return (

    <Router>
      <div className="App">
        <Nav/>
      
        <Routes>
     <Route   path="/" element={<Card  numberOfPlanets={10} />}/>
     <Route   path="/home" element={<Card  numberOfPlanets={10} />}/>
     
     

         <Route path="/Planet/:id" element={<PlanetCard/>}/>
         <Route path="/Next" element={<PlanetsDirectory/>}/>
    
     </Routes>
    </div>

    </Router>
    
  );
}

export default App;
