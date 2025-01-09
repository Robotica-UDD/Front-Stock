import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StockComponent } from './stock/stock.component';
import { EditarComponent } from './editar/editar.component';

export const routes: Routes = [
    {path: '',component:HomeComponent},
    {path: 'stock', component:StockComponent},
    {path: 'stock/editar', component:EditarComponent}
];
