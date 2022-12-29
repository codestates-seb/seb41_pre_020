import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { createGlobalStyle } from 'styled-components';
import App from './App';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: -apple-system, "system-ui", "Segoe UI Adjusted", "Segoe UI", "Liberation Sans", sans-serif;
    font-size: 13px;
    line-height: 17px;
    font-weight: 400;
    color: #232629;
  }
  
  a {
    color: #0074cc;
    text-decoration: none;

    &:hover {
      color: #0A95FF;
    }
  }

  ol, ul {
  	list-style: none;
  }

  .ai-center {
    align-items: center;
  }

  .jc-space-between {
    justify-content: space-between;
  }
  
  body {
    display: flex;
    flex-direction: column;
    min-width: auto;
    padding-top: 50px;
  }
  
  .toastui-editor-defaultUI-toolbar, .toastui-editor-md-tab-container {
    background: #F8F9F9 !important;
  }

  .toastui-editor-md-tab-container .tab-item {
    background: #e3e6e8 !important;
  }

  .toastui-editor-md-tab-container .tab-item {
    background: #e3e6e8 !important;
  }

  .toastui-editor-md-tab-container .tab-item.active {
    background: white !important;
  }
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
);
