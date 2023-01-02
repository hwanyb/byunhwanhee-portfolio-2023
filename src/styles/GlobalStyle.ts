import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
        box-sizing: border-box;
    }
    html {
        font-size: 14px;
        font-family: 'Noto Sans KR';
    }
    
    li {
        list-style: none;
    }
`;

export default GlobalStyle;
