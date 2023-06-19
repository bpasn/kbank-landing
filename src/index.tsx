import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import HttpApi from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import './scss/custom.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';

i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'th'],
    fallbackLng: 'en',
    // debug: true,
    // Options for language detector
    detection: {
      order: ['path', 'cookie', 'htmlTag'],
      caches: ['cookie'],
    },
    backend: {
      backendOptions: [{
        expirationTime: 7 * 24 * 60 * 60 * 1000, // 7 days
        // loadPath: './locales_cache/{{lng}}/{{ns}}.json',
        // addPath: './locales_cache/{{lng}}/{{ns}}.json' // make sure the folders "locales_cache/{{lng}}" exists
      }, {
        loadPath: '/locales/{{lng}}/{{ns}}.json',
      }]
    },
  })
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const loadingMarkup = (
  <div className="py-4 text-center">
    <h3>Loading..</h3>
  </div>
)
root.render(
  <Suspense fallback={loadingMarkup}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
