import { Component } from '@angular/core';

@Component({
  selector: 'app-suggested-product',
  standalone: true,
  templateUrl: './suggested-product.component.html',
  styleUrls: ['./suggested-product.component.scss']
})
export class SuggestedProductComponent {
  suggestedProducts = [
    { name: 'Apartment', price: 6000, image: '/assets/apartment.jpg' },
    { name: 'Chair Stock', price: 250, image: '/assets/chairs.jpg' },
    { name: 'Laptop', price: 5700, image: '/assets/laptop.jpg' }
  ];
}
