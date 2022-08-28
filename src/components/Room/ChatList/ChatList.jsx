import React, { useState, useEffect, useRef } from "react";
import Chat from "./Chat";
import styled from "styled-components";
import * as _ from "lodash";

const Container = styled.div`
  padding-top: 8.5rem;
  padding-bottom: 3rem;
  padding-left: 2rem;
`;

const ChatList = ({ roomID, chatInfos, profileID }) => {
  const scrollRef = useRef();
  const boxRef = useRef(null);
  const [scrollState, setScrollState] = useState(true);

  const scrollEvent = _.debounce(() => {
    console.log("scroll");
    const scrollTop = boxRef.current.scrollTop;
    const clientHeight = boxRef.current.clientHeight;
    const scrollHeight = boxRef.current.scrollHeight;
    setScrollState(
      scrollTop + clientHeight >= scrollHeight - 100 ? true : false
    );
  }, 100);
  const scroll = React.useCallback(scrollEvent, []);
  useEffect(() => {
    scrollToBottom();
  }, [chatInfos]);
  useEffect(() => {
    boxRef.current.addEventListener("scroll", scroll);
  });

  const scrollToBottom = () => {
    if (scrollState) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Container ref={boxRef}>
      {Object.keys(chatInfos).map((key) => {
        const isMyself = chatInfos[key]["profileID"] === profileID;
        return <Chat key={key} chatInfo={chatInfos[key]} isMyself={isMyself} />;
      })}
      <div ref={scrollRef}></div>
    </Container>
  );
};

export default ChatList;
