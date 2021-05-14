import { useState, useEffect } from "react";
import axios from "axios";

const Locations = () => {
  const [locations, setLocations] = useState([]);
  const [showLocations, setShowLocations] = useState(false);

  useEffect(() => {
    fetchLocations();
  }, []);

  const fetchLocations = async () => {
    try {
      const res = await axios.get("https://pokeapi.co/api/v2/location");
      setLocations(res.data.results);
    } catch (err) {
      setLocations([]);
    }
  };

  const handleClick = () =>
    setShowLocations((prevShowLocations) => !prevShowLocations);

  return (
    <section>
      <h1>List of Locations</h1>

      <button onClick={handleClick}>
        {showLocations ? "Hide Locations" : "Show Locations"}
      </button>
      {showLocations ? (
        <ul>
          {locations.map((locationObj) => {
            return <li key={locationObj.name}>{locationObj.name}</li>;
          })}
        </ul>
      ) : (
        <ul></ul>
      )}
    </section>
  );
};

export default Locations;
