import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../weather.service';

@Component({ 
  selector: 'app-land-screen',
  templateUrl: './land-screen.component.html',
  styleUrls: ['./land-screen.component.css']
})
export class LandScreenComponent implements OnInit {
dayNames: Array<string> = ["Sunday","Monday", "Tuesday", "Wednesday", 
  "Thursday", "Friday", "Saturday"];

  city = 'Bogalusa';
  country = 'us';

  public displayCity = '';
  public displayDate: Date;
  public displayTemp = 0;
  public displayHumid = 0; 
  public displayMain = '';
  public displayWindSpd = 0;
  public displayWindDir = 0;

  public forecast = {
    dayOne : {
      date: '',
      temp: 0,
      humid: 0, 
      main: ''
    },
    dayTwo : {
      date: '',
      temp: 0,
      humid: 0, 
      main: ''
    },
    dayThree : {
      date: '',
      temp: 0,
      humid: 0, 
      main: ''
    },
    dayFour : {
      date: '',
      temp: 0,
      humid: 0, 
      main: ''
    },
    dayFive : {
      date: '',
      temp: 0,
      humid: 0, 
      main: ''
    }
  }

  constructor(private weather: WeatherService) { }

  ngOnInit() {
    this.displayDate = new Date();
    /* this.weather.getCurrentWeather(this.city, this.country)
    .subscribe(
      (weather) => {
        console.log(weather);
        this.displayCity = weather.name;
        this.displayMain = weather.weather[0].main;
        this.displayWindSpd = weather.wind.speed;
        this.displayWindDir = weather.wind.deg;
        this.setTemperature(weather.main.temp);
        this.displayHumid = weather.main.humidity;
      }
    ) */

    this.weather.getWeatherForecast(this.city, this.country)
    .subscribe(
      (forecast) => {
        console.log(forecast);
        this.setForecast(forecast.list);
      }
    ) 
  }

  setTemperature(temp) {
    this.displayTemp = ((temp - 273.15) * 9/5) + 32;
    this.displayTemp = Math.floor(this.displayTemp);
  }

  setForecast(forecast) {
    this.forecast.dayOne.temp = Math.floor(forecast[2].main.temp);
    this.forecast.dayOne.humid = forecast[2].main.humidity;
    this.forecast.dayOne.main = forecast[2].weather[0].main;
    this.forecast.dayOne.date = forecast[2].dt_txt.slice(8,10);

    this.forecast.dayTwo.temp = Math.floor(forecast[10].main.temp);
    this.forecast.dayTwo.humid = forecast[10].main.humidity;
    this.forecast.dayTwo.main = forecast[10].weather[0].main;
    this.forecast.dayTwo.date = forecast[10].dt_txt.slice(8,10);

    this.forecast.dayThree.temp = Math.floor(forecast[18].main.temp);
    this.forecast.dayThree.humid = forecast[18].main.humidity;
    this.forecast.dayThree.main = forecast[18].weather[0].main;
    this.forecast.dayThree.date = forecast[18].dt_txt.slice(8,10);

    this.forecast.dayFour.temp = Math.floor(forecast[26].main.temp);
    this.forecast.dayFour.humid = forecast[26].main.humidity;
    this.forecast.dayFour.main = forecast[26].weather[0].main;
    this.forecast.dayFour.date = forecast[26].dt_txt.slice(8,10);

    this.forecast.dayFive.temp = Math.floor(forecast[34].main.temp);
    this.forecast.dayFive.humid = forecast[34].main.humidity;
    this.forecast.dayFive.main = forecast[34].weather[0].main;
    this.forecast.dayFive.date = forecast[34].dt_txt.slice(8,10);
  }
}
