import { CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, PercentPipe, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../services/product';

@Component({
  imports: [RouterLink, UpperCasePipe,LowerCasePipe, DatePipe, CurrencyPipe, PercentPipe, DecimalPipe],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  nombre ='Bruce Room';
  fecha = new Date();
  precio = 1400.90
  porcentaje = 0.85;

  products: any[] = [];

  constructor(private productService: Product) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });

  }
}
