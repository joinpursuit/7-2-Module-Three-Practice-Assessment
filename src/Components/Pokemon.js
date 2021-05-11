import React from "react";
import axios from "axios";
import { useState, useEffect, useRef } from "react";

const Pokemon = () => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <h1>Search for a Pokemon</h1>
      <form>
        <input
          value={input}
          placeholder="Find Your Pokemon"
          onChange={handleSubmit}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Pokemon;
