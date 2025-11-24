import { Component } from "@angular/core";



@Component({
  templateUrl:'./counter-page.component.html',
})
export class CounterPageComponent{
  public counter:number = 10;


  increseBy(value:number){
    this.counter += value;
  }
  decreseBy(value:number){
    this.counter -= value;
  }
  resetBy(){
    this.counter = 0;
  }
}
