import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  // Dati di esempio per il carosello dei prodotti
  bestSellingProducts: string[] = ['Desktop', 'Laptop', 'Software', 'Hardware', 'Tablet', 'Accessories'];

  getMostSoldProducts(): string[] {
    return this.bestSellingProducts;
  }

  // Dati di esempio per il grafico di affidabilità e percentuali di vendita
  reliabilityData = {
    totalProductsSold: 1000,
    complaintPercentage: 5,
    supportResponseTime: '24 hours'
   
  };

  categorySalesPercentages = {
    desktop: 25,
    laptop: 20,
    software: 15,
    hardware: 10,
    tablet: 15,
    accessories: 15
  };
}
