import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as fb_DB from "../../service/fb_DB";

import Header from "../Header/Header";
import HeaderBtn from "../Header/HeaderBtn";
import Guests from "./Guests/Guests";
import ChatList from "./ChatList/ChatList";
import ChatInput from "./ChatInput";

const Room = (props) => {
  const navigate = useNavigate();
  const { roomID, profileID } = useSelector(({ roomInfo }) => roomInfo);
  const [roomInfo, setRoomInfo] = useState({});
  const [guestInfos, setGuestInfo] = useState({});
  const chatInputRef = useRef();
  const [chatInfos, setChatInfo] = useState({});

  const submitChat = async (e) => {
    e.preventDefault();
    if (chatInputRef.current.value !== "") {
      const chatData = {
        profileID,
        pImgURL: guestInfos[profileID]["pImgURL"],
        nickName: guestInfos[profileID]["nickName"],
        chat: chatInputRef.current.value,
      };
      await fb_DB.updateDBwithPK(`chats/${roomID}/`, chatData);
      chatInputRef.current.value = "";
    }
  };

  useEffect(() => {
    const stopSyncRooms = fb_DB.syncDB(`rooms/${roomID}`, (roomInfo) => {
      setRoomInfo(roomInfo);
    });
    const stopSyncGuests = fb_DB.syncDB(`guests/${roomID}`, (guestInfo) => {
      setGuestInfo(guestInfo);
    });
    const stopSyncChats = fb_DB.syncDB(`chats/${roomID}`, (chatInfo) => {
      setChatInfo(chatInfo);
    });
    return () => {
      fb_DB.removeDB(`guests/${roomID}/${profileID}`);
      stopSyncRooms;
      stopSyncGuests;
      stopSyncChats;
    };
  }, []);

  return (
    <>
      <Header>
        <HeaderBtn
          onClick={() => navigate("/")}
          content={"방 나가기"}
        ></HeaderBtn>
      </Header>
      <Guests
        roomInfo={roomInfo}
        guestInfos={guestInfos}
        profileID={profileID}
      />
      <ChatList chatInfos={chatInfos} roomID={roomID} profileID={profileID} />
      <ChatInput submitChat={submitChat} chatInputRef={chatInputRef} />
    </>
  );
};

export default Room;
