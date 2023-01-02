import React from "react";
import styled from "styled-components";

const Base = styled.header``;
const LogoWrapper = styled.div``;
const LogoImg = styled.img``;
const Nav = styled.nav``;
const NavItem = styled.li``;
const ModeToggleWrapper = styled.div``;
const ModeIcon = styled.img``;
const ModeToggle = styled.div``;
const ToggleCircle = styled.div``;

export default function Header() {
  return (
    <Base>
      <LogoWrapper>
        <LogoImg />
      </LogoWrapper>
      <Nav>
        <NavItem>Home</NavItem>
        <NavItem>About</NavItem>
        <NavItem>Projects</NavItem>
        <NavItem>Contact</NavItem>
      </Nav>
      <ModeToggleWrapper>
        <ModeIcon />
        <ModeToggle>
          <ToggleCircle />
        </ModeToggle>
        <ModeIcon />
      </ModeToggleWrapper>
    </Base>
  );
}
