import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import $ from 'jquery'; 
var main_weather, temperature, units, zip, country_code, pict;
$.getJSON('http://api.openweathermap.org/data/2.5/forecast?zip=193232,ru&APPID=1be9b7ff7dd72545ef99c25f2f32dcdd', function(data) {
    data.list[1].weather[0].main
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();



    