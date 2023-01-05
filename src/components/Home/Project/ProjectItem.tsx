import React from "react";
import styled from "styled-components";

const Thumbnail = styled.img`
  height: 100%;
`;
const Info = styled.div`
  position: absolute;
  transition: all 0.5s ease-in-out;
  bottom: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(10px);
  opacity: 0;
  visibility: hidden;
  background-image: linear-gradient(
    ${(props) => props.color},
    ${(props) => props.color}90
  );
  left: -100%;
  color: ${(props) => props.theme.colorDark.fontPrimary};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;
`;
const Top = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-bottom: 1px solid ${(props) => props.theme.colorLight.background};
  padding-bottom: 15px;
`;
const Bottom = styled.div``;
const Title = styled.h1`
  font-family: ${(props) => props.theme.fontFamily.notoSans};
  font-size: ${(props) => props.theme.fontSize.xl};
  font-weight: 700;
`;
const Date = styled.p`
  font-size: ${(props) => props.theme.fontSize.sm};
  font-weight: 300;
  margin: 10px;
`;
const DemoImg = styled.div`
  width: 80%;
  height: 200px;
  background-color: #fff;
  margin: 10px 0;
`;
const LinkWrapper = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
`;
const Link = styled.a`
  text-decoration: none;
  color: ${(props) => props.color};
  background-color: ${(props) => props.theme.colorLight.background};
  border-radius: 50%;
  cursor: pointer;
  padding: 5px 10px;
  font-family: ${(props) => props.theme.fontFamily.rozha};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;
const Desc = styled.p`
  font-size: ${(props) => props.theme.fontSize.base};
  font-weight: 300;
  margin: 10px 0;
  line-height: 18px;
  b {
    font-weight: 700;
  }
`;
const ReadmeBtn = styled.button`
  font-family: ${(props) => props.theme.fontFamily.rozha};
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme.colorDark.fontPrimary};
  font-size: ${(props) => props.theme.fontSize.base};
  font-weight: 300;
  margin: 0;
  padding: 3px 10px;
  transition: all 0.2s ease-in-out;
  border: 1px solid ${(props) => props.theme.colorDark.fontPrimary}80;
  border-radius: 50%;
  &:hover {
    background-color: ${(props) => props.theme.colorDark.fontPrimary};
    color: ${(props) => props.color};
    font-weight: 500;
  }
`;
const ItemWrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
const Label = styled.label`
  font-weight: 300;
  font-size: ${(props) => props.theme.fontSize.sm};
  white-space: nowrap;
  width: 80px;
  line-height: 25px;
  margin-right: 20px;
`;
const ItemText = styled.p`
  width: calc(100% - 100px);
  line-height: 25px;
  font-size: ${(props) => props.theme.fontSize.base};
  font-weight: 500;
  word-break: keep-all;
`;

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
