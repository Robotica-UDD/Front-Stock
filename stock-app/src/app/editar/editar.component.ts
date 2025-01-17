import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox'
import { ActivatedRoute } from '@angular/router';
import { MatFormFieldControl } from '@angular/material/form-field';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';
  
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
  quantity: number = 0;
  isAdd: boolean = false;
  isRemove: boolean = false;
  observation: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.itemName = params['name'];
      this.itemId = params['id'];
      this.action = params['action'];
      

      if (this.action === 'add') {
        this.isAdd = true;
      } else if (this.action === 'remove') {
        this.isRemove = true;
      }
    });
  }
  async submitForm() {
    console.log('Enviando solicitud al servidor');
  
    const apiUrl = (typeof window !== 'undefined' && window.location.hostname === 'stockroboticaudd.netlify.app') 
      ? 'https://back-stock.onrender.com/item_update/' // URL en Netlify
      : '/api/item_update'; // URL en local
  
    const data = {
      NombreItem: this.itemName,
      idItem: this.itemId,
      Movimiento: this.isAdd,
      cantidad: this.quantity,
      observacion: this.observation
    };
  
    let config = {
      method: 'post',
      url: apiUrl,
      headers: { 
        'Content-Type': 'application/json'
      },
      data: data
    };
  
    try {
      const response = await axios.request(config);
      console.log('Respuesta recibida:', response.data);
      // Aquí puedes manejar las respuestas, como mostrar un mensaje de éxito
    } catch (error) {
      console.error('Error al hacer el insert:', error);
      // Maneja errores aquí si es necesario
    }
  }
  
}

