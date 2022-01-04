import React from "react";
import styled, { css } from "styled-components";
import { Emoji } from "emoji-picker-react";
import { useSelector } from "react-redux";
import { RootState } from "../../modules";

const Base = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
`;
const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Photo = styled.div``;
const PhotoImg = styled.img`
  width: 280px;
`;
const Info = styled.div`
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const InfoItem = styled.div`
  display: flex;
  justify-content: center;
`;
const Label = styled.label<{ isDarkMode: boolean }>`
  display: block;
  line-height: 20px;
  margin-right: 20px;
  min-width: 70px;
  height: 20px;
  text-align: center;
  border-radius: 50%;
  font-family: ${(props) => props.theme.fontFamily.rozha};
  font-size: ${(props) => props.theme.fontSize.base};
  ${(props) =>
    props.isDarkMode
      ? css`
          background-color: ${props.theme.colorDark.fontPrimary};
          color: ${props.theme.colorDark.background};
        `
      : css`
          background-color: ${props.theme.colorLight.fontPrimary};
          color: ${props.theme.colorLight.background};
        `}
`;
const InfoText = styled.p`
  font-size: ${(props) => props.theme.fontSize.base};
  font-weight: 500;
  line-height: 20px;
  min-width: 150px;
`;
const InfoLink = styled.a<{ isDarkMode: boolean }>`
  min-width: 150px;
  text-decoration: none;
  font-weight: 500;
  ${(props) =>
    props.isDarkMode
      ? css`
          color: ${props.theme.colorDark.fontPrimary};
        `
      : css`
          color: ${props.theme.colorLight.fontPrimary};
        `}
`;
const Introduce = styled.div`
  & p {
    position: relative;
    font-size: ${(props) => props.theme.fontSize.md};
    font-weight: 300;
    line-height: 30px;
    & > .epr-emoji-img {
      box-sizing: border-box;
      width: 25px !important;
      height: 25px !important;
      position: absolute;
      top: 2px;
      margin-left: 10px;
    }
  }
  & b {
    font-weight: 700;
    font-size: ${(props) => props.theme.fontSize.lg};
    line-height: 30px;
  }
`;
const Skill = styled.div`
  & ${Label} {
    width: fit-content;
    margin-bottom: 20px;
  }
`;
const SkillCategory = styled.p`
  font-weight: 300;
  font-size: ${(props) => props.theme.fontSize.sm};
`;
const SkillList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 20px;
  margin-bottom: 20px;
`;
const SkillDetails = styled.details`
  font-size: ${(props) => props.theme.fontSize.sm};
  font-weight: 300;
  width: 100%;
  margin-bottom: 5px;
  line-height: 15px;
  white-space: pre-wrap;
  &:last-child {
    margin-bottom: 0;
  }
`;
const SkillSummary = styled.summary`
  width: 100%;
  line-height: 30px;
  font-size: ${(props) => props.theme.fontSize.base};
  font-weight: 500;
  cursor: pointer;
