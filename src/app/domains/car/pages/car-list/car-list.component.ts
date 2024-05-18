import { Component } from '@angular/core';
import { CarService } from '../../../shared/services/car.service';
import { Observable } from 'rxjs';
import { Car } from '../../../shared/models/car.model';
import { CommonModule } from '@angular/common';
import { CarComponent } from '../../components/car/car.component';
import { CarPipe } from '../../../shared/pipes/car.pipe';
import { FormsModule } from '@angular/forms';
import { CarDirective } from '../../../shared/directives/car.directive';

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [CommonModule,CarComponent,CarPipe,FormsModule,CarDirective],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.css'
})
export class CarListComponent {

  cars$!:Observable<Car[]>;
  searchCar:string='';
  constructor(private carService: CarService){

  }

  ngOnInit(){
    this.getCars();
  }

  getCars(){
    this.cars$ = this.carService.getCars();
  }

}
