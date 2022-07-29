import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    background: snow;
    color: pink;
    font-family: 'Merriweather', serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }


`;

export default GlobalStyles