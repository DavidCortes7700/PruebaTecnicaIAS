import { CanActivateFn } from '@angular/router';

export const vigilanteGuard: CanActivateFn = (route, state) => {
  console.log('ruta por medio del guard: ',state.url);
  return true;
};
