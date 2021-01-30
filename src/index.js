import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import reportWebVitals from './reportWebVitals';

import App from './App';
import { alertActions } from './store/alert'
import { railsAxios } from './axios/railsAxios';

import alertReducer from './store/alert';
import authReducer from './store/auth';

import alert_en from './translations/en/alert.json';
import form_en from './translations/en/form.json';
import global_en from './translations/en/global.json';

import './index.css';

i18next.init({
    interpolation: { escapeValue: false },  // React already does escaping
    lng: 'en',
    resources: {
        en: {
            alert: alert_en,
            global: global_en,
            form: form_en
        }
    }
});

const rootReducer = combineReducers({
    alert: alertReducer,
    auth: authReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const storeEnhancers = composeEnhancers(
    applyMiddleware(thunk)
);

const store = createStore(
    rootReducer, 
    storeEnhancers
);

// Setup Rails Axios to handle errors globally
const { dispatch } = store;
railsAxios.interceptors.response.use((response) => response, (error) => {
    if (error.response) {
        const errorData = error.response.data.error;
        dispatch(alertActions.error(errorData.title, errorData.detail));
    } else {
        dispatch(alertActions.networkError());
    }
});

ReactDOM.render(
    <I18nextProvider i18n={i18next}>
        <Provider store={store}>
            <App />
        </Provider>
    </I18nextProvider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
