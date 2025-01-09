import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox'
import { ActivatedRoute } from '@angular/router';
import { MatFormFieldControl } from '@angular/material/form-field';
@Component({
  selector: 'app-editar',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatCheckboxModule],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent {

  itemName: string = '';
  itemId: number = 0;
  action: string = '';
  precio: number = 0;
  quantity: number = 0;
  isAdd: boolean = false;
  isRemove: boolean = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.itemName = params['name'];
      this.itemId = params['id'];
      this.action = params['action'];
      this.precio = params['precio']
      

      if (this.action === 'add') {
        this.isAdd = true;
      } else if (this.action === 'remove') {
        this.isRemove = true;
      }
    });
  }

}
