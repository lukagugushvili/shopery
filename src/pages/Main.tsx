import React, { useEffect, useState } from "react";
import { ContextType, Data } from "../types/DataType";
import { DataContext } from "../context/context";
import Categories from "../components/Categories";
import Cards from "../components/Cards";
import { Container } from "../styles/ContainerStyles";
import { Wrapper } from "../styles/MainPageStyles";
import Loader from "../utils/Loader";
import { LoaderBox } from "../styles/LoaderStyles";
import { ErrorCon } from "../styles/ErrorMsgStyles";

const Main = () => {
  const [products, setProducts] = useState<Data[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [productsPrice, setProductsPrice] = useState<number[]>([]);
  const [filteredProductCopy, setFilteredProductCopy] = useState<Data[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showError, setShowError] = useState<string | null>(null);

  // Get Products Data
  useEffect(() => {
    const fetchData = async () => {
      const API_URL = "https://fakestoreapi.com/products";
      setIsLoading(true);
      try {
        const res = await fetch(`${API_URL}`);
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setProducts(data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setShowError(error.message);
        } else {
          setShowError("An unknown error occurred");
        }
      } finally {
        setIsLoading(false);
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

  if (isLoading) {
    return (
      <LoaderBox>
        <Loader />
      </LoaderBox>
    );
  }

  if (showError) {
    return <ErrorCon>Something went wrong! Please try again.</ErrorCon>;
  }

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
