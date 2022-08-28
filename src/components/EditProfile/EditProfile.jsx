import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ReactLoading from "react-loading";
import { useDispatch, useSelector } from "react-redux";

import * as fb_DB from "../../service/fb_DB";
import * as fb_storage from "../../service/fb_storage";
import Header from "../Header/Header";
import HeaderBtn from "../Header/HeaderBtn";
import SetProfile from "./SetProfile";
import { setProfileID } from "../../modules/roomInfo";

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
const EditProfile = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const nickName = useRef();
  const [profileImg, setProfileImg] = useState();
  const [loading, setloading] = useState(false);
  const roomID = useSelector(({ roomInfo }) => roomInfo.roomID);
  const handleProfileImg = (file) => {
    setProfileImg(file);
  };

  const saveImg = async (ref, img) => {
    return img ? await fb_storage.putStorage(ref, img) : "";
  };

  const enterRoom = async () => {
    if (!nickName.current.value) {
      alert("닉네임을 입력하세요.");
      return;
    }
    setloading(true);
    try {
      const pImgURL = await saveImg("profileImgs", profileImg);
      const profileData = {
        pImgURL,
        nickName: nickName.current.value,
      };
      const profileID = await fb_DB.updateDBwithPK(
        `guests/${roomID}`,
        profileData
      );
      dispatch(setProfileID(profileID));
      navigate("/room");
    } catch (e) {
      throw e;
    }
  };

  return (
    <>
      <Header>
        <HeaderBtn
          onClick={() => navigate("/enterRoom")}
          content={"<<뒤로가기"}
        ></HeaderBtn>
        <HeaderBtn
          onClick={() => enterRoom()}
          content={"입장하기>>"}
        ></HeaderBtn>
      </Header>
      <Container>
        <SetContainer backColor="var(--color-green)">
          <Title>나의 프로필 설정</Title>
          <SetProfile
            nickName={nickName}
            handleProfileImg={handleProfileImg}
            onSubmit={enterRoom}
          ></SetProfile>
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

export default EditProfile;
