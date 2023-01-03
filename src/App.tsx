import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import styled from 'styled-components';

import Header from "./components/common/Header";
import Home from "./pages/Home";
import Projects from "./pages/Projects";


const Base = styled.div`
  background-color: ${props => props.theme.colorLight.backgroud};
`;

function App() {
  return (
    <Base>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </Base>
  );
}

export default App;
