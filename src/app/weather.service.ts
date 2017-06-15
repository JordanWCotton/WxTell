import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable() 
export class WeatherService {
  private currentUrl = 'http://api.openweathermap.org/data/2.5/weather?q=';
  private forecastUrl = 'http://api.openweathermap.org/data/2.5/forecast?q='
  private cityName = '';
  private country = '';
  private apiKey = process.env.OPENWX_API;
  constructor(private http: Http) { }

  getCurrentWeather (city, country) {
    this.cityName = city;
    this.country = country;

    let apiCall = this.currentUrl + this.cityName + ',' + this.country + '&APPID=' + this.apiKey; 

    return this.http.get(apiCall)
    .map(
      (response: Response) => {
        const data = response.json();
        return data;
      }
    )
  }

  getWeatherForecast (city, country) {
    let apiCall = this.forecastUrl + city + ',' + country + '&units=imperial&APPID=' + this.apiKey;
    return this.http.get(apiCall)
    .map(
      (response: Response) => {
        const data = response.json();
        return data;
      }
    )
  }
}
