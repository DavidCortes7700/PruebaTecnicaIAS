import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Car } from '../models/car.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private url = 'https://freetestapi.com/api/v1/cars';
  private cars$!:Observable<Car[]>

  constructor(private http:HttpClient) {
    this.cars$ = this.fetchCars();
   }

  getCars():Observable<Car[]>{
    return this.cars$;
  }

  fetchCars():Observable<Car[]>{
    return this.http.get<Car[]>(this.url);
  }

  addCar(newCar:Car):void{
    this.cars$ = this.cars$.pipe(
      map(cars => [...cars, newCar])
    )
  }
}
