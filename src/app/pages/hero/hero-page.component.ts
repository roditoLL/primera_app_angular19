import { Component, computed, signal } from "@angular/core";

@Component({
  templateUrl:'./hero-page.component.html'
})
export class HeroPageComponent{
  name= signal("Iron Man");
  age = signal(45);
  heroDescription = computed(()=>{
    const description = `${this.name()}-${this.age()}`
    return description
  })
  capitalizedName = computed(()=>{
    const capitalizeName = this.name().toUpperCase();
    return capitalizeName;
  })

  getHeroDescription(){
    return `${this.name()} -${this.age()}`
  }
  changeHero(){
    this.name.set("Spiderman")
    this.age.set(22)
  }
  chageAge(){
    this.age.set(60)
  }
  resetForm(){
    this.name.set("IronMan")
    this.age.set(45)
  }
}
