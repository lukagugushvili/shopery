import React from "react";
import { IoHome } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";
import { Container } from "../styles/ContainerStyles";

const Header = () => {
  return (
    <Container>
      <HeaderCon>
        <IoHome />
        <IoIosArrowForward />
        <p>Categories</p>
        <IoIosArrowForward />
      </HeaderCon>
    </Container>
  );
};

export default Header;

const HeaderCon = styled.header`
  padding: 5px;
  display: flex;
  align-items: center;
  border-bottom: 2px solid gray;
`;
