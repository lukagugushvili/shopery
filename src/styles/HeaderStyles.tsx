import styled from "styled-components";

export const HeaderCon = styled.header`
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom: 2px solid gray;
`;

export const Titles = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  & p {
    font-size: 16px;
    color: #999999;
  }

  & span {
    color: #00b207;
  }
`;
