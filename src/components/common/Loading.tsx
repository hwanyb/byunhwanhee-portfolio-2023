import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

const Base = styled.div<{ start: boolean }>`
  width: 100vw;
  height: 100vh;
  transition: all 1s 2.5s ease-in-out;
  opacity: ${(props) => (props.start ? 0 : 1)};
`;
const Logo = styled.div`
  position: absolute;
  width: 136.26px;
  left: 50%;
  top: 45%;
  transform: translateX(-25%);
`;
const LogoTop = styled.img<{ start: boolean }>`
  position: absolute;
  transition: all 0.7s 0.5s ease-in-out;
  ${(props) =>
    props.start
      ? css`
          opacity: 1;
          top: 0;
        `
      : css`
          opacity: 0;
          top: -50px;
        `}
`;
const LogoLeft = styled.img<{ start: boolean }>`
  position: absolute;
  transition: all 0.7s 0.2s ease-in-out;
  ${(props) =>
    props.start
      ? css`
          opacity: 1;
          top: 30px;
          left: -1px;
        `
      : css`
          opacity: 0;
          top: -50px;
        `}
`;
const LogoRight = styled.img<{ start: boolean }>`
  position: absolute;
  transition: all 0.7s ease-in-out;
  ${(props) =>
    props.start
      ? css`
          opacity: 1;
          top: 7px;
          right: 0px;
        `
      : css`
          opacity: 0;
          top: -50px;
        `}
`;

type Props = {};

export default function Loading({}: Props) {
  const [start, setStart] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(() => {
      setStart(true);
    }, 500);
  }, []);
  return (
    <Base start={start}>
      <Logo>
        <LogoTop
          src={process.env.PUBLIC_URL + "/assets/logo_top.png"}
          start={start}
        />
        <LogoLeft
          src={process.env.PUBLIC_URL + "/assets/logo_left.png"}
          start={start}
        />
        <LogoRight
          src={process.env.PUBLIC_URL + "/assets/logo_right.png"}
          start={start}
        />
      </Logo>
    </Base>
  );
}
