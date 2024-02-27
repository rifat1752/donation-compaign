/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonaCard from "./DonaCard";

const Card = () => {
  const [card, setCard] = useState();
  const { id } = useParams();

  const cards = useLoaderData();

  useEffect(() => {
    const findCard = cards?.find((card) => card.id === id);
    setCard(findCard);
  }, [id, cards]);

  return (
    <div>
        <DonaCard card={card}></DonaCard>
    </div>
  );
};

export default Card;
