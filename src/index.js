import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import json from "./mydata.json"; //console.log("Mydata", Mydata);
////////////////////////

ReactDOM.render(
    <App 
        json= {json}
        thumbs_gen={json.items}
        thumbs_yt={json.items_youtube}
        thumbs_book={json.items_book}
    />, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
