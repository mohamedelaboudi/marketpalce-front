import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-info',
  standalone: true,
  imports: [],
  templateUrl: './product-info.component.html',
  styleUrl: './product-info.component.scss'
})
export class ProductInfoComponent implements OnInit {

  productId!: number;
  product!: any; // Add this property

  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
  
    // Fetch product details (for now, simulate with hardcoded data)
    const allProducts = [
      { id: 1, name: 'Basic Tee', description: 'Black', price: 35.0 },
      { id: 2, name: 'Advanced Tee', description: 'White', price: 40.0 },
      { id: 3, name: 'Premium Hoodie', description: 'Gray', price: 75.0 },
      { id: 4, name: 'Stylish Hat', description: 'Beige', price: 25.0 },
    ];
  
    this.product = allProducts.find((p) => p.id === this.productId);
    console.log('Product Details:', this.product);
  }

}
