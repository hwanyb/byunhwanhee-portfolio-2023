import EmojiPicker, { Emoji, EmojiClickData } from "emoji-picker-react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled, { css } from "styled-components";
import { dbService } from "../../../firebase";
import { RootState } from "../../../modules";

const Base = styled.div`
  width: 800px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
const CommentInputWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const CommentEmojiBtn = styled.button<{
  isDarkMode: boolean;
  isEmoji: boolean;
}>`
  width: 30px;
  height: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 0;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  margin-right: 20px;
  ${(props) =>
    props.isDarkMode
      ? css`
          background-color: ${props.theme.colorLight.background};
        `
      : css`
          background-color: ${props.theme.colorDark.background};
        `}
  transition: all 0.2s ease-in-out;
  &:hover {
    ${(props) =>
      props.isEmoji
        ? css`
            & img {
              transform: scale(1.1);
              transition: all 0.2s ease-in-out;
            }
          `
        : css`
            transform: rotate(90deg);
          `}
  }
`;
const EmojiPickerWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 80px;
  left: 50%;
  transform: translateX(-25%);
`;
const AddIcon = styled.div<{ isDarkMode: boolean }>`
  &::after {
    position: absolute;
    content: "";
    width: 1px;
    height: 20px;
    background-color: ${(props) =>
      props.isDarkMode
        ? props.theme.colorDark.background
        : props.theme.colorLight.background};
    display: block;
  }
  &::before {
    position: absolute;
    content: "";
    width: 1px;
    height: 20px;
    background-color: ${(props) =>
      props.isDarkMode
        ? props.theme.colorDark.background
        : props.theme.colorLight.background};
    display: block;
    transform: rotate(90deg);
  }
`;
const CommentTextInput = styled.textarea<{ isDarkMode: boolean }>`
  font-family: ${(props) => props.theme.fontFamily.notoSans};
  font-weight: 300;
  width: 640px;
  height: 30px;
  padding: 5px 20px;
  border-radius: 0;
  background-color: transparent;
  transition: all 0.2s ease-in-out;
  &::-webkit-scrollbar {
    display: none;
  }
  ${(props) =>
    props.isDarkMode
      ? css`
          border: 1px solid ${props.theme.colorDark.fontPrimary};
          color: ${props.theme.colorDark.fontPrimary};

          &:focus {
            background-color: ${props.theme.colorDark.fontPrimary}1E;
          }
        `
      : css`
          border: 1px solid ${props.theme.colorLight.fontPrimary};
          color: ${props.theme.colorLight.fontPrimary};

          &:focus {
            background-color: ${props.theme.colorLight.fontPrimary}1E;
          }
        `}
  &:focus {
    border-radius: 0;
  }
`;
const CommentSubmitBtn = styled.button<{ isDarkMode: boolean }>`
  font-family: ${(props) => props.theme.fontFamily.rozha};
  border: none;
  margin-left: 20px;
  border-radius: 50%;
  transition: all 0.2s ease-in-out;

  &:hover {
    ${(props) =>
      props.disabled === false &&
      css`
        transform: scale(1.1);
        cursor: pointer;
      `}
  }

  ${(props) =>
    props.isDarkMode
      ? css`
          background-color: ${props.theme.colorDark.fontPrimary};
          color: ${props.theme.colorDark.background};
          ${props.disabled &&
          css`
            opacity: 0.2;
          `}
        `
      : css`
          background-color: ${props.theme.colorLight.fontPrimary};
          color: ${props.theme.colorLight.background};
          ${props.disabled &&
          css`
            opacity: 0.2;
          `}
        `}
`;
const CommentList = styled.ul<{ isDarkMode: boolean }>`
  width: 100%;
  height: 300px;
  overflow-x: hidden;
  overflow-y: auto;
  margin-top: 30px;
  &::-webkit-scrollbar {
    width: 3px;
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    ${(props) =>
      props.isDarkMode
        ? css`
            background-color: ${props.theme.colorDark.fontPrimary};
          `
        : css`
            background-color: ${props.theme.colorLight.fontPrimary};
          `}
  }
`;
const CommentItem = styled.li<{ isDarkMode: boolean }>`
  display: flex;
  margin-bottom: 20px;
  border-bottom: 1px solid black;
  padding-bottom: 10px;
  margin-right: 30px;
  ${(props) =>
    props.isDarkMode
      ? css`
          border-bottom: 1px solid ${props.theme.colorDark.fontPrimary};
        `
      : css`
          border-bottom: 1px solid ${props.theme.colorLight.fontPrimary};
        `}
`;
const CommentText = styled.h4`
  font-size: ${(props) => props.theme.fontSize.base};
  font-weight: 500;
  margin-left: 20px;
  line-height: 20px;
  white-space: pre;
`;
const CommentDate = styled.p`
  font-size: ${(props) => props.theme.fontSize.xs};
  font-weight: 300;
  opacity: 0.7;
  line-height: 10px;
`;

