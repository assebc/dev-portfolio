import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    *, input-security, button {
        font-family: "Roboto", sans-serif;
    }

    ::-webkit-scrollbar {
        width: 12px;
        height: 12px;
    }

    ::-webkit-scrollbar-thumb {
        background: #c1c1c1;
        border-radius: 6px;
        min-height: 20px;
        border: 3px solid #fafafa;

        &:hover {
            background: #7d7d7d;
        }
    }

    ::-webkit-scrollbar-track {
        background: #fafafa;
        border: 3px solid #fafafa;
    }

    ::-webkit-scrollbar-track-piece {
        background-color: transparent;
    }
`;