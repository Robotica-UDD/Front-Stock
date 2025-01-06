import { Component } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-stock',
  imports: [ItemComponent, MatIconModule],
  templateUrl: './stock.component.html',
  styleUrl: './stock.component.css'
})
export class StockComponent {

}
