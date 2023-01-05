import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import ProjectItem from "./Project/ProjectItem";
import projectData from "../../project.json";

const Base = styled.div``;
const StyledSwiper = styled(Swiper)``;
const StyledSwiperSlide = styled(SwiperSlide)``;

export default function Project() {
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
