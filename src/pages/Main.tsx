import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ContextType, Data } from "../types/DataType";
import { DataContext } from "../context/context";
import Categories from "../components/Categories";

const Main = () => {
  const [products, setProducts] = useState<Data[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [productsPrice, setProductsPrice] = useState<number[]>([]);
  const [productsFilterCopy, setProductsFilterCopy] = useState<Data[]>([]);

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
  }, []);

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

    // Get prices
    const prices: number[] = [];

    products.forEach((el) => {
      if (el.price) {
        prices.push(el.price);
      }
    });

    setProductsPrice(prices);

    // get checked category
    const productsFilter =
      selectedCategory === "All"
        ? products
        : products.filter((el) => el.category === selectedCategory);
    // sorted products with price
    productsFilter.sort((a, b) => a.price - b.price);
    setProductsFilterCopy(productsFilter);
  }, [products, selectedCategory]);

  const value: ContextType = {
    setSelectedCategory,
    selectedCategory,
    categories,
    productsFilterCopy,
  };

  return (
    <Wrapper>
      <DataContext.Provider value={value}>
        <Categories />
        {productsFilterCopy.map((el) => (
          <li>
            <p>
              {el.category}\{el.price}
            </p>
          </li>
        ))}
      </DataContext.Provider>
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;
