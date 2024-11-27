import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { ProductSearch } from '../../../core/model/product/product-search';
import { getDefaultSearch } from '../../../core/constant/constants';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule], // Add FormsModule here
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  @Output() searchEvent = new EventEmitter<ProductSearch>();
  @Input() search: ProductSearch = getDefaultSearch();

  categories: string[] = ['Catégorie 1', 'Catégorie 2', 'Catégorie 3'];
  locations: string[] = ['Casablanca', 'Rabat', 'Marrakech'];

  onSearch(): void {
    if (this.search.productName === '') {
      this.search.productName = undefined;
    }
    this.searchEvent.emit(this.search);
  }

  resetSearch(): void {
    this.search = getDefaultSearch();
    this.searchEvent.emit(this.search);
  }
}
