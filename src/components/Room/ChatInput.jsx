import React from "react";
import styled from "styled-components";
import { IoSend } from "react-icons/io5";

const Container = styled.form`
  width: 100vw;
  height: 3rem;
  position: fixed;
  bottom: 0;
  background-color: grey;
  display: flex;
  align-items: center;
  border-radius: 20px;
`;
const Input = styled.input`
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border: none;
  margin-left: 10px;
  width: 100%;
`;
const SumbmitBtn = styled.button`
  background-color: var(--color-red);
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border: none;
  margin-right: 10px;
  width: 80px;
  &:hover {
    opacity: 0.7;
    border: 1px solid black;
  }
`;
const ChatInput = ({ chatInputRef, submitChat }) => {
  return (
    <Container>
      <Input ref={chatInputRef} />
      <SumbmitBtn onClick={(e) => submitChat(e)}>
        <IoSend></IoSend>
      </SumbmitBtn>
    </Container>
  );
};

export default ChatInput;
