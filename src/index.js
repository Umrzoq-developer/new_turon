import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css'
import App from './App';
import * as serviceWorker from './serviceWorker';

//redux
import {Provider} from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';

import {persistor, store} from "./redux/store";
import {BrowserRouter} from "react-router-dom";


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <PersistGate loading={null} persistor={persistor}>
                <App/>
            </PersistGate>
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
