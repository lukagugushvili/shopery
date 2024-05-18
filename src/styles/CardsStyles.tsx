import styled from "styled-components";

export const CategoryList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  border-bottom: 2px solid gray;
  padding-bottom: 10px;
`;

export const CategoryItem = styled.p<{ selected: boolean }>`
  cursor: pointer;
  font-size: 14px;
  font-weight: ${({ selected }) => (selected ? "900" : "400")};
  color: ${({ selected }) => (selected ? "#22c55e" : "normal")};
`;
