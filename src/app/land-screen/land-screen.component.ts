import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../weather.service';

@Component({ 
  selector: 'app-land-screen',
  templateUrl: './land-screen.component.html',
  styleUrls: ['./land-screen.component.css']
})
export class LandScreenComponent implements OnInit {
  city = 'Bogalusa';
  country = 'us';

  constructor(private weather: WeatherService) { }

  ngOnInit() {
    /* this.weather.getCurrentWeather(this.city, this.country)
    .subscribe(
      (weather) => {
        console.log(weather);
      }
    ) */

    this.weather.getWeatherForecast(this.city, this.country)
    .subscribe(
      (forecast) => {
        console.log(forecast);
      }
    )
  }

}
