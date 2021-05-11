
import { useState } from "react";
import BerryInfo from "./BerryInfo";
import BerryOptions from "./BerryOptions";


const Berries = () => {
    const [berry, setBerry] = useState('');
    const updateBerry = (e) => {
        setBerry(e.target.value)
    }
    return (
        <section>
            <BerryOptions berry={berry} updateBerry={updateBerry}/>
            <BerryInfo berry={berry}/>
        </section>
    )
};

export default Berries;