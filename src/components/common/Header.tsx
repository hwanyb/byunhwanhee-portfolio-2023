import React from "react";
import styled, { css } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../modules";
import { setIsDarkMode } from "../../modules/modeReducer";

const Base = styled.header`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  padding: 50px 200px;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 5fr 1fr;
  backdrop-filter: blur(5px);
`;
const LogoWrapper = styled.div``;
const LogoImg = styled.img``;
const Nav = styled.nav`
  display: flex;
  justify-self: end;
`;
const NavItem = styled.li`
  text-align: center;
  min-width: 100px;
  font-family: ${(props) => props.theme.fontFamily.notoSerif};
  font-size: ${(props) => props.theme.fontSize.base};
  font-weight: 300;
  transition: all 0.2s ease-in-out;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    font-weight: 700;
    color: ${(props) => props.theme.colorLight.primary};
  }
`;
const ModeToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-self: end;
`;
const ModeIcon = styled.img``;
const ModeToggle = styled.div<{ isDarkMode: boolean }>`
  ${(props) =>
    props.isDarkMode
      ? css`
          border: 1px solid ${(props) => props.theme.colorDark.fontPrimary};
          justify-content: end;
        `
      : css`
          border: 1px solid ${(props) => props.theme.colorLight.fontPrimary};
          justify-content: start;
        `}
  transition: all 0.2s ease-in-out;
  border-radius: 20px;
  width: 40px;
  height: 20px;
  margin: 0 10px;
  padding: 2px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const ToggleCircle = styled.div<{ isDarkMode: boolean }>`
  ${(props) =>
    props.isDarkMode
      ? css`
          border: 1px solid ${props.theme.colorDark.fontPrimary};
        `
      : css`
          border: 1px solid ${props.theme.colorLight.fontPrimary};
        `}

  transition: all 0.2s ease-in-out;
  width: 14px;
  height: 14px;
  border-radius: 50%;
`;

export default function Header() {
  const dispatch = useDispatch();

  const isDarkMode = useSelector(
    (state: RootState) => state.modeReducer.isDarkMode,
  );

  const onToggleMode = () => {
    dispatch(setIsDarkMode());
    localStorage.setItem("darkMode", JSON.stringify(!isDarkMode));
  };

  return (
    <Base>
      <LogoWrapper>
        <LogoImg src={process.env.PUBLIC_URL + "/assets/logo_70.png"} />
      </LogoWrapper>
      <Nav>
        <NavItem>Home</NavItem>
        <NavItem>About</NavItem>
        <NavItem>Projects</NavItem>
        <NavItem>Contact</NavItem>
      </Nav>
      <ModeToggleWrapper>
        <ModeIcon
          src={
            isDarkMode
              ? process.env.PUBLIC_URL + "/assets/dark_light.png"
              : process.env.PUBLIC_URL + "/assets/light_light.png"
          }
          style={{ opacity: isDarkMode ? 0.2 : 1 }}
        />
        <ModeToggle onClick={onToggleMode} isDarkMode={isDarkMode}>
          <ToggleCircle isDarkMode={isDarkMode} />
        </ModeToggle>
        <ModeIcon
          src={
            isDarkMode
              ? process.env.PUBLIC_URL + "/assets/dark_dark.png"
              : process.env.PUBLIC_URL + "/assets/light_dark.png"
          }
          style={{ opacity: isDarkMode ? 1 : 0.2 }}
        />
      </ModeToggleWrapper>
    </Base>
  );
}
