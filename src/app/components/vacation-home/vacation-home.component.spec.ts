import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationHomeComponent } from './vacation-home.component';

describe('VacationHomeComponent', () => {
  let component: VacationHomeComponent;
  let fixture: ComponentFixture<VacationHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacationHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VacationHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
