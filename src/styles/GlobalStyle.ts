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
        overflow-x: hidden;
        &::-webkit-scrollbar {
            display: none;
        }
    }
    
    li {
        list-style: none;
    }
    textarea {
        border: none;
        outline: none;
        resize: none;
        padding: 0;
    }
`;

export default GlobalStyle;
