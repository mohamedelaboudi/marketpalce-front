import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pagination } from '../../core/model/pagination';
import { getDefaultPagination } from '../../core/constant/constants';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pagination-any-component',
  standalone: true,
  imports: [CommonModule , RouterLink],
  templateUrl: './pagination-any-component.component.html',
  styleUrls: ['./pagination-any-component.component.scss']
})
export class PaginationAnyComponentComponent {

  @Output() navigateEvent = new EventEmitter<Pagination>();
  @Input() pagination: Pagination = getDefaultPagination();

  onPaginationLimitChange(value: number) {
    this.pagination.limit = value;
    this.pagination.offset = 0;
    this.navigateEvent.emit(this.pagination);
  }

  firstPage() {
    this.pagination.offset = 0;
    this.navigateEvent.emit(this.pagination);
  }

  previous() {
    if (this.pagination.offset > 0) {
      this.pagination.offset--;
      this.navigateEvent.emit(this.pagination);
    }
  }

  next() {
    if (this.pagination.offset + 1 < this.pagination.pagesCount) {
      this.pagination.offset++;
      this.navigateEvent.emit(this.pagination);
    }
  }

  lastPage() {
    this.pagination.offset = this.pagination.pagesCount - 1;
    this.navigateEvent.emit(this.pagination);
  }
}
