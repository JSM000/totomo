import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as fb_DB from "../../service/fb_DB";

import Header from "../Header/Header";
import HeaderBtn from "../Header/HeaderBtn";

const Room = (props) => {
  const navigate = useNavigate();
  const roomID = useSelector(({ roomInfo }) => roomInfo.roomID);
  const [roomInfo, setRoomInfo] = useState({});
  const [guestInfo, setGuestInfo] = useState({});

  useEffect(() => {
    console.log(`첫 렌더링`);
    const stopSyncRooms = fb_DB.syncDB(`rooms/${roomID}`, (roomInfo) => {
      setRoomInfo(roomInfo);
    });
    const stopSyncGuests = fb_DB.syncDB(`guests/${roomID}`, (guestInfo) => {
      setGuestInfo(guestInfo);
    });
    return () => {
      stopSyncRooms;
      stopSyncGuests;
      console.log(`${roomID}방나감`);
    };
  }, []);

  console.log(roomInfo);
  console.log(guestInfo);
  return (
    <>
      <Header>
        <HeaderBtn
          onClick={() => navigate("/")}
          content={"방 나가기"}
        ></HeaderBtn>
      </Header>
      {Object.keys(guestInfo).map((key) => {
        return <span key={key}>{guestInfo[`${key}`]["nickName"]} / </span>;
      })}
      {/* {JSON.stringify(roomInfo)}
      <br></br>
      {JSON.stringify(guestInfo)} */}
      {/* {Object.keys(rooms).map((key) => {
        return <Room key={key} roomInfo={rooms[key]}></Room>;
      })} */}
    </>
  );
};

export default Room;
