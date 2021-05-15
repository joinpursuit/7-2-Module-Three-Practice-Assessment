import React, { useState } from "react";

import axios from "axios";

const Locations = () => {
  const [locations, setLocations] = useState("");
  const [buttonName, setButtonName] = useState("Show Locations");

  const handleChange = async () => {
    if (locations) {
        setLocations("")
        setButtonName("Show Locations")
    } else {
      try {
        const res = await axios.get("https://pokeapi.co/api/v2/location");
        setLocations(res.data.results);
        setButtonName("Hide Locations")
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <h2>List of Locations</h2>
      <button onClick={handleChange}>{buttonName}</button>
      <div>
        <ul>
          { locations ? 
          locations.map((location) => {
            return <li key={location.name}>{location.name}</li>
          }): ""} 
        </ul>
      </div>
    </div>
  );
};

export default Locations;
