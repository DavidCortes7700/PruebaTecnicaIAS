import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../models/car.model';

@Pipe({
  name: 'carPipe',
  standalone: true
})
export class CarPipe implements PipeTransform {

  transform(cars: Car[], searchCar:string): Car[] {
    if(!cars && !searchCar){
      return cars;
    }
    searchCar = searchCar.trim().toLowerCase();
    return cars.filter(car => car.make.toLowerCase().includes(searchCar));
  }
}
