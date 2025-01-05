import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StockComponent } from './stock/stock.component';

export const routes: Routes = [
    {path: '',component:HomeComponent},
    {path: 'stock', component:StockComponent}
];
