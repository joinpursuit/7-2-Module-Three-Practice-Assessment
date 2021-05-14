import axios from "axios";
import { useState, useEffect } from "react";

const Berries = () => {
  const [berries, setBerries] = useState([]);
  const [selectedBerryUrl, setSelectedBerryUrl] = useState("");
  const [selectedBerry, setSelectedBerry] = useState({});

  const fetchAllBerries = async () => {
    try {
      const res = await axios.get("https://pokeapi.co/api/v2/berry/");
      setBerries(res.data.results);
    } catch (error) {
      setBerries([]);
    }
  };

  useEffect(() => {
    fetchAllBerries();
  }, []);

  const selectBerry = async (e) => {
    setSelectedBerryUrl(e.target.value);
    try {
      const res = await axios.get(e.target.value);
      setSelectedBerry(res.data);
    } catch (error) {
      setSelectedBerry({});
    }
  };

  return (
    <section>
      <h1>Select a Type</h1>
      <select value={selectedBerryUrl} onChange={selectBerry}>
        <option value="" selected></option>
        {berries.map((berryObj) => {
          return (
            <option key={berryObj.name} value={berryObj.url}>
              {berryObj.name}
            </option>
          );
        })}
      </select>
      <h1>{selectedBerry.name}</h1>
      <p>{selectedBerry.firmness && selectedBerry.firmness.name}</p>
    </section>
  );
};

export default Berries;
