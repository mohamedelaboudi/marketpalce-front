import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvenderComponent } from './avender.component';

describe('AvenderComponent', () => {
  let component: AvenderComponent;
  let fixture: ComponentFixture<AvenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvenderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
