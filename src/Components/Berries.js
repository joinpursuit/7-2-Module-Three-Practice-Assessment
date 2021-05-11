import React from "react";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import Berry from "./Berry";

const Berries = () => {
  const [berries, setBerries] = useState([]);
  const [berry, setBerry] = useState("");
  const [firmness, setFirmness] = useState("");
  const didMount = useRef(false);

  const selectBerry = (e) => {
    setBerry(e.target.value);
  };

  const fetchBerries = async () => {
    try {
      const res = await axios.get(`https://pokeapi.co/api/v2/berry/`);
      setBerries(res.data.results);
    } catch (error) {
      console.log(error);
      setBerries([]);
    }
  };

  const fetchBerryFirmness = async () => {
    try {
      const res = await axios.get(`https://pokeapi.co/api/v2/berry/${berry}`);
      setFirmness(res.data.firmness.name);
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (didMount.current) {
      fetchBerryFirmness();
    } else {
      didMount.current = true;
    }
  }, [berry]);
  useEffect(() => {
    fetchBerries();
  }, []);

  return (
    <div>
      <h1>Select a Type</h1>
      <select value={berry} onChange={selectBerry}>
        <option value="" selected></option>
        {berries.map((item) => {
          return <Berry item={item.name} key={item.name} />;
        })}
      </select>

      {berry && <h2>{berry}</h2>}
      {berry && <h2>{firmness}</h2>}
    </div>
  );
};
export default Berries;
