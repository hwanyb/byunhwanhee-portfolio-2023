import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { createStore } from "redux";

import { theme } from "./styles/theme";
import rootReducer from "./modules";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const store = createStore(rootReducer);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Provider store={store}>
      <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
