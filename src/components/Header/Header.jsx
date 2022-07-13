import React, { Children } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Head = styled.header`
  display: flex;
  justify-content: space-around;
  background-color: grey;
  width: 100%;
  height: 5rem;
  border-radius: 20px;
`;

const Header = ({ children }) => {
  return <Head>{children}</Head>;
};

export default Header;
