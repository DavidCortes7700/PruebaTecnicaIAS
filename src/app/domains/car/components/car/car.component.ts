import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Car } from '../../../shared/models/car.model';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CarDirective } from '../../../shared/directives/car.directive';

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,CarDirective],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent {
  @Input()car!:Car;
  sale = new FormControl(false);
}
