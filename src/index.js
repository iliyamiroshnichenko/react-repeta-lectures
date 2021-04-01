import React from 'react';
import ReactDOM from 'react-dom';
import { App, App2 } from './App';
import 'modern-normalize/modern-normalize.css';
import './styles.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <App2 />
  </React.StrictMode>,
  document.getElementById('root'),
);
