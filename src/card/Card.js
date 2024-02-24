import "./Card.css";
import React, { useState, useEffect } from 'react';
import PlanetCard from "../PlanetCard/PlanetCard.js"

function Card({ numberOfPlanets }) {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    fetchPlanets();
  }, []);

  const fetchPlanets = async () => {
    try {
      const response = await fetch('https://swapi.dev/api/planets/?format=json');
      const data = await response.json();
      setPlanets(data.results.slice(0, numberOfPlanets)); 
    } catch (error) {
      console.error('Error fetching planets:', error);
    }
  };

  return (
    <div>
      <div className="planets-directory  ">
      <h1 >Planets Directory</h1>
      <div className="planet-cards " >
        {planets.map((planet, index) => (
          <PlanetCard key={index} planet={planet} />
        ))}
      </div>
    </div>
    </div>
    
  );
}

export default Card;
