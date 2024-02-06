import { createGlobalStyle} from "styled-components";

const GlobalStyles  = createGlobalStyle`
    @font-face {
        font-family: "Inter";
        src: url(${props => props.theme.fonts.Inter.src});
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 100vw;
        min-height: 100vh;

        background-color: ${props => props.theme.colors.neutral.Off_Black};
        color: ${props => props.theme.colors.neutral.White};

        font-family: Inter, sans-serif;
    }

    p {
        font-size: ${props => props.theme.sizes.paragraph};
    }

    img {
        width: 100%;
        height: auto;

        object-fit: cover;
    }
`

export default GlobalStyles;