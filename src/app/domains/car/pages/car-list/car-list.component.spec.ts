import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarListComponent } from './car-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('CarListComponent', () => {
  let component: CarListComponent;
  let fixture: ComponentFixture<CarListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarListComponent,HttpClientModule],
      providers:[HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
