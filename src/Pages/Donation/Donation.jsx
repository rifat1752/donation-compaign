/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";
import CardDonetions from "../../Components/Cards/CardDonetions";
import Statistic from "../Statistics/Statistics";

const Donation = () => {

    const [totalPrice, setTotalPrice] =useState(0)
    const [donations,setDonations] = useState([])
    const [noFound,setNoFound] =useState("")
    const [isShow,setIsShow] = useState(false)
    useEffect(()=>{
        const donetionItems = JSON.parse(localStorage.getItem('Donations'))
        if(donetionItems){
            setDonations(donetionItems)
            const total = donetionItems.reduce((PreValue, currentItem)=>PreValue+currentItem.Price, 0)
            setTotalPrice(total)
    
        }
        else{
            console.log('no data found');
            setNoFound("No data found")
        }
    },[])

    
    return (
        <div >
            
            {noFound?<p className="w-ful text-xl font-bold h-[80vh] flex items-center justify-center">{noFound}</p>: <div className="flex flex-col  justify-center ">
                
                <div className="grid    grid-cols-1 lg:grid-cols-2  gap-5 py-10 justify-items-center  ">
                    {
                        isShow ? donations.map(card=> <CardDonetions key={card.id} card={card}> </CardDonetions>)
                        : donations.slice(0,4).map(card=> <CardDonetions key={card.id} card={card}> </CardDonetions>)
                    }
                </div>
                {!isShow ? (
  <button onClick={() => setIsShow(true)} className="btn btn-active btn-primary mx-auto">See More</button>
) : null}   
                </div>}
                
        </div>
    );
};

export default Donation;