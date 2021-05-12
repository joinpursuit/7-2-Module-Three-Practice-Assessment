import { useState, useEffect } from 'react';
import axios from "axios";


export default function Berries() {
    const [berries, setBerries] = useState([])
    const [berry, setBerry] = useState("")
    const [berryFirmness, setBerryFirmness] = useState("")

    useEffect(() => {
        generateBerries()
    }, [])
    const generateBerries = async () => {
        try {
            const res = await axios.get(
                `https://pokeapi.co/api/v2/berry/`
            )
            setBerries((prevInput) => res.data.results)
        } catch (err) {
            setBerries((prevInput) => "")
        }
    }
    const upDateBerry = (e) => {
        e.preventDefault()
        setBerry((prevInput) => e.target.value)
        let url = ""
        berries.forEach(berry => {
            if (e.target.value === berry.name) {
                url = berry.url
            }
        })
        fetchBerry(url)

    }
    const fetchBerry = async (url) => {
        // console.log(url)
        try {
            const res = await axios.get(url)
            setBerryFirmness((prevInput) => res.data)
            // console.log(res.data.firmness.name)
        } catch (err) {
            setBerryFirmness((prevInput) => "")
        }
    }

    const berryList = berries.map((el, i) => {

        return (
            <option value={el.name} key={i}>{el.name}</option>
        )
    })
    let firmnessDisplay = ""
    if (berryFirmness) {
        firmnessDisplay = berryFirmness.firmness.name
    }
    return (
        <div>
            <h1>Select a Type</h1>
            <select defaultValue={berry} onChange={upDateBerry}>
                <option value="" selected ></option>
                {berryList}
            </select>
            <h2>{berry}</h2>
            {firmnessDisplay}
        </div>
    )
}
// https://pokeapi.co/api/v2/berry/