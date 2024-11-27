import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ProductLight } from '../../../core/model/product/product-light';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterLink , MatPaginatorModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  @Input()productLight :  ProductLight[] = [ ];

}
