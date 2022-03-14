import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {BrowserRouter} from "react-router-dom"
import {Provider} from "react-redux"
import configureStore from "./Redux/index"
const store = configureStore()
ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);


