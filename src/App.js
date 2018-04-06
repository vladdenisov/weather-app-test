import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery'; 
var main_weather, temperature, units, zip, country_code, pict;
$(document).ready(function() {
  
     setTimeout(function(){
         $('body').addClass('loaded');
         $('h1').css('color','#222222');
     }, 3000);
  
 });
function Menu(props) {
  return (
    <div> 
        <p>Please select your preferred units format:</p>
        <div>
        <input type="radio" id="metric"
        name="contact" value="metric"  checked={true} />
        <label for="metric">Metric</label>
        <input type="radio" id="imperial"
        name="contact" value="imperial" />
        <label for="imperial">Imperial</label>
        </div>
  <input type="text" id="zipcode" placeholder="ZIP code " />
  <input type="text" id="country" placeholder="County code"/>
  <button onClick={getProps.bind(this)} id="myBtn">Submit</button>
  </div>
  );
  function getProps() {
    var zip = document.getElementById('zipcode').value;
    var country_code = document.getElementById('country').value;
    var radios = document.getElementsByName('contact');      
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            var units = radios[i].value;
            break;
        }
    }
    $.getJSON('http://api.openweathermap.org/data/2.5/forecast?zip='+zip+','+country_code+'&units='+units+'&APPID=1be9b7ff7dd72545ef99c25f2f32dcdd', function(data) {
     var main_weather = data.list[1].weather[0].main;
      function WeatherBlock() {return (<div><a href=".">← Back</a><span>Weather in {data.city.name}.</span><div id="WeatherBlock">
        
        <Day weather={data.list[1].weather[0].main} date={data.list[1].dt_txt} temperature={Math.round(data.list[1].main.temp)} icon_id={data.list[1].weather[0].icon} />
        <Day weather={data.list[9].weather[0].main} date={data.list[9].dt_txt} temperature={Math.round(data.list[9].main.temp)} icon_id={data.list[9].weather[0].icon} />
        <Day weather={data.list[17].weather[0].main} date={data.list[17].dt_txt} temperature={Math.round(data.list[17].main.temp)} icon_id={data.list[17].weather[0].icon} />
        <Day weather={data.list[25].weather[0].main} date={data.list[25].dt_txt} temperature={Math.round(data.list[25].main.temp)} icon_id={data.list[25].weather[0].icon} />
        <Day weather={data.list[33].weather[0].main} date={data.list[33].dt_txt} temperature={Math.round(data.list[33].main.temp)} icon_id={data.list[33].weather[0].icon} />
        </div></div>
      );}
     ReactDOM.render(<WeatherBlock />, document.getElementById('root'));
  });
  }
}


function Day(props) {
  return (
      <div className="MainDiv"> 
        <img src={"http://openweathermap.org/img/w/" + props.icon_id + ".png"} />
        <h3>Main weather: <b>{props.weather}</b></h3>
        <h2>Avg. temperature: <b>{props.temperature}&#176;</b></h2>  
          <h1>Date: <b>{props.date}</b></h1>
         
          
      </div>
  );
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
      </div>
    );
  }
}

export default App;
