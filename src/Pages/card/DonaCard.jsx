/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import swal from 'sweetalert';


const DonaCard = ({card}) => {
  const {id,image,title,category,description,Price,bg_color,cat_color,font_color} = card || {};
  const handleAddToDonation=()=>{
const addedDonationArray =[];

    const donetionItems = JSON.parse(localStorage.getItem('Donations'))
    if(!donetionItems){
      addedDonationArray.push(card)
      localStorage.setItem('Donations',JSON.stringify(addedDonationArray))
      swal("Good job!", "Your donetion successful!", "success")
    }
    else{
      const isExist = donetionItems.find(card => card.id == id)                                                
      if(!isExist){
        addedDonationArray.push(...donetionItems,card)
      localStorage.setItem('Donations',JSON.stringify(addedDonationArray))
      swal("Good job!", "Your donetion successful!", "success")
      }
      else {
        swal("sorry!", "already donated", "error")
      }

      
    }
    // localStorage.setItem('test',JSON.stringify)
  }
    
    return (
        <div className="mt-16 w-8/12  mx-auto h-[80vh]">
      <div className="relative w-full  h-[50vh] flex items-end" >
        <img src={image} className='w-[100%] h-full' alt="" />
        <div className="absolute w-full h-20 bg-[#2724265c] ">
          <button
           onClick={handleAddToDonation} 
           style={{background: font_color }}
            className="m-5  none center mr-3  rounded-lg  py-3 px-6 font-sans text-xs font-bold  text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            data-ripple-light="true"
          >
            Donate ${Price}
          </button>
        </div>
      </div>
      <div className="flex h-48 mt-5 flex-col justify-between bg-blue-gray-50">
        <h1 className="text-4xl font-extrabold">{category}</h1>
        <p className="text-lg font-light">{description}</p>

      </div>
    </div>
    );
};

export default DonaCard;