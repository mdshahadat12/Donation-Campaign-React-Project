import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";


const DonationCardContainer = () => {
    const [localData, setLocalData] = useState()
    // console.log(localData);
    useEffect(()=>{
        const localitem = JSON.parse(localStorage.getItem('card'))
        setLocalData(localitem);
    },[])
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {
                localData?.map(card => <DonationCard key={card.id} card={card}></DonationCard>)
            }
        </div>
    );
};

export default DonationCardContainer;