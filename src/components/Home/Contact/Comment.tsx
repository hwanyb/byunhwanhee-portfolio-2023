import EmojiPicker, { Emoji, EmojiClickData } from "emoji-picker-react";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { dbService } from "../../../firebase";

const Base = styled.div``;
const CommentInputWrapper = styled.div``;
const CommentEmojiBtn = styled.button``;
const EmojiPickerWrapper = styled.div``;
const AddIcon = styled.div``;
const CommentTextInput = styled.input``;
const CommentSubmitBtn = styled.button``;
const CommentList = styled.ul``;
const CommentItem = styled.li``;
const CommentText = styled.h4``;
const CommentDate = styled.p``;

type CommentProps = {
  createdAt: string;
  emoji: string;
  text: string;
  timestamp: number;
};

export default function Comment() {
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
      .orderBy("timestamp")
      .onSnapshot((snapshot) => {
        const commentArr: any = snapshot.docs.map((comment) => ({
          ...comment.data(),
        }));
        setComments(commentArr);
      });
  }, []);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
          id="emoji"
          onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
            onClick(event)
          }
        >
          {commentObj.emoji === "" ? (
            <AddIcon />
          ) : (
            <Emoji unified={emoji} size={24} />
          )}
        </CommentEmojiBtn>
        <CommentTextInput
          value={text}
          type="text"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            onChange(event)
          }
        />
        <CommentSubmitBtn
          id="submit"
          onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
            onClick(event)
          }
          disabled={emoji === "" || text === ""}
        >
          Submit
        </CommentSubmitBtn>
      </CommentInputWrapper>
      <CommentList>
        {comments.map((comment, index) => (
          <CommentItem key={index}>
            <Emoji unified={comment.emoji} size={30} />
            <CommentText>{comment.text}</CommentText>
            <CommentDate>{comment.createdAt}</CommentDate>
          </CommentItem>
        ))}
      </CommentList>
    </Base>
  );
}
