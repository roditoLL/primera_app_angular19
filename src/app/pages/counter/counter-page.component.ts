import { Component, signal } from "@angular/core";



@Component({
  templateUrl:'./counter-page.component.html',
})
export class CounterPageComponent{
  public counter:number = 10;
  counterSignal = signal(10);


  increseBy(value:number){
    this.counter += value;
    this.counterSignal.update(current=>current + value);
  }
  decreseBy(value:number){
    this.counter -= value;
    this.counterSignal.update(current=>current - value);
  }
  resetBy(){
    this.counter = 0;
    this.counterSignal.set(0);
  }
}
