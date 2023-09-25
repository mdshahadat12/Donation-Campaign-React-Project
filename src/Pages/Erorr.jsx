import { Link } from "react-router-dom";
const Erorr = () => {
    return (
        <div>
            <div className="flex items-center flex-col">
            <h1 className="text-center text-4xl mt-14 mb-5 font-bold">This is not Right way</h1>
                <img className="w-[20%]" src="https://i.ibb.co/WVNhMgy/pngegg.png" alt="" />
            <Link to={"/"}><button className="py-2 px-3 bg-gray-500 rounded-lg text-white font-semibold mt-10">Home</button></Link>
            </div>
        </div>
    );
};

export default Erorr;