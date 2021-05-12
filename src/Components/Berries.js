import {useState, useEffect} from "react"
import axios from "axios"

const Berries = () => {
    const [input, setInput] = useState("")
    const [berries, setBerries] = useState([])
    const [berry, setBerry] = useState({})

    const fetchBerries = async () => {
        try {
            const res = await axios.get("https://pokeapi.co/api/v2/berry/")
            setBerries(res.data.results)
        } catch (error) {
            console.log(error);
            setBerries([])
        }
    }

    const handleChange = async (e) => {
        const {value} = e.target
        setInput(value)
        try {
            const res2 = await axios.get(value)
            setBerry(res2.data)
            debugger
        } catch (error) {
            console.log(error);
            setBerry({})
        }
    }

    useEffect(() => {
        fetchBerries()
    }, [])

    return (
        <main>
            <h1>Select a Type</h1>
            <select value={input} onChange={handleChange}>
                <option value=""></option>
                {berries.map(berry => {
                    return <option value={berry.url} key={berry.name}>{berry.name}</option>
                })}
            </select>
            <h1>{berry.name}</h1>
            <p>{berry.firmness?.name}</p>
        </main>
    )
}

export default Berries