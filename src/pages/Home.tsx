import React from "react";
import styled from "styled-components";

import Main from "../components/Home/Main";
import About from "../components/Home/About";
import Project from "../components/Home/Project";
import Contact from "../components/Home/Contact";
import { ScrollContainer, ScrollPage } from "react-scroll-motion";

const Page = styled(ScrollPage)`
  padding: 150px 200px 0 200px !important;
`;

export default function Home() {
  return (
    <ScrollContainer snap="mandatory">
      <Page>
        <Main />
      </Page>
      <Page>
        <About />
      </Page>
      <Page>
        <Project />
      </Page>
      <Page>
        <Contact />
      </Page>
    </ScrollContainer>
  );
}
