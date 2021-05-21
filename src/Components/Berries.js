import React, { useState, useEffect } from "react";
import axios from "axios";

const Berries = () => {
  const [nameOfBerry, setNameOfBerry] = useState("");
  const [firmness, setFirmness] = useState("");
  const [berries, setBerries] = useState([]);

  const getBerries = async () => {
    try {
      const res = await axios.get("https://pokeapi.co/api/v2/berry");
      setBerries(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  const displayBerry = async (e) => {
    if (firmness) {
    }
    try {
      const res = await axios.get(`${e.target.value}`);
      setNameOfBerry(res.data.name);
      setFirmness(res.data.firmness.name);
    } catch (error) {
      console.log(error);
      setFirmness("");
    }
  };
  useEffect(() => {
    getBerries(); //gotta use effect later with a cdm feature
  }, [berries]);

  return (
    <div>
      <div className="berries-container">
        <h2>Select a Type</h2>
        <select onChange={displayBerry}>
          <option value=""></option>
          {berries.map((berry) => {
            return <option value={berry.url} key={berry.name} >{berry.name}</option>;
          })}
        </select>
        {firmness ? (
          <section className="show-berry">
            <h2>{nameOfBerry}</h2>
            <p>Firmness: {firmness}</p>
          </section>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Berries;
