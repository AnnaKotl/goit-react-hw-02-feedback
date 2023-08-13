import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    width: 100%;
    margin: 0;
    font-family: 'PT Serif', serif;
    font-size: 24px;
    font-style: normal;
    line-height: 1.5;
    color: #210a01;
    background-image: linear-gradient(180deg, #f4dc9b 0, #e7c985 25%, #d8b46c 50%, #c99f54 75%, #bd8d40 100%);
}

    code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
    margin: 0;
    }
    ul,
    li {
    margin: 0;
    padding: 0;
    list-style: none;
    }
    img {
    display: block;
    max-width: 100%;
    height: auto;
    }

`;
