import React from "react";
import styled from "styled-components";

const Thumbnail = styled.img``;
const Info = styled.div``;
const Top = styled.div``;
const Bottom = styled.div``;
const Title = styled.h1``;
const Date = styled.p``;
const DemoImg = styled.div``;
const LinkWrapper = styled.div``;
const Link = styled.a``;
const Desc = styled.p``;
const ReadmeBtn = styled.button``;
const ItemWrapper = styled.div``;
const Label = styled.label``;
const ItemText = styled.p``;

type ProjectItemProps = {
  thumbnail: string;
  color: string;
  title: string;
  date: string;
  desc: string;
  demoUrl: string;
  githubUrl: string;
  mainFunc: string;
  stack: string;
};
export default function ProjectItem({
  thumbnail,
  color,
  desc,
  title,
  date,
  demoUrl,
  githubUrl,
  mainFunc,
  stack,
}: ProjectItemProps) {
  return (
    <>
      <Thumbnail src={thumbnail} />
      <Info color={color} className="info">
        <Top>
          <Title>{title}</Title>
          <Date>{date}</Date>
          <LinkWrapper>
            <Link color={color} href={demoUrl} target="_blank">
              Demo
            </Link>
            <Link color={color} href={githubUrl} target="_blank">
              Github
            </Link>
          </LinkWrapper>
          <DemoImg />
          <Desc dangerouslySetInnerHTML={{ __html: desc }} />
          <ReadmeBtn color={color}>see more</ReadmeBtn>
        </Top>
        <Bottom>
          <ItemWrapper>
            <Label color={color}>✔ 주요 기능</Label>
            <ItemText>{mainFunc}</ItemText>
          </ItemWrapper>
          <ItemWrapper>
            <Label color={color}>✔ 사용 스택</Label>
            <ItemText>{stack}</ItemText>
          </ItemWrapper>
        </Bottom>
      </Info>
    </>
  );
}
