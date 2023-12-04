import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/types/product.model';

export interface PhotosApi {
  albumId?: number;
  id?: number;
  title?: string;
  url?: string;
  thumbnailUrl?: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  apiData: PhotosApi;
  limit: number = 10; // <==== Edit this number to limit API results

  mostSoldProducts: Product[] = [
    {
      id: 8,
      name: 'All-in-One Desktop',
      price: 1200,
      description: 'Sleek all-in-one desktop for home and office use',
      rating: 4.3,
      image: '../assets/images/desktop-aio.jpeg',
      category: 'Desktop',
      brand: 'TechSolutions',
      soldNumber: 87,
    },
    {
      id: 14,
      name: 'Mini PC Compact',
      price: 600,
      description: 'Compact mini PC for space-saving computing',
      rating: 4.1,
      image: '../assets/images/desktop-mini.jpeg',
      category: 'Desktop',
      brand: 'MicroSystems',
      soldNumber: 56,
    },
    {
      id: 9,
      name: 'Convertible Tablet Pro',
      price: 800,
      description: 'Convertible tablet with pro features for versatility',
      rating: 4.5,
      image: '../assets/images/tablet2.jpeg',
      category: 'Tablet',
      brand: 'FlexTech',
      soldNumber: 35,
    },
    {
      id: 3,
      name: 'Tablet Slim',
      price: 500,
      description: 'Slim and lightweight tablet for on-the-go use',
      rating: 4,
      image: '../assets/images/tablet.jpeg',
      category: 'Tablet',
      brand: 'MobileTech',
      soldNumber: 23,
    },
    {
      id: 11,
      name: 'RAM HyperX Fury',
      price: 80,
      description: 'High-performance RAM for speedy multitasking',
      rating: 4.6,
      image: '../assets/images/hardware-ram.jpeg',
      category: 'Hardware',
      brand: 'HyperX',
      soldNumber: 19,
    },
    {
      id: 13,
      name: 'Ultrabook Slim',
      price: 1300,
      description: 'Slim and lightweight ultrabook for business professionals',
      rating: 4.4,
      image: '../assets/images/laptop3.jpeg',
      category: 'Laptop',
      brand: 'BusinessTech',
      soldNumber: 19,
    },
  ];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getMostSoldProducts();
  }

  private getMostSoldProducts() {
    console.log('get most sold products');

    this.productService.getProducts().subscribe((products) => {
      this.mostSoldProducts = products
        .sort((a, b) => b.soldNumber - a.soldNumber)
        .slice(0, 6);
      console.log(this.mostSoldProducts);
    });
    console.log('end get most sold products');
  }
}
