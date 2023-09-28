import { Component } from '@angular/core';


@Component({
  selector: 'app-counter',
  template: `
  <p>Counter: {{ counter }} </p>

  <button (click)="increaseBy(+1)">+1</button>
  <button (click)="reset()">Reset</button>
  <button (click)="increaseBy(-1)">-1</button>
  `
})
export class CounterComponent {
  public counter: number = 10;

  // increaseBy(): void {
  //   this.counter +=1
  // }

  // decreaseBy(): void {
  //   this.counter -=1
  // }

  // increaseBy( val: number ): void {
  //   if (val === 1) {
  //     this.counter += 1;
  //   } else {
  //     this.counter -= 1;
  //   }
  // }

  increaseBy ( val: number ): void {
    this.counter += val
  }

  reset (): void {
    this.counter = 10
  }
}
