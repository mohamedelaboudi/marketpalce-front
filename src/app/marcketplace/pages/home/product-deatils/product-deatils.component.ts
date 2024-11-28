import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductInfoComponent } from "./product-info/product-info.component";
import { ProductReviewComponent } from "./product-review/product-review.component";
import { SuggestedProductComponent } from "../suggested-product/suggested-product.component";

@Component({
  selector: 'app-product-details',
  standalone: true,
  templateUrl: './product-deatils.component.html',
  styleUrls: ['./product-deatils.component.scss'],
  imports: [ProductInfoComponent, ProductReviewComponent, SuggestedProductComponent],
})
export class ProductDeatilsComponent implements OnInit {
  productId: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');
    console.log('Product ID:', this.productId);
  }
  
}
