import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./Locations.css";

const Locations = () => {
  const [locations, setLocations] = useState([]);
  const [showLocations, setShowLocations] = useState(false);

  const fetchLocations = async () => {
    try {
      const res = await axios.get(`https://pokeapi.co/api/v2/location/`);
      setLocations(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleLocations = () => {
    if (showLocations) {
      setShowLocations(false);
    } else {
      setShowLocations(true);
    }
  };

  useEffect(() => {
    fetchLocations();
  }, []);

  return (
    <div>
      <h1>List of Locations</h1>
      {showLocations === false && (
        <button onClick={toggleLocations}>Show Locations</button>
      )}
      {showLocations === true && (
        <button onClick={toggleLocations}>Hide Locations</button>
      )}

      
        <ul>
          {showLocations === true && locations.map((location) => {
            return <li className="locations-li">{location.name}</li>;
          })}
        </ul>
     
    </div>
  );
};

export default Locations;
