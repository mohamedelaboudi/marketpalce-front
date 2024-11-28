import { Component, OnInit } from '@angular/core';
import { Review } from '../../../../core/model/review';

@Component({
  selector: 'app-product-review',
  standalone: true,
  imports: [],
  templateUrl: './product-review.component.html',
  styleUrl: './product-review.component.scss'
})
export class ProductReviewComponent  implements OnInit {
  reviews: Review[] = [
    {
      reviewerName: 'John Doe',
      rating: 5,
      comment: 'Amazing product! Highly recommended.',
    },
    {
      reviewerName: 'Jane Smith',
      rating: 4,
      comment: 'Very good, but it could use some improvements.',
    },
    {
      reviewerName: 'Mohamed Lee',
      rating: 3,
      comment: 'It works fine, but not as expected.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  starsArray(rating: number): string {
    const safeRating = rating ?? 0; // Default to 0 if rating is undefined
    return '★'.repeat(safeRating) + '☆'.repeat(5 - safeRating);  }
}