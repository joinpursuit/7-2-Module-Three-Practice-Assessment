import axios from "axios";
import { useEffect, useState, useRef } from "react";

const BerryInfo = ({berry}) => {
    const [berryInfo, setBerryInfo] = useState({});
    const didMount = useRef(false);
    useEffect(()=> {
        const fetchBerryInfo = async () => {
            try {
                if(berry!==''){
                    const res = await axios.get(berry);
                    setBerryInfo(res.data)
                } else {
                    setBerryInfo({});
                }
            } catch(err){
                console.log(err);
                setBerryInfo({});
            }
        }
        if(didMount.current){
            fetchBerryInfo();
        }else {
            didMount.current=true;
        }
    },[berry])
    return (
        <section>
            <h1>{berryInfo.name}</h1>
            <p>{berryInfo?.firmness?.name}</p>
            <ul>
                {/* flavors will go here */}
            </ul>
        </section>
    );
};
export default BerryInfo;