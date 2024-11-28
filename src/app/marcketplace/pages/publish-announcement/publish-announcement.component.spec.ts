import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishAnnouncementComponent } from './publish-announcement.component';

describe('PublishAnnouncementComponent', () => {
  let component: PublishAnnouncementComponent;
  let fixture: ComponentFixture<PublishAnnouncementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublishAnnouncementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublishAnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
