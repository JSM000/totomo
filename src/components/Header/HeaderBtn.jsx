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
`;

const HeaderBtn = ({ onClick, content }) => {
  return <Btn onClick={onClick}>{content}</Btn>;
};

export default HeaderBtn;
