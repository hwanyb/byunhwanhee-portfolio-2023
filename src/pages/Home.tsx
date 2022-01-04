import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { keyframes } from "styled-components";

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
const fadeInAnimation = `
  opacity: 1;
  transition: opacity 2s ease-in-out;
`;

const fadeOutAnimation = `
  opacity: 0;
  transition: opacity 2s ease-in-out;
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
            if(entry.target instanceof HTMLElement){
              entry.target.style.cssText = fadeInAnimation;
            }
          } else {
            if(entry.target instanceof HTMLElement){
              entry.target.style.cssText = fadeOutAnimation;
            }
          }
        });
      },
      { threshold: 0.1 }
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
  }, []);

  const scroll = () => {
    const currentRef =
      homeView === "main"
        ? mainRef
        : homeView === "about"
        ? aboutRef
        : homeView === "project"
        ? projectRef
        : contactRef;
    
      if(currentRef && currentRef.current) {
        const currentElement = currentRef.current;
        const elementTop = currentElement.offsetTop;
        const elementHeight = currentElement.offsetHeight;
        const windowHeight = window.innerHeight;
        const offset = (windowHeight - elementHeight) / 2;
        const scrollPosition = elementTop - offset;

        window.scrollTo({
          top: scrollPosition,
          behavior: 'smooth'
        });
      };
  };
  
  useEffect(() => {
    scroll();
  }, [homeView]);
  
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
