import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'Root';
import reportWebVitals from './reportWebVitals';

import {Normalize} from 'styled-normalize'
import GlobalStyles from 'ui/GlobalStyles';

ReactDOM.render(
  <React.StrictMode>
    <Normalize/>
    <GlobalStyles/>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
