import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --black-dark: #222222;
        --main-color: #49A6E9;
        --light-black: #606060;
        --white-color: #ffffff;
        --dark-white: #f2f2f2;
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Lucida Sans Unicode', sans-serif;
        background-color: var(--dark-white);
    }

    img {
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
    }
`;

export default GlobalStyle;
