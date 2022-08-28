import React, { Children } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Head = styled.header`
  position: fixed;
  display: flex;
  top: 0;
  justify-content: space-around;
  background-color: grey;
  width: 100vw;
  height: 5rem;
  border-radius: 20px;
  z-index: 99;
  @media (max-width: 768px) {
    border-radius: 10px;

    height: 2.5rem;
  }
`;

const Header = ({ children }) => {
  return <Head>{children}</Head>;
};

export default Header;
