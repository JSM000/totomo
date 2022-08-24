import React, { useRef } from "react";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setRoomID } from "../../modules/roomInfo";

const Title = styled.div`
  font-weight: bold;
  color: #6c6c6c;
  width: 100%;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  overflow-x: auto;
  white-space: nowrap;
  ::-webkit-scrollbar {
    height: 10px; /*스크롤바의 너비*/
  }
  ::-webkit-scrollbar-thumb {
    border: 1px solid black;
    background-color: var(--color-red); /*스크롤바의 색상*/
  }
  ::-webkit-scrollbar-track {
    border: 1px solid black;
    background-color: white; /*스크롤바 트랙 색상*/
  }
`;
const InputBox = styled.input`
  width: 100%;
  border-radius: 15px;
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
const Btn = styled.button`
  background-color: var(--color-red);
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  height: 3rem;
  width: 30%;
  border: none;
  border-radius: 20px;
  &:hover {
    opacity: 0.7;
    cursor: pointer;
    border: 5px solid black;
  }
`;

const PasswordModal = ({ show, onHide, roomInfo }) => {
  const passwordRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = () => {
    if (passwordRef.current.value === "") {
      return;
    } else if (passwordRef.current.value === roomInfo.password) {
      dispatch(setRoomID(roomInfo.postKey));
      navigate("/Room");
    } else {
      onHide();
      alert("비밀번호가 틀렸습니다!");
    }
  };
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Title>
          {roomInfo.schoolName}-{roomInfo.roomName}
        </Title>
      </Modal.Header>
      <Modal.Body>
        <InputBox
          ref={passwordRef}
          placeholder="비밀번호를 입력해 주세요"
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              onSubmit();
            }
          }}
          autoFocus
        ></InputBox>
      </Modal.Body>
      <Modal.Footer>
        <Btn onClick={onSubmit}>입장</Btn>
      </Modal.Footer>
      `
    </Modal>
  );
};

export default PasswordModal;