type CommentProps = {
  createdAt: string;
  emoji: string;
  text: string;
  timestamp: number;
};

export default function Comment() {
  const isDarkMode = useSelector(
    (state: RootState) => state.modeReducer.isDarkMode,
  );

  const [isOpenedEmojiPicker, setIsOpenedEmojiPicker] =
    useState<boolean>(false);
  const [commentObj, setCommentObj] = useState<CommentProps>({
    createdAt: "",
    emoji: "",
    text: "",
    timestamp: 0,
  });
  const { emoji, text } = commentObj;

  const [comments, setComments] = useState<CommentProps[]>([]);
  useEffect(() => {
    dbService
      .collection("comment")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        const commentArr: any = snapshot.docs.map((comment) => ({
          ...comment.data(),
        }));
        setComments(commentArr);
      });
  }, []);

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentObj({
      ...commentObj,
      text: event.target.value,
    });
  };

  const onClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    if (event.currentTarget.id === "emoji") {
      setIsOpenedEmojiPicker(true);
    } else {
      const now = Date.now();
      const date = new Date(now);
      const year = date.getFullYear().toString().slice(-4);
      const month = ("0" + (date.getMonth() + 1)).slice(-2);
      const day = ("0" + date.getDate()).slice(-2);
      const hour = ("0" + date.getHours()).slice(-2);
      const minute = ("0" + date.getMinutes()).slice(-2);
      const second = ("0" + date.getSeconds()).slice(-2);
      const returnDate =
        year +
        "년 " +
        month +
        "월 " +
        day +
        "일  " +
        hour +
        "시 " +
        minute +
        "분 " +
        second +
        "초";

      await dbService.collection("comment").add({
        createdAt: returnDate,
        timestamp: now,
        emoji: emoji,
        text: text,
      });

      setCommentObj({
        ...commentObj,
        text: "",
        emoji: "",
      });
    }
  };

  const onEmojiClick = (emojiData: EmojiClickData) => {
    setCommentObj({
      ...commentObj,
      emoji: emojiData.unified,
    });
    setIsOpenedEmojiPicker(!isOpenedEmojiPicker);
  };
  return (
    <Base>
      <CommentInputWrapper>
        <EmojiPickerWrapper>
          {isOpenedEmojiPicker && (
            <EmojiPicker height={350} width="50%" onEmojiClick={onEmojiClick} />
          )}
        </EmojiPickerWrapper>
        <CommentEmojiBtn
          isDarkMode={isDarkMode}
          id="emoji"
          onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
            onClick(event)
          }
          isEmoji={commentObj.emoji === "" ? false : true}
        >
          {commentObj.emoji === "" ? (
            <AddIcon isDarkMode={isDarkMode} />
          ) : (
            <Emoji unified={emoji} size={20} />
          )}
        </CommentEmojiBtn>
        <CommentTextInput
          spellCheck={false}
          value={text}
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
            onChange(event)
          }
          isDarkMode={isDarkMode}
        />
        <CommentSubmitBtn
          isDarkMode={isDarkMode}
          id="submit"
          onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
            onClick(event)
          }
          disabled={emoji === "" || text === ""}
        >
          Submit
        </CommentSubmitBtn>
      </CommentInputWrapper>
      <CommentList isDarkMode={isDarkMode}>
        {comments.map((comment, index) => (
          <CommentItem isDarkMode={isDarkMode} key={index}>
            <Emoji unified={comment.emoji} size={30} />
            <CommentText>
              <CommentDate>{comment.createdAt}</CommentDate>
              {comment.text}
            </CommentText>
          </CommentItem>
        ))}
      </CommentList>
    </Base>
  );
}
