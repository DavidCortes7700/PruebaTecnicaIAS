import { TestBed } from '@angular/core/testing';

import { CarService } from './car.service';
import { HttpClientModule } from '@angular/common/http';

describe('CarService', () => {
  let service: CarService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service = TestBed.inject(CarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#fetchCars trae datos de getCars',(done:DoneFn)=>{
    expect(service.getCars());
    done();
  })
});
