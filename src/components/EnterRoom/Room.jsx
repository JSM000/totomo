import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { setRoomID } from "../../modules/roomInfo";

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
const Title = styled.div`
  font-weight: bold;
  color: white;
  width: 90%;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  overflow-x: scroll;
  white-space: nowrap;
  ::-webkit-scrollbar {
    height: 5px; /*스크롤바의 너비*/
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
  width: 150px;
  height: 150px;
  border-radius: 50%;
  padding: 5px;
  margin: 10px 0px;
  border: 5px solid white;
`;
const ColumnContainer = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
const InputBox = styled.input`
  width: 90%;
  height: 2rem;
  border: none;
  border-radius: 10px;
  font-size: 1.5rem;
  text-align: center;
  ::placeholder,
  ::-webkit-input-placeholder {
    font-weight: bold;
    text-align: center;
  }
  :-ms-input-placeholder {
    font-weight: bold;
    text-align: center;
  }
`;

const Room = ({ roomInfo }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sImgURL = roomInfo.sImgURL
    ? roomInfo.sImgURL
    : "images/default_school.png";
  return (
    <RoomContainer
      onClick={() => {
        dispatch(setRoomID(roomInfo.postKey));
        navigate("/Room");
      }}
    >
      <RawContainer>
        <SchoolImg src={sImgURL}></SchoolImg>
        <ColumnContainer>
          <Title>
            {roomInfo.schoolName}-{roomInfo.roomName}
          </Title>
          <InputBox placeholder="비밀번호를 입력하세요."></InputBox>
        </ColumnContainer>
      </RawContainer>
    </RoomContainer>
  );
};

export default Room;
