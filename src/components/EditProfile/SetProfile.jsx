import React, { useRef } from "react";
import styled from "styled-components";

const FileInputButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
`;
const UserImg = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  padding: 5px;
  margin: 10px;
  border: 5px solid white;
  :hover {
    border: 5px solid var(--color-red);
  }
  :active {
    opacity: 0.7;
  }
`;
const InputBox = styled.input`
  width: 60%;
  height: 2rem;
  border: none;
  border-radius: 10px;
  margin-bottom: 20px;
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

const SetProfile = ({ handleProfileImg, nickName, onSubmit }) => {
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
    handleProfileImg(newfile);
  };

  return (
    <>
      <FileInputButton onClick={onFileInput}>
        <UserImg ref={previewRef} src="images/default_profile.png" />
      </FileInputButton>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={onFileChanged}
        style={{ display: "none" }}
      />
      <InputBox
        ref={nickName}
        type="text"
        placeholder="닉네임"
        onKeyPress={(e) => {
          e.key === "Enter" && onSubmit();
        }}
      />
    </>
  );
};

export default SetProfile;
