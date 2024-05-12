import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Data } from "../types/DataType";

const Main = () => {
  const [products, setProducts] = useState<Data[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Get Products Data
  useEffect(() => {
    const fetchData = async () => {
      const API_URL = "https://fakestoreapi.com/products";
      try {
        const res = await fetch(`${API_URL}`);
        const data = await res.json();
        setProducts(data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  });

  // Filter categories to avoid repeating them
  useEffect(() => {
    const uniqueCategories: string[] = [];

    products.forEach((el) => {
      if (!uniqueCategories.includes(el.category)) {
        uniqueCategories.push(el.category);
      }
    });

    uniqueCategories.sort((a, b) => a.length - b.length);

    setCategories(["All", ...uniqueCategories]);
  }, [products]);

  const handleChangeCategory = (category: string) => {
    setSelectedCategory(category);
  };

  // get checked category
  const filteredCategories =
    selectedCategory === "All"
      ? products
      : products.filter((el) => el.category === selectedCategory);
  // sorted products with price
  filteredCategories.sort((a, b) => a.price - b.price);

  return (
    <Wrapper>
      <div>
        <ul>
          {categories.map((el, index) => (
            <li key={index}>
              <p onClick={() => handleChangeCategory(el)}>{el}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        {filteredCategories.map((el: any) => (
          <p key={el.id}>
            {el.price}-{el.category}
          </p>
        ))}
      </div>
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;
