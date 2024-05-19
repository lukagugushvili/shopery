import React from "react";
import { useDataContext } from "../context/context";
import { Card, CardBox, CardList, Description } from "../styles/CardsStyles";
import Stars from "../utils/Stars";

const Cards = () => {
  const { filteredProductCopy } = useDataContext();

  return (
    <CardBox>
      <h2>
        {filteredProductCopy.length}
        <span>Results Found</span>
      </h2>
      <CardList>
        {filteredProductCopy.map((el) => (
          <Card key={el.id}>
            <img src={el.image} alt={el.title} />
            <Description>
              <h6>{el.title}</h6>
              <p>${el.price}</p>
              <Stars rating={el.rating.rate} />
            </Description>
          </Card>
        ))}
      </CardList>
    </CardBox>
  );
};

export default Cards;
