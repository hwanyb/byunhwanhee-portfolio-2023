import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import Main from "../components/Home/Main";
import About from "../components/Home/About";
import Project from "../components/Home/Project";
import Contact from "../components/Home/Contact";
import { setHomeView } from "../modules/homeViewReducer";
import { RootState } from "../modules";

const Section = styled.section`
  height: 100vh;
  padding: 150px 200px;
`;

export default function Home() {
  const dispatch = useDispatch();

  const homeView = useSelector((state: RootState) => state.homeViewReducer.homeView);

  const mainRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const projectRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            dispatch(setHomeView(entry.target.id));
          }
        });
      },
      { threshold: 0.5 }
    );

    if(mainRef.current) {
      observer.observe(mainRef.current);
    };
    if(aboutRef.current) {
      observer.observe(aboutRef.current);
    };
    if(projectRef.current) {
      observer.observe(projectRef.current);
    };
    if(contactRef.current) {
      observer.observe(contactRef.current);
    };

    return () => {
      observer.disconnect();
    };
  }, [])

  console.log(homeView)

  return (
    <>
      <Section id="main" ref={mainRef}>
        <Main />
      </Section>
      <Section id="about" ref={aboutRef}>
        <About />
      </Section>
      <Section id="project" ref={projectRef}>
        <Project />
      </Section>
      <Section id="contact" ref={contactRef}>
        <Contact />
      </Section>
    </>
  );
}
