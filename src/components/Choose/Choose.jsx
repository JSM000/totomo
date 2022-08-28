import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Main = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ChooseBtn = styled.button`
  margin-top: 50px;
  width: 90vw;
  max-width: 600px;
  background: ${(props) => props.color};
  border: none;
  border-radius: 50px;
  font-size: 7rem;
  color: white;
  &:hover {
    opacity: 0.7;
    cursor: pointer;
    border: 15px solid black;
  }
  @media (max-width: 1023px) {
    font-size: 5rem;
  }
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Choose = (props) => {
  const navigate = useNavigate();
  return (
    <Main>
      <ChooseBtn
        color="var(--color-green)"
        onClick={() => navigate("/makeRoom")}
      >
        방 만들기
      </ChooseBtn>
      <ChooseBtn
        color="var(--color-red)"
        onClick={() => navigate("/enterRoom")}
      >
        입장하기
      </ChooseBtn>
    </Main>
  );
};

export default Choose;
