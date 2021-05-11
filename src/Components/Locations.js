import { useState,useEffect } from 'react';
import axios from "axios";
export default function Locations() {
    const [list, setList] = useState();
    const [toggle,setToggle] = useState(false)
useEffect(() => {
    generateList()
}, [])
const generateList = async () => {
    try{
        const res = await axios.get(
            `https://pokeapi.co/api/v2/location`
        )
        setList((prev)=> res.data.results )
        console.log(res.data.results)
    }catch (err){
        setList((prev)=> "" )
    }
}
const handleClick = () => {
    setToggle((prev) => !prev)
}
let listOfLocations = []
if(list){
     listOfLocations = list.map( (location,i) => 
    <li key={i}>{location.name}</li>

)}
    if (toggle === false) {
        return (
            <div>
                <h1>List of Locations</h1>
                <button onClick={handleClick}>Show Locations</button>
                <ul></ul>
            </div>
        )
    } else {
        return (
            <div>
                <h1>List of Locations</h1>
                <button onClick={handleClick}>Hide Locations</button>
                <ul>
                    {listOfLocations}
                </ul>
            </div>
        )
    }
}

