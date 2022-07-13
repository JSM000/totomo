import React, { useRef, useState } from "react";
import styled from "styled-components";

const RawContainer = styled.div`
  width: 90%;
  display: flex;
`;
const FileInputButton = styled.button`
  padding: 0;
  cursor: pointer;
  background: none;
  border: none;
`;
const SchoolImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  padding: 5px;
  margin: 10px 0px;
  border: 5px solid white;
  :hover {
    border: 5px solid var(--color-red);
  }
  :active {
    opacity: 0.7;
  }
`;
const ColumnContainer = styled.div`
  width: 100%;
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

const SetRoom = ({ handleSchoolImg, schoolName, roomName, password }) => {
  const fileInputRef = useRef();
  const previewRef = useRef();

  const onFileInput = (e) => {
    e.preventDefault();
    fileInputRef.current.click();
  };
  const onFileChanged = (e) => {
    const reader = new FileReader();
    const newfile = e.target.files[0];
    reader.readAsDataURL(newfile);
    reader.onload = (e) => {
      previewRef.current.src = e.target.result;
    };
    handleSchoolImg(newfile);
  };
  return (
    <>
      <RawContainer>
        <FileInputButton onClick={onFileInput}>
          <SchoolImg
            ref={previewRef}
            src="images/default_school.png"
          ></SchoolImg>
        </FileInputButton>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={onFileChanged}
          style={{ display: "none" }}
        />
        <ColumnContainer>
          <InputBox ref={schoolName} placeholder="학교 이름"></InputBox>
          <InputBox ref={roomName} placeholder="방 이름"></InputBox>
          <InputBox ref={password} placeholder="비밀번호"></InputBox>
        </ColumnContainer>
      </RawContainer>
    </>
  );
};

export default SetRoom;
