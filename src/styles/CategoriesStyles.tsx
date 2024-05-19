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
  letter-spacing: 1px;
  font-weight: ${({ selected }) => (selected ? "900" : "400")};
  color: ${({ selected }) => (selected ? "#00B207" : "normal")};
`;
