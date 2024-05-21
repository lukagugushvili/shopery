import React from "react";
import { IoHome } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";
import { Container } from "../styles/ContainerStyles";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const productGate = useNavigate();

  const handleBackToProducts = () => {
    productGate("/");
  };

  return (
    <Container>
      <HeaderCon>
        <IoHome onClick={handleBackToProducts} style={{ cursor: "pointer" }} />
        <IoIosArrowForward />
        <p>Categories</p>
        <IoIosArrowForward />
      </HeaderCon>
    </Container>
  );
};

export default Header;

const HeaderCon = styled.header`
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  border-bottom: 2px solid gray;
`;
