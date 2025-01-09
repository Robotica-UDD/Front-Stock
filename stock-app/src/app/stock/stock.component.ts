import { Component } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { MatIconModule } from '@angular/material/icon';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-stock',
  imports: [ItemComponent, MatIconModule, NgFor, RouterModule],
  templateUrl: './stock.component.html',
  styleUrl: './stock.component.css'
})
export class StockComponent {
items =[
  {
    itemName:"QTR",
    quantity:3,
    id:1,
    precio:3500
  },
  {
    itemName:"ESP32",
    quantity:5,
    id:2,
    precio:3500
  },
  {
    itemName:"Rueda",
    quantity:8,
    id:3,
    precio:3500
  }
]
}
