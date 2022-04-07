import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {QuestionsProvider} from './context/questions'
import {BrowserRouter as Router} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <QuestionsProvider>
      <Router>
      <App />
      </Router>
    
    </QuestionsProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