`;

export default function About() {
  const isDarkMode = useSelector(
    (state: RootState) => state.modeReducer.isDarkMode,
  );
  return (
    <Base>
      <Profile>
        <Photo>
          <PhotoImg src={process.env.PUBLIC_URL + "/assets/avatar.png"} />
        </Photo>
        <Info>
          <InfoItem>
            <Label isDarkMode={isDarkMode}>Name</Label>
            <InfoText>변환희</InfoText>
          </InfoItem>
          <InfoItem>
            <Label isDarkMode={isDarkMode}>Location</Label>
            <InfoText>Seoul, Korea</InfoText>
          </InfoItem>
          <InfoItem>
            <Label isDarkMode={isDarkMode}>Email</Label>
            <InfoText>mnn9502@naver.com</InfoText>
          </InfoItem>
          <InfoItem>
            <Label isDarkMode={isDarkMode}>Github</Label>
            <InfoLink
              isDarkMode={isDarkMode}
              href="https://github.com/hwanyb"
              target="_blank"
            >
              <Emoji size={15} unified="1f517" />
              github.com/hwanyb
            </InfoLink>
          </InfoItem>
          <InfoItem>
            <Label isDarkMode={isDarkMode}>Blog</Label>
            <InfoLink
              isDarkMode={isDarkMode}
              href="https://hwanyb.github.io/"
              target="_blank"
            >
              <Emoji size={15} unified="1f517" />
              hwanyb.github.io
            </InfoLink>
          </InfoItem>
        </Info>
      </Profile>
      <Skill>
        <Label isDarkMode={isDarkMode}>Skills</Label>
        <SkillCategory>Front-end</SkillCategory>
        <SkillList>
          <SkillDetails>
            <SkillSummary>HTML / CSS</SkillSummary>
            웹 표준에 기반하여 웹사이트의 구조와 스타일링을 합니다.
            <br />
            css 만으로 인터랙티브한 웹을 구현하는 것을 좋아합니다.
          </SkillDetails>
          <SkillDetails>
            <SkillSummary>Javascript</SkillSummary>
            클라이언트 측에서 동작하는 인터랙션을 개발할 때 사용합니다.
            <br />
            ES6 문법을 사용해 가독성있는 코드를 작성하기 위해 노력합니다.
          </SkillDetails>
          <SkillDetails>
            <SkillSummary>Typescript</SkillSummary>
            코드 작성 단계에서 타입을 체크해 오류를 확인할 수 있고
            <br />
            미리 타입을 결정하기 때문에 실행속도가 매우 빠릅니다.
          </SkillDetails>
          <SkillDetails>
            <SkillSummary>React</SkillSummary>
            JSX 문법을 활용하여 직관적이고 가독성이 좋은 코드를 작성할 수
            있습니다.
            <br />
            코드의 중복을 최소화하고 수정이나 확장이 용이하게 하기 위해
            재사용성이 좋은 컴포넌트를 만드는 것에 노력을 기울입니다.
          </SkillDetails>
          <SkillDetails>
            <SkillSummary>React-Native</SkillSummary>
            JS와 React를기반으로 하여 네이티브 앱을 개발할 수 있습니다.
            <br />
            Expo 를 활용하여 간단한 앱을 만든 경험이 있습니다.
          </SkillDetails>
          <SkillDetails>
            <SkillSummary>Redux</SkillSummary>
            복잡한 구조를 가진 프로젝트에서 데이터를 단방향으로 전달하여 상태를
            쉽게 관리합니다.
          </SkillDetails>
          <SkillDetails>
            <SkillSummary>Styled-components</SkillSummary>
            CSS-in-JS방식으로 스타일링할수 있는 라이브러리입니다.
            <br />
            props를 활용한 조건부 스타일링이 가능해 선호하는 스타일링
            방식입니다.
          </SkillDetails>
        </SkillList>
        <SkillCategory>Etc</SkillCategory>
        <SkillList>
          <SkillDetails>
            <SkillSummary>Figma / XD</SkillSummary>
            UI / UX 디자인 툴로 웹과 앱 디자인을 위한 프로토타입 제작 및 디자인
            시스템 구축에 사용하고 있습니다.
          </SkillDetails>
          <SkillDetails>
            <SkillSummary>Photoshop / Illustration</SkillSummary>
            웹과 앱 프로젝트에 필요한 그래픽 소스를 제작할 때 사용하고 있습니다.
          </SkillDetails>
          <SkillDetails>
            <SkillSummary>Git</SkillSummary>
            코드 버전관리를 위해 사용하고 있습니다.
          </SkillDetails>
          <SkillDetails>
            <SkillSummary>Firebase</SkillSummary>
            구글에서 제공하는 백엔드 서비스로, 사용자 인증, 데이터 베이스,
            스토리지 등 백엔드 서비스를 위해 사용하고 있습니다.
          </SkillDetails>
        </SkillList>
        <SkillCategory>Certificate</SkillCategory>
        <SkillList>
          <SkillDetails>
            <SkillSummary>정보처리기사</SkillSummary>
            부족한 CS 지식을 보완하고자 정보처리기사 자격증을 취득했습니다.
          </SkillDetails>
          <SkillDetails>
            <SkillSummary>웹디자인기능사</SkillSummary>
          </SkillDetails>
          <SkillDetails>
            <SkillSummary>컴퓨터그래픽스 운용 기능사</SkillSummary>
          </SkillDetails>
        </SkillList>
      </Skill>
      <Introduce>
        <p>
          <b id="top">안녕하세요!</b>
          <Emoji size={30} unified="1f60a" />
          <br />
          저는 <b>사용자 친화적인 UI / UX</b>를 구현하는 것에 열정을 가진 예비{" "}
          <b>프론트엔드 개발자</b>입니다.
          <br />
          <br />웹 애플리케이션을 개발할때, <b>사용자 중심의 디자인</b>을
          고려하여 UI를 개발하고,
          <br />
          웹페이지의 흐름을 최적화하도록 노력합니다.
          <br />
          <br />
          HTML, CSS, Javascript 외에도 <b>React</b>를 활용하여 컴포넌트 기반의
          SPA를 구현하는 것과
          <br />
          <b>styled-components</b>로 컴포넌트의 스타일을 작성하는 것에 흥미가
          있습니다.
          <br />
          <br />
          최근에는 <b>인터랙티브 웹</b>과 <b>typescript</b>에 대한 관심이 높아져
          Three.js와 typescript를 학습하고 있습니다.
        </p>
      </Introduce>
    </Base>
  );
}
