import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import App from './App';

import form_en from './translations/en/form.json';
import global_en from './translations/en/global.json';

import './index.css';

i18next.init({
  interpolation: { escapeValue: false },  // React already does escaping
  lng: 'en',
  resources: {
    en: {
      global: global_en,
      form: form_en
    }
  }
});

ReactDOM.render(
  <I18nextProvider i18n={i18next}>
    <App />
  </I18nextProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
