import { createGlobalStyle } from 'styled-components';
import githubBackground from '../assets/github-background.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #F0F0F5 url(${githubBackground}) no-repeat 70% top;
    -webkit-font-smoothing: antialiased;
  }

  body,input,button {
    font: 1rem sans-serif;
  }

  button {
    cursor: pointer;
  }

  #root {
    margin: 0 auto;
    padding: 2.5rem 1.25rem;
    width: calc(960px);
  }
`;
