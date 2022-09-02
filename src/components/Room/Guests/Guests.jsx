import React, { useState } from "react";
import styled, { css } from "styled-components";
import { BsChevronDoubleDown, BsChevronDoubleUp } from "react-icons/bs";
import Guest from "./Guest";

const Container = styled.div`
  z-index: 90;
  top: -94px;
  position: fixed;
  padding-top: 5rem;
  transition: all ease 0.5s;
  ${(props) =>
    props.open &&
    css`
      top: 0;
    `}
  @media (max-width: 768px) {
    padding-top: 2.5rem;
    top: -55px;
    ${(props) =>
      props.open &&
      css`
        top: 0;
      `}
  }
`;
const HideBtn = styled.button`
  padding: 0px 30px;
  display: flex;
  justify-content: space-between;
  color: black;
  font-weight: bold;
  width: 100vw;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: var(--color-red);
  font-size: 2rem;
  border: none;
  transition: border-radius ease 0.5s;
  ${(props) =>
    !props.open &&
    css`
      border-radius: 20px;
    `}
  @media (max-width: 768px) {
    font-size: 1rem;

    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    ${(props) =>
      !props.open &&
      css`
        border-radius: 10px;
      `}
  }
`;
const GuestContainer = styled.div`
  display: flex;
  padding: 10px;
  padding-top: 0;
  margin: auto;
  width: 100vw;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: grey;
  overflow-x: auto;
  ::-webkit-scrollbar {
    height: 10px; /*스크롤바의 너비*/
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: var(--color-green); /*스크롤바의 색상*/
  }
  ::-webkit-scrollbar-track {
    background-color: white; /*스크롤바 트랙 색상*/
  }
  transition: all ease 0.5s;
  ${(props) =>
    !props.open &&
    css`
      opacity: 0;
    `}
  @media (max-width: 768px) {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 5px;
    padding-top: 0;
  }
`;
const SchoolImg = styled.img`
  width: 40px;
  min-width: 40px;
  height: 40px;
  border-radius: 25%;
  padding: 2px;
  margin-right: 10px;
  border: 2px solid white;
  @media (max-width: 768px) {
    width: 30px;
    min-width: 30px;
    height: 30px;
    margin-right: 5px;
  }
`;
const Title = styled.div`
  color: white;
  display: flex;
  align-items: center;
`;
const Icon = styled.div`
  position: relative;
  color: black;
  @media (max-width: 768px) {
    height: 30px;
  }
`;
const Guests = ({ guestInfos, roomInfo, profileID }) => {
  const [open, setOpen] = useState(false);
  return (
    <Container open={open}>
      <GuestContainer open={open}>
        {Object.keys(guestInfos)
          .reverse()
          .map((key) => {
            return (
              <Guest
                key={key}
                guestInfo={guestInfos[key]}
                isMyself={key === profileID}
              ></Guest>
            );
          })}
      </GuestContainer>
      <HideBtn open={open} onClick={() => setOpen(!open)}>
        <Title>
          <SchoolImg
            src={
              roomInfo.sImgURL ? roomInfo.sImgURL : "images/default_profile.png"
            }
          />
          {roomInfo.schoolName} - {roomInfo.roomName}
        </Title>
        <Icon> {open ? <BsChevronDoubleUp /> : <BsChevronDoubleDown />}</Icon>
        <Title>접속자 수 : {Object.keys(guestInfos).length}</Title>
      </HideBtn>
    </Container>
  );
};
export default Guests;
