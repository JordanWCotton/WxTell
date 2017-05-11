import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LandScreenComponent } from './land-screen/land-screen.component';
import { routing } from './app-routing';
import { WeatherService } from './weather.service';
import { CitySelectComponent } from './city-select/city-select.component';

@NgModule({
  declarations: [
    AppComponent,
    LandScreenComponent,
    CitySelectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
