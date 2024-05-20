import React from "react";
import { useDataContext } from "../context/context";
import styled from "styled-components";
import { CategoryItem, CategoryList } from "../styles/CategoriesStyles";

const Categories = () => {
  const { categories, setSelectedCategory, selectedCategory } =
    useDataContext();

  const handleChangeCategory = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <CategoryList>
        <h2>All category</h2>
        {categories.map((el, index) => (
          <li key={index}>
            <CategoryItem
              selected={selectedCategory === el}
              onClick={() => handleChangeCategory(el)}
            >
              {el}
            </CategoryItem>
          </li>
        ))}
      </CategoryList>
    </div>
  );
};

export default Categories;
