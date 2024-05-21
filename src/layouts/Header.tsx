import React from "react";
import { IoHome } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { Container } from "../styles/ContainerStyles";
import { useNavigate } from "react-router-dom";
import { HeaderCon, Titles } from "../styles/HeaderStyles";

const Header = (props: any) => {
  const productGate = useNavigate();
  const { selectedCategory, title, category } = props;
  console.log("title => ", title, "category => ", category);

  const handleBackToProducts = () => {
    productGate("/");
  };

  return (
    <Container>
      <HeaderCon>
        <Titles>
          <li>
            <p>
              <IoHome
                onClick={handleBackToProducts}
                style={{ cursor: "pointer" }}
              />
            </p>
          </li>
          <li>
            <p>
              <IoIosArrowForward />
            </p>
          </li>
          <li>
            <p>Categories</p>
          </li>
        </Titles>
        {selectedCategory ? (
          <Titles>
            <li>
              <p>
                <IoIosArrowForward />
              </p>
            </li>
            <li>
              <span>{selectedCategory}</span>
            </li>
          </Titles>
        ) : (
          <Titles>
            <li>
              <p>
                <IoIosArrowForward />
              </p>
            </li>
            <li>
              <p>{category}</p>
            </li>
            <li>
              <p>
                <IoIosArrowForward />
              </p>
            </li>
            <li>
              <span>{title}</span>
            </li>
          </Titles>
        )}
      </HeaderCon>
    </Container>
  );
};

export default Header;
