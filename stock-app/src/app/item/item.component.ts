import { Component, input, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-item',
  imports: [MatCardModule, RouterModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  @Input() itemName!:string;
  @Input() quantity!:number;
  @Input() itemId!:number;
  @Input() precio!:number;

}
