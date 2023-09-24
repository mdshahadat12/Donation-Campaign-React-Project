/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Card = ({card}) => {
    const {id, picture, title, category, category_bg_color, card_bg_color, text_button_bg_color} = card || {};
    return (
        <div>
            <Link to={`details/${id}`}>
            <div className="cursor-pointer duration-200 active:scale-95">
            <img className="w-full" src={picture} alt="" />
            <div className={`p-4 rounded-b-lg bg-[${card_bg_color}]`}>
                <h3 className={`px-2 font-medium text-[${text_button_bg_color}] w-fit rounded-md bg-[${category_bg_color}]`}>{category}</h3>
                <h1 className={`text-lg mt-3 font-semibold text-[${text_button_bg_color}]`}>{title}</h1>
            </div>
            </div>
            </Link>
        </div>
    );
};

export default Card;