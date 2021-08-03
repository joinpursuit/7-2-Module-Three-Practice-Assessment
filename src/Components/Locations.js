import { useState, useEffect, useRef } from "react";
import axios from "axios";

const Locations = () => {
  const [locations, setLocations] = useState([]);
  const [show, setShow] = useState("Show Locations");
  const didMount = useRef(false);

  // find a better way to write this
  const loadLocations = async () => {
    if (show === "Show Locations") {
      try {
        const res = await axios.get("https://pokeapi.co/api/v2/location");
        setLocations(res.data.results);
        setShow("Hide Locations");
        // debugger
      } catch (error) {
        console.log(error);
        setLocations([]);
        setShow("Show Locations");
      }
    } else {
      setLocations([]);
      setShow("Show Locations");
    }
  };

  // how to prevent the missing dependency warning
  useEffect(() => { didMount.current ? loadLocations() : didMount.current = true }, []);

  return (
    <section className="section">
      <h1>List of Locations</h1>
      <ul>
        {locations.map((location) => {
          return <li key={location.name}>{location.name}</li>;
        })}
      </ul>
      <button onClick={loadLocations}>{show}</button>
    </section>
  );
};

export default Locations;
