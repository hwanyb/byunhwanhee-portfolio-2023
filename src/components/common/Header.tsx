import React from "react";
import styled from "styled-components";

const Base = styled.header`
  position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 50px 200px;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 3fr 1fr;
    backdrop-filter: blur(2px);
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
  font-family: ${props => props.theme.fontFamily.notoSerif};
  font-size: ${props => props.theme.fontSize.base};
  font-weight: 300;
  color: ${props => props.theme.colorLight.fontPrimary};
  margin-right: 20px;
  transition: all 0.2s ease-in-out;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    font-weight: 700;
    color: ${props => props.theme.colorLight.primary};
  }
`;
const ModeToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-self: end;
`;
const ModeIcon = styled.img``;
const ModeToggle = styled.div`
  transition: all 0.2s ease-in-out;
  border-radius: 20px;
  width: 50px;
  height: 20px;
  background-color: ${props => props.theme.colorLight.background};
  border: 1px solid ${props => props.theme.colorLight.fontPrimary};
  margin: 0 10px;
  padding: 2px;
  display: flex;
  justify-content: start;
  align-items: center;
  cursor: pointer;
`;
const ToggleCircle = styled.div`
  transition: all 0.2s ease-in-out;
  width: 14px;
  height: 14px;
  border: 1px solid ${props => props.theme.colorLight.fontPrimary};
  border-radius: 50%;
  &:hover{
    background-color: ${props => props.theme.colorLight.fontPrimary};
  }
`;

export default function Header() {
  return (
    <Base>
      <LogoWrapper>
        <LogoImg src={process.env.PUBLIC_URL + '/assets/logo_70.png'} />
      </LogoWrapper>
      <Nav>
        <NavItem>Home</NavItem>
        <NavItem>About</NavItem>
        <NavItem>Projects</NavItem>
        <NavItem>Contact</NavItem>
      </Nav>
      <ModeToggleWrapper>
        <ModeIcon src={process.env.PUBLIC_URL + '/assets/light_light.png'} />
        <ModeToggle>
          <ToggleCircle />
        </ModeToggle>
        <ModeIcon src={process.env.PUBLIC_URL + '/assets/light_dark.png'} />
      </ModeToggleWrapper>
    </Base>
  );
}
