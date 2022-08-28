import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as fb_DB from "../../service/fb_DB";

import Header from "../Header/Header";
import HeaderBtn from "../Header/HeaderBtn";

const Room = (props) => {
  const navigate = useNavigate();
  const { roomID, profileID } = useSelector(({ roomInfo }) => roomInfo);
  const [roomInfo, setRoomInfo] = useState({});
  const [guestInfo, setGuestInfo] = useState({});
  console.log(profileID);
  const stopSync = async (ref, setInfo) => {
    return await fb_DB.syncDB(ref, (Info) => {
      setInfo(Info);
    });
  };
  useEffect(() => {
    console.log(`첫 렌더링`);
    const stopSyncRooms = stopSync(`rooms/${roomID}`, setRoomInfo);
    const stopSyncGuests = stopSync(`guests/${roomID}`, setGuestInfo);
    return () => {
      //fb_DB.removeDB();
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
      {JSON.stringify(roomInfo)}
      <br></br>
      {JSON.stringify(guestInfo)}
    </>
  );
};

export default Room;
