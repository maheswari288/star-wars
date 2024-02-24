
import React, { useState, useEffect } from 'react';
import "./PlanetDirectory.css";

function PlanetsDirectory() {
  const [planets, setPlanets] = useState([]);
  const [nextPage, setNextPage] = useState('');

  useEffect(() => {
    fetchPlanets('https://swapi.dev/api/planets/?format=json');
  }, []);

  const fetchPlanets = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPlanets(data.results);
      setNextPage(data.next);
    } catch (error) {
      console.error('Error fetching planets:', error);
    }
  };

  const handleNextPage = () => {
    if (nextPage) {
      fetchPlanets(nextPage);
    }
  };

  return (
    <div className="planets-directory">
      <h1>Planets Directory</h1>
      <div className="planet-list">
        {planets.map((planet, index) => (
          <div key={index} className="planet-card magnify">
            <h2>{planet.name}</h2>
            <p><strong>Climate: </strong>{planet.climate}</p>
            <p><strong>Population: </strong>{planet.population}</p>
            <p><strong>Terrain: </strong>{planet.terrain}</p>
          </div>
        ))}
      </div>
      <div className="pagination" magnify>
        {nextPage && <button onClick={handleNextPage}>View More</button>}
      </div>
    </div>
  );
}

export default PlanetsDirectory;
