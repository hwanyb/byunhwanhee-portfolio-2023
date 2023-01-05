import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import ProjectItem from "./Project/ProjectItem";
import projectData from "../../project.json";

const Base = styled.div``;
const StyledSwiper = styled(Swiper)`
  width: 100vw;
  padding: 0;
  transition: all 0.5s ease-in-out;
  & .swiper-slide-active {
    transition: all 0.5s ease-in-out;
    opacity: 1;
    height: 600px;
    @media screen and (max-width: 400px) {
      height: 500px;
    }
  }
  @media ${(props) => props.theme.windowSize.laptop} {
    padding: 0 150px;
  }
  @media ${(props) => props.theme.windowSize.tablet} {
    padding: 0 50px;
  }
  @media ${(props) => props.theme.windowSize.mobile} {
    height: 500px;
  }
`;
const StyledSwiperSlide = styled(SwiperSlide)`
  transition: all 0.5s ease-in-out;
  height: 550px;
  margin: auto;
  opacity: 0.7;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &.swiper-slide-active:hover .info {
    transition: all 0.5s ease-in-out;
    opacity: 1;
    visibility: visible;
    left: 0;
  }
`;

export default function Project() {
  console.log(projectData);
  return (
    <Base>
      <StyledSwiper
        className="mySwiper"
        slidesPerView={1}
        loop={true}
        centeredSlides={true}
        spaceBetween={50}
        breakpoints={{
          768: {
            spaceBetween: 150,
            slidesPerView: 1,
          },
          1024: {
            spaceBetween: 200,
            slidesPerView: 2,
          },
          1600: {
            spaceBetween: 300,
            slidesPerView: 2.8,
          },
        }}
      >
        {projectData.map((data) => (
          <StyledSwiperSlide key={data.id}>
            <ProjectItem {...data} />
          </StyledSwiperSlide>
        ))}
      </StyledSwiper>
    </Base>
  );
}
