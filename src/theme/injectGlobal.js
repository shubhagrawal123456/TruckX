import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
    html {font-size: 16px }
    body {
        overflow-x: hidden;
        font-size: 1rem;
        line-height: 1.6;
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
        "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #555;

      }
   `
   
;
export default GlobalStyle;

