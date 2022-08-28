import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  background-color: var(--color-red);
  color: white;
  font-size: 2rem;
  font-weight: bold;
  height: 3.5rem;
  width: 100%;
  margin: auto;
  margin-left: 10px;
  margin-right: 10px;
  border: none;
  border-radius: 20px;
  &:hover {
    opacity: 0.7;
    cursor: pointer;
    border: 5px solid black;
  }
  @media (max-width: 768px) {
    margin-left: 5px;
    margin-right: 5px;
    font-size: 1rem;
    height: 2rem;
    border-radius: 10px;
  }
`;

const HeaderBtn = ({ onClick, content }) => {
  return <Btn onClick={onClick}>{content}</Btn>;
};

export default HeaderBtn;
