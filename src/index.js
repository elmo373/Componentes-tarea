import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

const container = document.getElementById('app')

const element = <App/>

//ReactDOM.render(que vas a colocar, donde lo colocaras) = appendChild
ReactDOM.render(element, container);