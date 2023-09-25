/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Card = ({card}) => {
    const {id, picture, title, category, category_bg_color, card_bg_color, text_button_bg_color} = card || {};
    return (
        <div>
            <Link to={`details/${id}`}>
            <div className="cursor-pointer shadow-md duration-200 active:scale-95">
            <img className="w-full" src={picture} alt="" />
            <div style={{backgroundColor:`${card_bg_color}`}} className={"p-4 rounded-b-lg"}>
                <h3 style={{backgroundColor:`${category_bg_color}`,color:`${text_button_bg_color}`}} className={`px-2 font-medium w-fit rounded-md`}>{category}</h3>
                <h1 style={{color:`${text_button_bg_color}`}} className={`text-lg mt-3 font-semibold`}>{title}</h1>
            </div>
            </div>
            </Link>
        </div>
    );
};

export default Card;