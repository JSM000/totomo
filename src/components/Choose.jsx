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
  width: 500px;
  height: 300px;
  background: ${(props) => props.color};
  border: none;
  border-radius: 50px;
  font-size: 5rem;
  color: white;
  &:hover {
    opacity: 0.7;
    cursor: pointer;
    border: 15px solid black;
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
