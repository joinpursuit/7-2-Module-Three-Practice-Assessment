import { useState, useEffect } from "react";
import axios from "axios";

const Berries = () => {
  const [berry, setBerry] = useState("");
  const [berries, setBerries] = useState([]);
  const [firmness, setFirmness] = useState("");
  const [flavors, setFlavors] = useState([]);

  const selectBerry = async (e) => {
    const value = e.target.value;
    try {
      const res = await axios.get(`https://pokeapi.co/api/v2/berry/${value}`);
      const data = res.data;
      // debugger
      setFirmness(data.firmness.name)
      setBerry(data.name)
      setFlavors(data.flavors)
    } catch (err) {
      setFirmness("")
      setBerry("")
      setFlavors([])
    }
  };

  const loadBerries = async () => {
    try {
      const res = await axios.get("https://pokeapi.co/api/v2/berry/");
      // debugger
      const berryArray = res.data.results;
      setBerries(berryArray);
    } catch (error) {
      console.log(error);
      setBerries([]);
    }
  };

  useEffect(() => {
    loadBerries();
  }, []);

  return (
    <section className="section">
      <h1>Select a Type</h1>
      <select value={berry} onChange={selectBerry}>
        <option value="" defaultValue></option>
        {berries.map((berry) => {
          //   debugger
          return (
            <option value={berry.name} key={berry.name}>
              {berry.name}
            </option>
          );
        })}
      </select>
      <h3>{berry}</h3>
      <h5>{firmness}</h5>
      <ul>
        {flavors.map((flavor) => {
          return (
            <option value={flavor.flavor.name} key={flavor.flavor.name}>
              {flavor.flavor.name}
            </option>
          );
        })}
      </ul>
    </section>
  );
};

export default Berries;
