/* eslint-disable react/prop-types */
import CardDonation from "./CardDonation";


const Cards = ({cards}) => {
    
    return (
        <div className="mt-20 my-10  ">
           
            <div className="grid    grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10 justify-items-center">
            {cards?.map((card) => (
  <CardDonation key={card.id} card={card} />
))}
            </div>
        </div>
    );
};

export default Cards;