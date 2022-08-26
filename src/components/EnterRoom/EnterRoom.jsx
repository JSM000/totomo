import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as fb_DB from "../../service/fb_DB";

import Header from "../Header/Header";
import HeaderBtn from "../Header/HeaderBtn";
import Room from "./Room";

const EnterRoom = () => {
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
          content={"<<뒤로가기"}
        ></HeaderBtn>
      </Header>
      {Object.keys(rooms).map((key) => {
        return <Room key={key} roomInfo={rooms[key]}></Room>;
      })}
    </>
  );
};

export default EnterRoom;
