import { Dispatch, SetStateAction } from "react";

export interface Data {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface DataProps {
  products: Data[];
}

export interface ContextType {
  setSelectedCategory: Dispatch<SetStateAction<string>>;
  categories: string[];
  filteredProductCopy: Data[];
  selectedCategory: string;
}
