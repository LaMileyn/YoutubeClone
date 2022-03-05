import ReactDOM from 'react-dom'
import React from "react";
import App from "./App";
import {Provider} from "react-redux";
import store from "@redux/store/store.js"
import {BrowserRouter} from "react-router-dom";


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
    , document.getElementById("root"))