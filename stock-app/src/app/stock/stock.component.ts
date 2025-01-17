import { Component, OnInit } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { MatIconModule } from '@angular/material/icon';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-stock',
  imports: [ItemComponent, MatIconModule, NgFor, RouterModule],
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  intervalId: any;
  items: any = [];

  ngOnInit() {
    console.log('StockComponent initialized');
    this.request();
  }

  async request() {
    console.log('Making request to the server');
    
    const apiUrl = (typeof window !== 'undefined' && window.location.hostname === 'stockroboticaudd.netlify.app') 
      ? 'https://back-stock.onrender.com' // URL en Netlify
      : '/api'; // URL en local

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: apiUrl, 
      headers: {}
    };

    try {
      const response = await axios.request(config);
      console.log('Response received:', response.data);
      this.items = response.data;
    } catch (error) {
      console.error('Error making request:', error);
    }
  }
}
