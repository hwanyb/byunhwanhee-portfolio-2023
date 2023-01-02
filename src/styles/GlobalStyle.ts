import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}

    html {
        font-size: 14px;
        font-family: 'Noto Sans KR';
    }
`;

export default GlobalStyle;
