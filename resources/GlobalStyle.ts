import { createGlobalStyle } from 'styled-components';

const fontFamily = 'Noto Serif KR, Apple SD Gothic Neo, Malgun Gothic, sans-serif;';

export default createGlobalStyle`
  *,
  *:before,
  *:after {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
     -webkit-tap-highlight-color: transparent;
  }
  ul, ol {
     list-style: none;
  }
  img {
     border: 0;
     vertical-align: middle;
  }
  a, button {
     margin: 0;
     padding: 0;
     border: 0;
     color: inherit;
     background: none;
     cursor: pointer;
  }
  button span {
     position: relative;
  }
  html, body {
      color: #000;
      font-size: 14px;
      line-height: 1.5;
      font-family: ${fontFamily};
      letter-spacing: -0.5px;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
  }
  a, button {
      color: inherit;
      font-size: inherit;
      text-decoration: none;
      line-height: 1.5;
      font-family: ${fontFamily};
  }
  button {
      outline: 0;
      padding: 0;
      background: none;
      span {
          position: relative;
      }
  }
  .hidden {
    overflow: hidden;
    position: absolute;
    top: -9999px;
    left: -9999px;
    width: 0;
    height: 0;
  }
  input,
  textarea,
  select,
  input[type="checkbox"] + label,
  input[type="radio"] + label{
    border-radius: 0;
    color: #000;
    font: 14px/1.5 ${fontFamily};
    vertical-align: middle;
  }
  input {
    background-color: transparent;
  }
  em {
    font-style: normal;
  }
  a:focus {
    outline: none;
  }
  a::selection {
    background: transparent;
    pointer-events: none;
  }
`;