import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";


const DonationCardContainer = () => {
    const [localData, setLocalData] = useState([])
    const [seeAll, setSeeAll] = useState(false)
    console.log(seeAll);
    useEffect(()=>{
        const localitem = JSON.parse(localStorage.getItem('card'))
        setLocalData(localitem);
    },[])

    const handleSeeAll = () => {
        setSeeAll(!seeAll)
    }

    return (
        <div>
            {
                localData ? <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {
                    seeAll ? localData?.map(card => <DonationCard key={card.id} card={card}></DonationCard>) : localData?.slice(0,4).map(card => <DonationCard key={card.id} card={card}></DonationCard>)
                }
            </div>: <h1>no data</h1>
            }
        <div className="flex justify-center">
        {
            localData?.length > 4 && <button onClick={handleSeeAll} className="py-2 px-3 bg-green-500 rounded-lg text-white font-semibold mt-3">{seeAll?"Show less":"Show All"}</button>
        }
        </div>
        </div>
    );
};

export default DonationCardContainer;