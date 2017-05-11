import { Routes, RouterModule, CanActivate } from '@angular/router';

import { LandScreenComponent } from './land-screen/land-screen.component';
import { CitySelectComponent } from './city-select/city-select.component';

const APP_ROUTES: Routes = [
    {path: '', component: CitySelectComponent},
    {path: 'weather', component: LandScreenComponent} 
]

export const routing = RouterModule.forRoot(APP_ROUTES);