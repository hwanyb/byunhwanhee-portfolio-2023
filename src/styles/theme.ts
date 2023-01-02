import { DefaultTheme } from "styled-components";

const windowSize = {
  small: `screen and (max-width: '600px')`,
  base: `screen and (max-width: '768px')`,
  large: `screen and (max-width: '1024px')`,
};

const fontSize = {
  xs: "0.5rem",
  sm: "0.75rem",
  base: "1rem",
  md: "1.25rem",
  lg: "1.5rem",
  xl: "2rem",
};

const fontFamily = {
  notoSans: "Noto Sans KR",
  notoSerif: "Noto Serif KR",
  rozha: "Rozha One",
};

const colorLight = {
  background: "#FCFCFC",
  primary: "#FF4D00",
  fontPrimary: "#2E2E2E",
};

const colorDark = {
  background: "#2E2E2E",
  primary: "#FF4D00",
  fontPrimary: "#FCFCFC",
};

export const theme: DefaultTheme = {
  windowSize,
  fontSize,
  fontFamily,
  colorDark,
  colorLight,
};
