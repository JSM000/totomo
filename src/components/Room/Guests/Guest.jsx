import React from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const UserImg = styled.img`
  width: 50px;
  min-width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 10px;
  margin-bottom: 0;
  border: 2px solid var(--color-green);
  @media (max-width: 768px) {
    margin: 5px;
    margin-bottom: 0;
    width: 30px;
    min-width: 30px;
    height: 30px;
  }
  ${(props) =>
    props.isMyself &&
    css`
      border: 2px solid var(--color-red);
    `}
`;
const NickName = styled.div`
  text-align: center;
  width: 65px;
  color: white;
  background-color: var(--color-green);
  white-space: nowrap;
  overflow-x: auto;
  border-radius: 10px;
  font-size: 1rem;
  ::-webkit-scrollbar {
    height: 0px; /*스크롤바의 너비*/
  }
  @media (max-width: 768px) {
    margin: 0px 2px;
    width: 45px;
    border-radius: 5px;
    font-size: 0.5rem;
  }
  ${(props) =>
    props.isMyself &&
    css`
      background-color: var(--color-red);
    `}
`;

const Guest = ({ guestInfo, isMyself }) => {
  return (
    <Container>
      <UserImg
        isMyself={isMyself}
        src={
          guestInfo.pImgURL ? guestInfo.pImgURL : "images/default_profile.png"
        }
      ></UserImg>
      <NickName isMyself={isMyself}>{guestInfo.nickName}</NickName>
    </Container>
  );
};

export default Guest;
