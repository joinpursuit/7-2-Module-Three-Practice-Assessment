import axios from "axios";
import { useEffect, useState } from "react";

const BerryOptions = (props) => {
    const [berries, setBerries] = useState([]);
    useEffect(()=> {
        const loadBerries = async () => {
            try {
                const res = await axios.get('https://pokeapi.co/api/v2/berry/');
                // console.log(res.data.results)
                setBerries(res.data.results)
            } catch(err) {
                console.log(err)
            }
        }
        loadBerries();
    },[]);
    const berryOptions = berries.map(berry=>{
        return <option value={berry.url} key={berry.name}>{berry.name}</option>
    })
    return (
        <section>
            <h1>Select a Type</h1>
            <select value={props.berry} onChange={props.updateBerry}>
                <option value="" defaultValue></option>
                {berryOptions}
            </select>
        </section>
    )
};

export default BerryOptions;