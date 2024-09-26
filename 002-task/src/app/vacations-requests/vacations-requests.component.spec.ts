import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationsRequestsComponent } from './vacations-requests.component';

describe('VacationsRequestsComponent', () => {
  let component: VacationsRequestsComponent;
  let fixture: ComponentFixture<VacationsRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacationsRequestsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacationsRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
