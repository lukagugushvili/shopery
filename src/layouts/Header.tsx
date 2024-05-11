import React from "react";
import { IoHome } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderCon>
      <IoHome />
      <IoIosArrowForward />
      <p>Categories</p>
      <IoIosArrowForward />
    </HeaderCon>
  );
};

export default Header;

const HeaderCon = styled.header`
  padding: 5px;
  display: flex;
  align-items: center;
  border-bottom: 2px solid gray;
`;
