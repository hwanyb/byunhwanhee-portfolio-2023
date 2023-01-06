import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";

import Header from "./components/common/Header";
import Loading from "./components/common/Loading";
import { RootState } from "./modules";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

const Base = styled.div<{ isDarkMode: boolean }>`
  background-color: ${(props) =>
    props.isDarkMode
      ? props.theme.colorDark.background
      : props.theme.colorLight.background};
  transition: all 0.5s ease-in-out;
  color: ${props => props.isDarkMode ? props.theme.colorDark.fontPrimary : props.theme.colorLight.fontPrimary};
`;

function App() {
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, []);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  const isDarkMode = useSelector(
    (state: RootState) => state.modeReducer.isDarkMode,
  );
  
  return (
    <Base isDarkMode={isDarkMode}>
      {isLoading ? (
        <Loading />
      ) : (
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </BrowserRouter>
      )}
    </Base>
  );
}

export default App;
