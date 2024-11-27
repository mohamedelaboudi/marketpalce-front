import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationAnyComponentComponent } from './pagination-any-component.component';

describe('PaginationAnyComponentComponent', () => {
  let component: PaginationAnyComponentComponent;
  let fixture: ComponentFixture<PaginationAnyComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginationAnyComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginationAnyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
