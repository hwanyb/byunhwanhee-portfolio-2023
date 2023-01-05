import { Emoji } from "emoji-picker-react";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../modules";
import { InfoItem, InfoLink, InfoText, Label } from "./About";
import Comment from "./Contact/Comment";

const Base = styled.div``;
const CommentText = styled.h2``;

export default function Contact() {
  const isDarkMode = useSelector(
    (state: RootState) => state.modeReducer.isDarkMode,
  );
  return (
    <Base>
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
      <CommentText>
        포트폴리오 · 프로젝트 등에 대한 피드백을 작성해주시면 감사하겠습니다.{" "}
        <Emoji unified="1f647" size={20} />
      </CommentText>
      <Comment />
    </Base>
  );
}
