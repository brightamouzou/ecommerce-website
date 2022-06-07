import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import "./styles/vendors/bootstrap.min.css";
import "./styles/main.scss";
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import store from './redux/store';
// import "./styles/vendors/bootstrap.min.js";


ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
        <App />
    </Provider>
  </BrowserRouter>,

  document.getElementById("root")
);

