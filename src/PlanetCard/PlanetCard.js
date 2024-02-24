import React, { useState } from 'react';


function PlanetCard({ planet }) {
  const [residents, setResidents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showResidents, setShowResidents] = useState(false); // State to control visibility of residents' details

  const handleViewDetails = async () => {
    setLoading(true);
    try {
      const promises = planet.residents.map(async residentUrl => {
        const response = await fetch(residentUrl);
        const residentData = await response.json();
        return residentData;
      });
      const residentsData = await Promise.all(promises);
      setResidents(residentsData);
      setShowResidents(true); 
    } catch (error) {
      console.error('Error fetching residents:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseDetails = () => {
    setShowResidents(false); 
  };


  return (
    <div className="planet-card ">
       
      <h2>{planet.name}</h2>
      <p><strong>Climate: </strong>{planet.climate}</p>
      <p><strong>Population: </strong>{planet.population}</p>
      <p><strong>Terrain: </strong>{planet.terrain}</p>
      <button className="buttoncss" onClick={handleViewDetails}>View Details</button>
      {loading && <p>Loading residents...</p>}
      {showResidents && residents.length > 0 && (
        <div className='residents'>
          <h3>Residents:</h3>
          <ul>
            {residents.map((resident, index) => (
              <ul class="a">
                 <li key={index}>

<strong>Name:</strong> {resident.name}<br />
<strong>Height:</strong> {resident.height}<br />
<strong>Mass:</strong> {resident.mass}<br />
<strong>Gender:</strong> {resident.gender}<br />


</li>

              </ul>
                
             
            ))}
          </ul>
          <button  className="buttoncss"onClick={handleCloseDetails}>Close Details</button> 
        </div>
      )}
    </div>
  );
}

export default PlanetCard;