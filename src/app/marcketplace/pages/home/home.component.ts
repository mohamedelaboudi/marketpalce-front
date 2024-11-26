import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SuggestedProductComponent } from "./suggested-product/suggested-product.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { SliderComponent } from "../../shared/slider/slider.component";
import { PaginationAnyComponentComponent } from "../../shared/pagination-any-component/pagination-any-component.component";
import { Pagination } from '../../core/model/pagination';
import { ProductServiceService } from '../../core/services/product-service.service';
import { getDefaultPagination, getDefaultSearch } from '../../core/constant/constants';
import { HttpClientModule } from '@angular/common/http';
import { ProductSearch } from '../../core/model/product/product-search';
import { ProductLight } from '../../core/model/product/product-light';
import { SearchPage } from '../../core/model/search-page';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    SearchBarComponent,
    SuggestedProductComponent,
    ProductListComponent,
    SliderComponent,
    PaginationAnyComponentComponent,HttpClientModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  productLight: ProductLight[] = [];
  pagination: Pagination = getDefaultPagination();
  research: ProductSearch = getDefaultSearch(); // Ensure this returns a string

  constructor(private productService: ProductServiceService) {}

  ngOnInit(): void {
    this.update();
  }

  search(search: ProductSearch) {
    this.research = search;
    this.pagination = getDefaultPagination();
    this.update();
  }

  navigate(pagination: Pagination) {
    this.pagination = pagination;
    this.update();
  }

  update() {
    this.find().subscribe(result => {
      this.productLight = result.content;
      this.pagination.totalCount = result.totalCount;
      this.pagination.resultCount = result.resultCount;
      this.pagination.pagesCount = result.pagesCount;
    });
  }
  find(){
    return this.productService.getAlls(this.pagination.offset, this.pagination.limit, this.research)
    .pipe(
      map(response => {
        const result = new SearchPage<ProductLight>();
        result.totalCount = Number(response.headers.get('X-Total-Count'));
        result.resultCount = Number(response.headers.get('X-Result-Count'));
        result.pagesCount = Number(response.headers.get('X-Result-TotalPages'));
        result.content = response.body as ProductLight[];
        return result;
      })
    );  }

    reloadTableData() {
      this.update(); 
    }
}
