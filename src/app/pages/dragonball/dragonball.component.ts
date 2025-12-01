import { Component, signal } from '@angular/core';

interface Character{
  id:number,
  name:string,
  poder:number
}
@Component({
  selector: 'app-dragonball',
  imports: [],
  templateUrl: './dragonball.component.html',
  styleUrl: './dragonball.component.css'
})
export class DragonballComponent {
  characters = signal<Character[]>([
    {
      id:1,name:'Goku',poder:8001
    },
    {
      id:2,name:'Vegeta',poder:7001
    },
    {
      id:3,name:'Piccolo',poder:4001
    },
    {
      id:4,name:'Yamcha',poder:400
    }
  ])

}
