import { Injectable } from '@angular/core';

import {  HttpClient, HttpParams } from "@angular/common/http";
import { ProductSearch } from '../model/product/product-search';
import { ProductLight } from '../model/product/product-light';
import { Observable } from 'rxjs';
import { Product } from '../model/product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  // Base URL without the trailing slash
  baseUrl = '/api/product';

  constructor(private httpClient: HttpClient) {}

  getAlls(offset?: any, limit?: any, search?: ProductSearch) {
    const url = `${this.baseUrl}/search`;
    let params = new HttpParams();
    if (offset != null) params = params.append('offset', offset);
    if (limit != null) params = params.append('limit', limit);
    return this.httpClient.post<ProductLight[]>(url, search, { params: params, observe: 'response' });
  }

  get(id: string): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.get<Product>(url);
  }
}
