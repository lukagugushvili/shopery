import styled from "styled-components";

export const LoaderBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 92vh;
  margin: 0;
  background-color: #f0f0f0;
`;

export const LoaderCon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border: 16px solid #f3f3f3;
  border-top: 16px solid #28a745;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
