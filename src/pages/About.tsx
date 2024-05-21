import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Data } from "../types/DataType";
import { ErrorCon } from "../styles/ErrorMsgStyles";
import { LoaderBox } from "../styles/LoaderStyles";
import Loader from "../utils/Loader";
import {
  AboutBox,
  AboutCard,
  AboutProduct,
  ErrMsg,
  ImgContent,
  Line,
} from "../styles/AboutPageStyles";
import { Container } from "../styles/ContainerStyles";
import { IoHome } from "react-icons/io5";

const About = () => {
  const { id } = useParams();

  const [product, setProduct] = useState<Data | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setProduct(data);
      } catch (error: any) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (isLoading) {
    return (
      <LoaderBox>
        <Loader />
      </LoaderBox>
    );
  }

  if (error) {
    return <ErrorCon>Error: {error}</ErrorCon>;
  }

  return (
    <Container>
      <AboutBox>
        {product && (
          <AboutCard>
            <ImgContent>
              <img src={product.image} alt={product.title} />
              <IoHome />
            </ImgContent>
            <AboutProduct>
              <h1>{product.title}</h1>
              <p>${product.price}</p>
              <span>{product.description}</span>
              <Line></Line>
              <button>Add to Cart</button>
              <ErrMsg>The shopping cart is currently not working!</ErrMsg>
              <Line></Line>
              <h3>
                Category: <span>{product.category}</span>
              </h3>
            </AboutProduct>
          </AboutCard>
        )}
      </AboutBox>
    </Container>
  );
};

export default About;
