import { Routes } from '@angular/router';
import { FishermanDashboardComponent } from './dashboard/fisherman-dashboard/fisherman-dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { IndustrialDashboardComponent } from './dashboard/industrial-dashboard/industrial-dashboard.component';
import { IndustrialHomeComponent } from './dashboard/industrial-dashboard/industrial-home/industrial-home.component';
import { IndustrialOrdersComponent } from './dashboard/industrial-dashboard/industrial-orders/industrial-orders.component';
import { IndustrialCatalogComponent } from './dashboard/industrial-dashboard/industrial-catalog/industrial-catalog.component';

import { IndustrialOrderDetailsComponent } from './dashboard/industrial-dashboard/industrial-order-details/industrial-order-details.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'dashboard', component: FishermanDashboardComponent },
    {
        path: 'industrial',
        component: IndustrialDashboardComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: IndustrialHomeComponent },
            { path: 'orders', component: IndustrialOrdersComponent },
            { path: 'order/:id', component: IndustrialOrderDetailsComponent },
            { path: 'catalog', component: IndustrialCatalogComponent }
        ]
    }
];
