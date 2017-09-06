import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

$(function() {
  ReactDOM.render(
    <div className='blackfield-main'><h1>Welome</h1></div>,
    document.getElementById('app')
  );
});
