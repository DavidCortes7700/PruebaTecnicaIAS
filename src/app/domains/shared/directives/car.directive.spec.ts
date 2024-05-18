import { ElementRef } from '@angular/core';
import { CarDirective } from './car.directive';

describe('CarDirective', () => {
  it('should create an instance', () => {
    const elementRef = {} as ElementRef;
    const directive = new CarDirective(elementRef);
    expect(directive).toBeTruthy();
  });
});
