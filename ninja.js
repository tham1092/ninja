class Ninja {
  constructor(nombre, velocidad, fuerza) {
    this.nombre = nombre;
    this.velocidad = velocidad;
    this.fuerza = fuerza;
    this.salud = 0;
  }
  sayName() {
    console.log(`Hello my name is ${this.nombre}`);
  }
  
  drinkSake() {
    this.salud += 10;
  console.log();
  }
  showStats() {
    console.log(`Nombre: ${this.nombre}, Fuerza: ${this.fuerza}, Velocidad: ${this.velocidad},
    salud: ${this.salud}`);
  }
}

const ninja1 = new Ninja("Hyabusa", 3, 3);
ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats();
