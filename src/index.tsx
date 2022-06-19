import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';
import Roteador from './componentes/roteador';
import reportWebVitals from './reportWebVitals';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root")!;
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
  
);

