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
    background-image: radial-gradient(circle at 50% -20.71%, 
        #e6f58f 0, 
        #e9eb7f 10%, 
        #ecdf6e 20%, 
        #efd25d 30%, 
        #f1c44d 40%, 
        #f2b53c 50%, 
        #f3a52d 60%, 
        #f59522 70%, 
        #f8851d 80%, 
        #fa741e 90%, 
        #fc6324 100%
    );  
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
