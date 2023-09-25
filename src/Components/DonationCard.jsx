import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const DonationCard = ({ card }) => {
  const {
    id,
    picture,
    price,
    category,
    title,
    card_bg_color,
    category_bg_color,
    text_button_bg_color,
  } = card || {};
  return (
    <div className="flex">
      <img className="w-[200px] rounded-l-lg" src={picture} alt="" />
      <div
        style={{ backgroundColor: `${card_bg_color}` }}
        className="p-5 flex-grow rounded-r-lg"
      >
        <h3
          style={{
            backgroundColor: `${category_bg_color}`,
            color: `${text_button_bg_color}`,
          }}
          className="px-2 font-medium w-fit rounded-md"
        >
          {category}
        </h3>
        <h1 className="text-lg mt-3 font-semibold">{title}</h1>
        <p style={{ color: `${text_button_bg_color}` }} className="font-semibold">
          ${price}
        </p>
        <Link to={`/details/${id}`}>
        <button
          style={{ backgroundColor: `${text_button_bg_color}` }}
          className="py-2 px-3 rounded-lg text-white font-semibold mt-3"
        >
          View Details
        </button>
        </Link>
      </div>
    </div>
  );
};

export default DonationCard;
