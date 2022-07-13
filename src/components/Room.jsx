import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as fb_DB from "../service/fb_DB";

import Header from "./Header/Header";
import HeaderBtn from "./Header/HeaderBtn";

const Room = (props) => {
  const navigate = useNavigate();
  const roomID = useSelector(({ roomInfo }) => roomInfo.roomID);
  // const [hostInfo, set =
  const [roomInfo, setRoomInfo] = useState({});
  // const hostInfo = roomInfo["host"];
  // const
  useEffect(() => {
    const stopSync = fb_DB.syncDB(`rooms/${roomID}`, (roomInfo) => {
      setRoomInfo(roomInfo);
    });
    return () => stopSync;
  }, [roomID, fb_DB]);
  return (
    <>
      <Header>
        <HeaderBtn
          onClick={() => navigate("/")}
          content={"방 나가기"}
        ></HeaderBtn>
      </Header>
      {/* {roomInfoArray.map((asd) => {})} */}
      {JSON.stringify(roomInfo)}
    </>
  );
};

export default Room;
