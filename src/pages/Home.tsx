import React from "react";
import styled from "styled-components";

import Main from "../components/Home/Main";
import About from "../components/Home/About";
import Project from "../components/Home/Project";
import Contact from "../components/Home/Contact";
import { ScrollContainer } from "react-scroll-motion";

const Base = styled(ScrollContainer)`
`;

export default function Home() {
  return (
    <Base snap="mandatory">
      <Main />
      <About />
      <Project />
      <Contact />
    </Base>
  );
}
