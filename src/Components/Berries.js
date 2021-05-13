import { useState, useEffect } from 'react';
import axios from "axios";

export default function Berries() {
    const [berries, setBerries] = useState([])
    const [selectedBerryUrl, setSelectedBerryUrl] = useState("")
    const [selectedBerry, setSelectedBerry] = useState({})

    useEffect(() => {
        fetchAllBerries()
    }, [])
    const fetchAllBerries = async () => {
        try {
            const res = await axios.get(`https://pokeapi.co/api/v2/berry/`)
            setBerries(res.data.results)
        } catch (err) {
            setBerries([])
        }
    }
    const fetchBerryFirmness = async (e) => {
        e.preventDefault()
        setSelectedBerryUrl(e.target.value)
        try {
            const res = await axios.get(e.target.value)
            setSelectedBerry(res.data)
        } catch (err) {
            setSelectedBerry({})
        }
    }
    return (
        <div>
            <h1>Select a Type</h1>
            <select value={selectedBerryUrl} onChange={fetchBerryFirmness}>
                <option defaultValue=""></option>
                {berries.map(singleBerry => {
                    return (
                        <option value={singleBerry.url} key={singleBerry.name}>{singleBerry.name}</option>
                    )
                })}
            </select>
            <h2>{selectedBerry.name}</h2>
            <h4>{selectedBerry.firmness && selectedBerry.firmness.name}</h4>
        </div>
    )
}
