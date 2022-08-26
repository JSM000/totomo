import React from "react";
import { useState } from "react";
import styled from "styled-components";
import PasswordModal from "./PasswordModal";

const RoomContainer = styled.div`
  background: var(--color-green);
  margin: auto;
  margin-top: 50px;
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 0 5px black inset;
    background-color: var(--color-red);
  }
`;
const Column = styled.div`
  background-color: white;
  width: 70px;
  border-radius: 15px;
  border-bottom-right-radius: 0;
  text-align: center;
  line-height: 55px;
  color: var(--color-green);
  font-size: 1.5rem;
  font-weight: bold;
`;
const Title = styled.div`
  font-weight: bold;
  color: white;
  width: 100%;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  overflow-x: scroll;
  white-space: nowrap;
  ::-webkit-scrollbar {
    height: 7.5px; /*스크롤바의 너비*/
  }
  ::-webkit-scrollbar-thumb {
    background-color: black; /*스크롤바의 색상*/
  }
  ::-webkit-scrollbar-track {
    background-color: white; /*스크롤바 트랙 색상*/
  }
`;
const RawContainer = styled.div`
  width: 90%;
  display: flex;
`;
const SchoolImg = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 25%;
  padding: 3px;
  margin: 20px 0px;
  margin-right: 20px;
  border: 3px solid white;
`;
const ColumnContainer = styled.div`
  width: ${(props) => props.asd};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const Room = ({ roomInfo }) => {
  const [modalOn, setModalOn] = useState(false);
  const sImgURL = roomInfo.sImgURL
    ? roomInfo.sImgURL
    : "images/default_school.png";
  return (
    <>
      <PasswordModal
        show={modalOn}
        onHide={() => setModalOn(false)}
        roomInfo={roomInfo}
      ></PasswordModal>
      <RoomContainer
        onClick={() => {
          setModalOn(true);
        }}
      >
        <RawContainer>
          <SchoolImg src={sImgURL}></SchoolImg>
          <ColumnContainer asd="70px">
            <Column>학교</Column>
            <Column>반</Column>
          </ColumnContainer>
          <ColumnContainer asd="300px">
            <Title>{roomInfo.schoolName}</Title>
            <Title>{roomInfo.roomName}</Title>
          </ColumnContainer>
        </RawContainer>
      </RoomContainer>
    </>
  );
};

export default Room;
