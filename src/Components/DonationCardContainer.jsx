import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";


const DonationCardContainer = () => {
    const [localData, setLocalData] = useState([])
    const [seeAll, setSeeAll] = useState(false)
    // console.log(seeAll);
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
                 </div>: <p className="text-center text-2xl my-14 font-semibold text-red-400">You Have not donated yet</p>
            }
        <div className="flex justify-center">
        {
            localData?.length > 4 && <button onClick={handleSeeAll} className={`${seeAll ? 'hidden':''} py-2 px-3 bg-green-500 rounded-lg text-white font-semibold mt-3`}>Show All</button>
        }
        </div>
        </div>
    );
};

export default DonationCardContainer;