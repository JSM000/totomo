import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ReactLoading from "react-loading";
import { useDispatch } from "react-redux";

import { setRoomID } from "../../modules/roomInfo";
import SetProfile from "./SetProfile";
import SetRoom from "./SetRoom";
import Header from "../Header/Header";
import HeaderBtn from "../Header/HeaderBtn";
import * as fb_DB from "../../service/fb_DB";
import * as fb_storage from "../../service/fb_storage";

const Container = styled.div`
  padding-top: 80px;
`;
const SetContainer = styled.div`
  background: ${(props) => props.backColor};
  margin: auto;
  margin-top: 50px;
  width: 95vw;
  max-width: 500px;
  min-height: 265px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
`;
const Title = styled.div`
  font-weight: bold;
  color: white;
  width: 90%;
  font-size: 1.5rem;
  margin-top: 15px;
  border-bottom: 5px solid white;
  display: flex;
  justify-content: center;
`;
const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  background: black;
  position: absolute;
  top: 0;
  opacity: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MakeRoom = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [profileImg, setProfileImg] = useState(null);
  const [schoolImg, setSchoolImg] = useState(null);
  const nickName = useRef();
  const schoolName = useRef();
  const roomName = useRef();
  const password = useRef();
  const [loading, setloading] = useState(false);

  const handleProfileImg = (file) => {
    setProfileImg(file);
  };
  const handleSchoolImg = (file) => {
    setSchoolImg(file);
  };
  const saveImg = async (ref, img) => {
    return img ? await fb_storage.putStorage(ref, img) : "";
  };
  const makeRoom = async () => {
    if (!nickName.current.value) {
      alert("닉네임을 입력하세요.");
      return;
    }
    if (!schoolName.current.value) {
      alert("학교 이름을 입력하세요.");
      return;
    }
    if (!roomName.current.value) {
      alert("방 이름을 입력하세요.");
      return;
    }
    if (!password.current.value) {
      alert("비밀번호를 입력하세요.");
      return;
    }
    setloading(true);
    try {
      const pImgURL = await saveImg("profileImgs", profileImg);
      const sImgURL = await saveImg("schoolImgs", schoolImg);
      const profileData = {
        pImgURL,
        nickName: nickName.current.value,
      };
      const roomData = {
        sImgURL,
        schoolName: schoolName.current.value,
        roomName: roomName.current.value,
        password: password.current.value,
      };

      const roomId = await fb_DB.updateDBwithPK("rooms", roomData);
      fb_DB.updateDBwithPK(`guests/${roomId}`, profileData);
      dispatch(setRoomID(roomId));
      navigate("/room");
    } catch (e) {
      throw e;
    }
  };

  return (
    <>
      <Header>
        <HeaderBtn
          onClick={() => navigate("/")}
          content={"<<뒤로가기"}
        ></HeaderBtn>
        <HeaderBtn
          onClick={() => makeRoom()}
          content={"방 만들기>>"}
        ></HeaderBtn>
      </Header>
      <Container>
        <SetContainer backColor="var(--color-green)">
          <Title>나의 프로필 설정</Title>
          <SetProfile
            nickName={nickName}
            handleProfileImg={handleProfileImg}
            onSubmit={makeRoom}
          ></SetProfile>
        </SetContainer>
        <SetContainer backColor="var(--color-green)">
          <Title>방 설정</Title>
          <SetRoom
            schoolName={schoolName}
            roomName={roomName}
            password={password}
            handleSchoolImg={handleSchoolImg}
            onSubmit={makeRoom}
          ></SetRoom>
        </SetContainer>
      </Container>
      {loading && (
        <LoadingContainer>
          <ReactLoading
            type="spin"
            color="white"
            width="200px"
            height="200px"
          />
        </LoadingContainer>
      )}
    </>
  );
};

export default MakeRoom;
