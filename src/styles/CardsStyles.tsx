import styled from "styled-components";

export const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  & h2 {
    text-align: right;
  }

  & h2 span {
    padding-left: 5px;
    color: #e6e6e6;
  }
`;

export const CardList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(312px, 1fr));
  gap: 20px;
`;

export const Card = styled.li`
  padding: 35px 20px 20px 20px;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 50px;
  height: 100%;

  border: 1px solid #e6e6e6;
  border-radius: 8px;

  &:hover {
    box-shadow: 0px 0px 12px 0px #20b52652;
    border: 1px solid #2c742f;
    transition: all 0.3s ease-out;
  }

  & > img {
    align-self: center;
    object-fit: cover;
    width: 60%;
  }

  &:hover > img {
    transform: scale(1.1);
  }

  & h6 {
    font-size: 14px;
    font-weight: 400;
    color: #4d4d4d;
  }

  &:hover h6 {
    color: #2c742f;
  }

  & p {
    font-size: 16px;
    font-weight: 500;
    color: #1a1a1a;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 27px;
`;
