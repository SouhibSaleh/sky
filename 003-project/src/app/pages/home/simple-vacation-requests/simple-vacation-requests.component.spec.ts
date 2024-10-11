import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleVacationRequestsComponent } from './simple-vacation-requests.component';

describe('SimpleVacationRequestsComponent', () => {
  let component: SimpleVacationRequestsComponent;
  let fixture: ComponentFixture<SimpleVacationRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleVacationRequestsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleVacationRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
