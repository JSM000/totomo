import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as fb_DB from "../../service/fb_DB";

import Header from "../Header/Header";
import HeaderBtn from "../Header/HeaderBtn";
import Room from "./Room";

const Head = styled.header`
  display: flex;
  justify-content: space-around;
  background-color: grey;
  width: 100%;
  height: 5rem;
  border-radius: 20px;
  margin: 20px 0px;
`;

const EnterRoom = (props) => {
  const navigate = useNavigate();
  const [rooms, setRooms] = useState({});
  useEffect(() => {
    const stopSync = fb_DB.syncDB(`rooms`, (rooms) => {
      setRooms(rooms);
    });
    return () => stopSync;
  }, [fb_DB]);
  return (
    <>
      <Header>
        <HeaderBtn
          onClick={() => navigate("/")}
          content={"뒤로가기"}
        ></HeaderBtn>
      </Header>
      {Object.keys(rooms).map((key) => {
        return <Room key={key} roomInfo={rooms[key]}></Room>;
      })}
    </>
  );
};

export default EnterRoom;
