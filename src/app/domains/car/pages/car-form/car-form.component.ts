import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CarService } from '../../../shared/services/car.service';

@Component({
  selector: 'app-car-form',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './car-form.component.html',
  styleUrl: './car-form.component.css'
})
export class CarFormComponent {

  carFom!:FormGroup;
  messageSucces:boolean = false;
  constructor(private formB:FormBuilder,private carService:CarService){
    this.carFom = formB.group({
      make:['',Validators.required],
      model:['',Validators.required],
      year:['',[Validators.required,Validators.pattern('[0-9]{4}')]],
      price:['',[Validators.required,Validators.pattern('[0-9]*')]]
    })
  }


  addCar(){
    if(this.carFom.valid){
      const newCar = this.carFom.value;
      this.carService.addCar(newCar);
      this.messageSucces = true;
      setTimeout(()=>{
        this.carFom.reset();
        this.messageSucces=false;
      },2000)
    }
  }

}
