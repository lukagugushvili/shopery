import styled from "styled-components";

export const AboutBox = styled.div`
  margin-top: 50px;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AboutCard = styled.div`
  padding: 20px;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  box-shadow: 0px 0px 12px 0px #20b52652;
  border-radius: 20px;
  border: 1px solid #2c742f;
`;

export const ImgContent = styled.div`
  flex: 1;
  text-align: center;

  & img {
    width: 50%;
  }
`;

export const AboutProduct = styled.div`
  flex: 1;

  & h1 {
    font-size: 36px;
    font-weight: 600;
  }

  & p {
    font-size: 24px;
    line-height: 70px;
    color: #2c742f;
    border-bottom: 1px solid #e6e6e6;
  }

  & span {
    display: block;
    padding: 25px 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    color: #808080;
  }

  & button {
    cursor: pointer;
    margin: 25px 0;
    padding: 16px 40px;
    width: 70%;
    display: block;
    font-size: 16px;
    font-weight: 600;
    border: none;
    outline: none;
    border-radius: 43px;
    color: #ffffff;
    background-color: #00b207;
  }

  & h3 {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 0;
    font-size: 14px;
    color: #1a1a1a;

    & span {
      color: #808080;
    }
  }
`;

export const Line = styled.div`
  border-bottom: 1px solid #e6e6e6;
`;

export const ErrMsg = styled.h4`
  padding: 0 0 20px 0;
  font-size: 16px;
  font-weight: 400;
  color: red;
`;
