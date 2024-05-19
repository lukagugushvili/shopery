import React, { useEffect, useState } from "react";
import { ContextType, Data } from "../types/DataType";
import { DataContext } from "../context/context";
import Categories from "../components/Categories";
import Cards from "../components/Cards";
import { Container } from "../styles/ContainerStyles";
import { Wrapper } from "../styles/MainPageStyles";

const Main = () => {
  const [products, setProducts] = useState<Data[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [productsPrice, setProductsPrice] = useState<number[]>([]);
  const [filteredProductCopy, setFilteredProductCopy] = useState<Data[]>([]);

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
    setFilteredProductCopy(productsFilter);
  }, [products, selectedCategory]);

  const value: ContextType = {
    setSelectedCategory,
    selectedCategory,
    categories,
    filteredProductCopy,
  };

  return (
    <Container>
      <Wrapper>
        <DataContext.Provider value={value}>
          <Categories />
          <Cards />
        </DataContext.Provider>
      </Wrapper>
    </Container>
  );
};

export default Main;
