/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Card from "./Card";

const CardContainer = ({value}) => {
    const [fiterdata, setFilterData] = useState([])
    const [apiData, setApiData] = useState([])
 
    useEffect(()=>{
        fetch('apiData.json')
        .then(res => res.json())
        .then(data => setApiData(data))

        if(value){
            const fdata = apiData.filter(card=> card.category.toLowerCase() == value.toLowerCase())
            setFilterData(fdata);
        }else{
            setFilterData(apiData);
        }

    },[apiData,value])
    return (
        <div className="grid my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {
                fiterdata && fiterdata?.map(card => <Card key={card.id} card={card}></Card>)
            }
        </div>
    );
};

export default CardContainer;