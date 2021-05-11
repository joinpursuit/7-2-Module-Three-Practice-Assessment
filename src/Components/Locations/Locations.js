import axios from "axios";
import { useEffect, useState } from "react";

const Locations = () => {
    const [locations, setLocations] = useState([]);
    const [isMounted, setIsMounted] = useState(false);
    const [toggleText, setToggleText] = useState('Show Locations');

    const toggleHide = () => {
        setIsMounted(!isMounted);
        if(toggleText === 'Show Locations'){
            setToggleText('Hide Locations');
        } else {
            setToggleText('Show Locations');
        }
    }

    useEffect(()=>{
        const loadLocations = async () => {
            try {
                const res = await axios.get('https://pokeapi.co/api/v2/location');
                setLocations(res.data.results)
            } catch(err) {
                console.log(err);
                setLocations([]);
            }
        }
        if(toggleText === 'Show Locations'){
            return () => {
                setLocations([]);
            }
        }
        loadLocations();    
    },[toggleText])

    const locationName = locations.map(location=>{
        return (
            <li key={location.url}>{location.name}</li>
            )
    })
    return (
        <section>
            <h1>List of Locations</h1>
            <button onClick={toggleHide}>{toggleText}</button>
            <ul>
                {isMounted && locationName}
            </ul>
        </section>
    )
};

export default Locations;