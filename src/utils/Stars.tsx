import React, { useEffect, useState } from "react";
import { useDataContext } from "../context/context";
import {
  MdOutlineStarPurple500,
  MdOutlineStarHalf,
  MdOutlineStarOutline,
} from "react-icons/md";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { Data, RatingProp } from "../types/DataType";

const Stars = ({ rating }: RatingProp) => {
  const [stars, setStars] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const renderStars = (rating: any) => {
      const starsBox = [];
      for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
          starsBox.push(<MdOutlineStarPurple500 key={i} color="gold" />);
        } else if (i - rating === 0.5) {
          starsBox.push(<MdOutlineStarHalf key={i} color="gold" />);
          console.log(starsBox);
        } else {
          starsBox.push(<MdOutlineStarOutline key={i} color="gold" />);
        }
      }
      return starsBox;
    };

    setStars(renderStars(rating));
  }, [rating]);

  return (
    <div>
      {stars.map((star: any, index: any) => (
        <span key={index}>{star}</span>
      ))}
    </div>
  );
};

export default Stars;
