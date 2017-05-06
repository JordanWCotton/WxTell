import { Routes, RouterModule, CanActivate } from '@angular/router';

import { LandScreenComponent } from './land-screen/land-screen.component';

const APP_ROUTES: Routes = [
    {path: '', component: LandScreenComponent} 
]

export const routing = RouterModule.forRoot(APP_ROUTES);