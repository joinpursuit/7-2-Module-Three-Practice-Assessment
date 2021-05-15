import React, { useState, useEffect } from "react";
import axios from "axios";
const Berries = () => {
  const [berries, setBerries] = useState([]);
  const [berry, setBerry] = useState("");
  const [data, setData] = useState({});

  const pokemon = async () => {
    try {
      const res = await axios.get(`https://pokeapi.co/api/v2/berry/`);
      //   debugger;
      setBerries(res.data.results);
    } catch (error) {
      console.log(error);
      setBerries([]);
    }
  };
  const updatePokemon = async (e) => {
    setBerry(e.target.value);
    try {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/berry/${e.target.value}`
      );
      setData(res.data);
      debugger;
    } catch (error) {
      console.log(error);
      setData({});
    }
  };

  useEffect(() => {
    pokemon();
  }, []);

  const berryLists = berries.map((berry) => (
    <option value={berry.name} key={berry.name}>
      {berry.name}
    </option>
  ));
  return (
    <section>
      <h1> Select a Type</h1>
      <select onChange={updatePokemon} value={berry}>
        <option defaultValue=""></option>
        {berryLists}
      </select>
      <h1> {data.name}</h1>
      <p>{data.firmness?.name}</p>
    </section>
  );
};

export default Berries;
