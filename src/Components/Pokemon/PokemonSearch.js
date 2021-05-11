import React, { useState } from "react";

const PokemonSearch = ({search}) => {
	const [userInput, setUserInput] = useState('');

	const handleSubmit = (e) => {
        e.preventDefault();
		search(userInput.toLocaleLowerCase());
        setUserInput("");
    };
	const handleChange = (e) => {
		setUserInput(e.target.value);
	};
	return (
		<form onSubmit={handleSubmit}>
			<input
				onChange={handleChange}
				value={userInput}
				placeholder="Find Your Pokemon"
			/>
            <button>Submit</button>
		</form>
	);
}

export default PokemonSearch;