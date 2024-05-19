import React from "react";
import { useDataContext } from "../context/context";
import { Card, CardList } from "../styles/CardsStyles";

const Cards = () => {
  const { filteredProductCopy } = useDataContext();

  return (
    <div>
      <CardList>
        {filteredProductCopy.map((el) => (
          <Card key={el.id}>
            <img src={el.image} alt={el.title} />
            <div>
              <h6>{el.title}</h6>
              <p>${el.price}</p>
              <span>{el.rating.rate}</span>
            </div>
          </Card>
        ))}
      </CardList>
    </div>
  );
};

export default Cards;
