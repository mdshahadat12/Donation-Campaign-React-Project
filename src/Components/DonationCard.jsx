/* eslint-disable react/prop-types */
import img from "../assets/Health.png"
const DonationCard = ({card}) => {
    const {picture} = card || {}
    return (
        <div className="flex">
            <img className="w-[200px] rounded-l-lg" src={picture} alt="" />
            <div style={{backgroundColor:"#D9E5FF"}}
            className="p-5 flex-grow rounded-r-lg">
                <h3 style={{backgroundColor:`#0034FF33`,color:`#0052FF`}} className="px-2 font-medium w-fit rounded-md">Health</h3>
                <h1 className="text-lg mt-3 font-semibold">Clean water for children</h1>
                <p style={{color:"#0052FF"}} className="font-semibold">$290.00</p>
                <button style={{backgroundColor:"#0052FF"}} className="py-2 px-3 rounded-lg text-white font-semibold mt-3">View Details</button>
            </div>
        </div>
    );
};

export default DonationCard;