import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import "./styles/main.scss";
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import store from './redux/store';
// import "./styles/vendors/bootstrap.min.js";


ReactDOM.render(
  <StrictMode>
  <BrowserRouter>
    <Provider store={store}>
        <App />
    </Provider>
  </BrowserRouter>
  </StrictMode>,
  document.getElementById("root")
);

