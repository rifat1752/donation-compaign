/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";

const CardDonation = ({ card }) => {
  const {id,image,title,category,description,Price,bg_color,cat_color,font_color} = card || {};

  return (
    <div className="">
      <Link to={`/cards/${id}`} >
      <div
        style={{ background: bg_color }}
        className="relative flex w-60 xl:w-64 flex-col rounded-xl   text-gray-700 shadow-2xl shadow-gray-500 "
      >
        <div className="relative mx-4 mt-4 h-60 xl:h-64 overflow-hidden rounded-xl   text-gray-700">
          <img src={image} className="h-full w-full object-cover" />
        </div>
        <div className="p-6">
          <div className=" mb-2 flex items-center justify-between">
            <p
              style={{ background: cat_color, color: font_color }}
              className="px-2 block font-sans  font-medium"
            >
              {category}
            </p>
          </div>
          <p
            style={{ color: font_color }}
            className="block font-sans text-base font-semibold"
          >
            {title}
          </p>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default CardDonation;
