import axios from "axios"
import {useState, useEffect} from "react"

const Locations = () => {
    const [locations, setLocations] = useState([])
    const [showLocations, setShowLocations] = useState(false)

    const fetchLocations = async () => {
        try {
            const res = await axios.get("https://pokeapi.co/api/v2/location")
            setLocations(res.data.results)
        } catch (error) {
            console.log(error);
            setLocations([])
        }
    }

    useEffect(() => fetchLocations(), [])

    const handleClick = () => {
        setShowLocations(prevShowLocations => !prevShowLocations)
    }

    return (
        <main>
            <h1>List of Locations</h1>
            <button onClick={handleClick}>{showLocations ? "Hide Locations": "Show Locations"}</button>
            {
                showLocations ?
             <ul>
                 {locations.map(location => {
                     return <li key={location.name}>{location.name}</li>
                 })}
             </ul>
             :
             <ul></ul>
            }
        </main>
    )
}

export default Locations