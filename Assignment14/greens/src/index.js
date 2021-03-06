import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const tracyApp = (
    <div>
        <h1 id = "heading">Welcome to Greens Kiosk</h1>
        <p>We sell fruits and vegetables</p>
        <h2>Products</h2>
        <h3>fruits</h3>
        <h3>vegetables</h3>
    </div>
)

ReactDOM.render(tracyApp, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
