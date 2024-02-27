/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";


const CardDonetions = ({card}) => {

    const {id,image,title,category,description,Price,bg_color,cat_color,font_color} = card || {};

  return (
    <div className=" mt-10  ">
      <div style={{ background: bg_color }}  className="card card-side w-[30rem]  shadow-xl">
        <figure className="w-5/12 h-60 bg-blue-gray-400">
          <img className="w-full h-full"
            src={image}
            alt=""
          />
        </figure>
        <div className="card-body">
        <p style={{ background:cat_color,color:font_color}} className="w-20 h-5 text-center rounded" >{category}</p>
          <h2 className="card-title">{title}</h2>
          <p style={{color:font_color}} className="font-semibold" > ${Price}.00</p>
          
          <div className="  justify-start">
          <Link to={`/cards/${id}`} >  <button style={{ background: font_color}} className="text-white w-36 btn ">View Details</button> </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDonetions;
