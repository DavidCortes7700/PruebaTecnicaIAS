import { Routes } from '@angular/router';
import { vigilanteGuard } from './domains/shared/guards/vigilante.guard';
import { LayoutComponent } from './domains/shared/layout/layout/layout.component';

export const routes: Routes = [

  {
    path:'',
    component:LayoutComponent,
    children:[
      {
        path:'listPage',
        loadComponent: ()=> import('../app/domains/car/pages/car-list/car-list.component').then(list => list.CarListComponent),
        canActivate:[vigilanteGuard]
      },
      {
        path:'formPage',
        loadComponent: ()=> import('../app/domains/car/pages/car-form/car-form.component').then(form => form.CarFormComponent),
        canActivate:[vigilanteGuard]
      }
    ]
  }


];
