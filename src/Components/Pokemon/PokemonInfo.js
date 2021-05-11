import axios from "axios";
import { useEffect, useState, useRef } from "react";

const PokemonInfo = ({pokemon}) => {
    const [pokeInfo, setPokeInfo] = useState({});
    const [showInitialText, setShowInitialText] = useState(false);
    const didMount = useRef(false);

    useEffect(()=>{
        const fetchPokemon = async () => {
            try {
                const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
                console.log(res.data)
                setPokeInfo(res.data)
                setShowInitialText(prevShowInitialText => !prevShowInitialText.showInitialText);
            }catch(err){
                console.log(err)
                setPokeInfo({});
                setShowInitialText(false);
            }
        }
        if(didMount.current){
            fetchPokemon();
        }else {
            didMount.current=true;
        }
    },[pokemon])
    return (
        <section>
            {!showInitialText && <h1>Use the search bar to find a Pokemon</h1>}
            {showInitialText && 
                <div>
                    <h1>Name: {pokeInfo.name}</h1>
                    <img src={pokeInfo?.sprites?.front_default} alt={pokeInfo.name}/>
                    <h1>ID {pokeInfo.id}</h1>
                </div>
            }
        </section>
    )
}

export default PokemonInfo;