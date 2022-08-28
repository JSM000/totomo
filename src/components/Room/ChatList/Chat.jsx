import React from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
  display: flex;
  margin-right: 2rem;
  margin-top: 10px;
  align-items: flex-start;
  ${(props) =>
    props.isMyself &&
    css`
      justify-content: end;
    `}
`;
const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 10px;
`;
const UserImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  padding: 2px;
  border: 2px solid var(--color-blue);
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
  background-color: var(--color-blue);
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
const ChatText = styled.div`
  background-color: white;
  padding: 0 10px;
  max-width: 40rem;
  border-radius: 20px;
  border: 2px solid var(--color-blue);

  ${(props) =>
    props.isMyself &&
    css`
      border: 2px solid var(--color-red);
    `}
`;

const Chat = ({ chatInfo, isMyself }) => {
  console.log(isMyself);
  return (
    <Container isMyself={isMyself}>
      {isMyself && <ChatText isMyself={isMyself}>{chatInfo.chat}</ChatText>}
      <ProfileContainer>
        <UserImg
          isMyself={isMyself}
          src={
            chatInfo.pImgURL ? chatInfo.pImgURL : "images/default_profile.png"
          }
        />
        <NickName isMyself={isMyself}>{chatInfo.nickName}</NickName>
      </ProfileContainer>
      {!isMyself && <ChatText isMyself={isMyself}>{chatInfo.chat}</ChatText>}
    </Container>
  );
};

export default Chat;
