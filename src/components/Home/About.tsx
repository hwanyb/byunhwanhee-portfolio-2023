import React from "react";
import styled from "styled-components";
import { Emoji } from "emoji-picker-react";

const Base = styled.div``;
const Profile = styled.div``;
const Photo = styled.div``;
const PhotoImg = styled.img``;
const Info = styled.div``;
const InfoItem = styled.div``;
const Label = styled.label``;
const InfoText = styled.p``;
const InfoLink = styled.a``;
const Introduce = styled.div``;
const Skill = styled.div``;
const SkillListWrapper = styled.div``;
const SkillList = styled.div``;
const SkillDetails = styled.details``;
const SkillSummary = styled.summary``;

export default function About() {
  return (
    <Base>
      <Profile>
        <Photo>
          <PhotoImg />
        </Photo>
        <Info>
          <InfoItem>
            <Label>Name</Label>
            <InfoText>Byun Hwanhee</InfoText>
          </InfoItem>
          <InfoItem>
            <Label>Location</Label>
            <InfoText>Byun Hwanhee</InfoText>
          </InfoItem>
          <InfoItem>
            <Label>Email</Label>
            <InfoText>mnn9502@naver.com</InfoText>
          </InfoItem>
          <InfoItem>
            <Label>Github</Label>
            <InfoLink href="https://github.com/hwanyb" target="_blank">
              <Emoji size={15} unified="1f517" />
              github.com/hwanyb
            </InfoLink>
          </InfoItem>
          <InfoItem>
            <Label>Blog</Label>
            <InfoLink href="https://hwanyb.github.io/" target="_blank">
              <Emoji size={15} unified="1f517" />
              hwanyb.github.io
            </InfoLink>
          </InfoItem>
        </Info>
      </Profile>
      <Introduce>
        <p>
          <b>안녕하세요!</b> <Emoji size={30} unified="1f60a" />
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
      <Skill>
        <SkillListWrapper>
          <Label>Front-end</Label>
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
              복잡한 구조를 가진 프로젝트에서 데이터를 단방향으로 전달하여
              상태를 쉽게 관리합니다.
            </SkillDetails>
            <SkillDetails>
              <SkillSummary>Styled-components</SkillSummary>
              CSS-in-JS방식으로 스타일링할수 있는 라이브러리입니다.
              <br />
              props를 활용한 조건부 스타일링이 가능해 선호하는 스타일링
              방식입니다.
            </SkillDetails>
          </SkillList>
        </SkillListWrapper>
        <SkillListWrapper>
          <Label>Etc</Label>
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
        </SkillListWrapper>
        <SkillListWrapper>
          <Label>Certificate</Label>
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
        </SkillListWrapper>
      </Skill>
    </Base>
  );
}
