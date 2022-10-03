import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/app';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
//import thunk from "redux-thunk";
//import {createAPI} from "./services/api";
import {reducer} from './store/reducer';
import {composeWithDevTools} from 'redux-devtools-extension';


const store = configureStore({reducer}, composeWithDevTools());

const container = document.querySelector(`#root`);
const root = createRoot(container); 
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


