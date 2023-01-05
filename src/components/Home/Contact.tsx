import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Emoji } from "emoji-picker-react";

import { RootState } from "../../modules";
import { InfoItem, InfoLink, InfoText, Label } from "./About";
import Comment from "./Contact/Comment";

const Base = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const ContancList = styled.div`
  height: 100px;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
`;
const CommentText = styled.h2`
  font-size: ${(props) => props.theme.fontSize.lg};
  text-align: center;
  & img {
    position: relative;
    top: 3px;
  }
`;

export default function Contact() {
  const isDarkMode = useSelector(
    (state: RootState) => state.modeReducer.isDarkMode,
  );
  return (
    <Base>
      <ContancList>
        <InfoItem>
          <Label isDarkMode={isDarkMode}>Phone</Label>
          <InfoText>+82 010·3050·3337</InfoText>
        </InfoItem>
        <InfoItem>
          <Label isDarkMode={isDarkMode}>Email</Label>
          <InfoText>mnn9502@naver.com</InfoText>
        </InfoItem>
        <InfoItem>
          <Label isDarkMode={isDarkMode}>Kakao</Label>
          <InfoLink isDarkMode={isDarkMode}>오픈채팅방 링크</InfoLink>
        </InfoItem>
      </ContancList>
      <CommentText>
        포트폴리오 · 프로젝트 등에 대한 피드백을 작성해주시면 감사하겠습니다.{" "}
        <Emoji unified="1f647" size={25} />
      </CommentText>
      <Comment />
    </Base>
  );
}
