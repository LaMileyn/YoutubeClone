import ReactDOM from 'react-dom'
import React from "react";
import App from "./App";
import {Provider} from "react-redux";
import store from "@redux/store/store.js"
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "./Context/Context";


ReactDOM.render(
    <BrowserRouter>
        <ThemeProvider>
            <Provider store={store}>
                <App/>
            </Provider>
        </ThemeProvider>
    </BrowserRouter>
    , document.getElementById("root"))