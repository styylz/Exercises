/*
1. Sukurti klasę Automobilis
  - sukurti konstruktorių, su 3 argumentais:
    - marke, modelis, kaina



  - konstruktoriuje aprašyti, jog perduotus argumentus išsaugotume formuojame objekte savybėmis:
    - this.brand
    - this.model
    - this.price

2. Sukurkite 3 skirtingus objektus pagal klasę Automobilis kintamuosiuose:
  - const car1 = new Automobilis(..., ..., ...);
  - const car2 = new Automobilis(..., ..., ...);
  - const car3 = new Automobilis(..., ..., ...);

3. Atsispausdinkite car1, car2 ir car3 kintamuosius. Peržiūrėkite juos konsolėje, panagrinėkite kas yra tie objektai

4. Atspausdinkite visų kintamųjų (kurie rodo į klasės objektus):
  modelius:
    - console.log(car1.model);
    - console.log(car2.model);
    - console.log(car3.model);
  markes:
    - console.log(car1.brand);
    - console.log(car2.???);
    - console.log(???);
  kainas:
    - console.log(???);
    - console.log(???);
    - console.log(???);

5. Padidinkite Automobilis objektų kainas šimtu.
  car1.price = car1.price + 100;
  car2.price = ??? + 100;
  ???

6. Po padidinimo, vėl atsispausdinkite objektus ir pažiūrėkite pakitusias Automobilis objektų savybes.

*/


//1
class Automobilis {
  constructor(marke, modelis, kaina){
    this.brand = marke;
    this.model= modelis;
    this.price = kaina
  }

}

//2
const car1 = new Automobilis('Maserati', 'GrandTurismo', 40000);
const car2 = new Automobilis('Volvo', 's40', 3000)
const car3 = new Automobilis('BMW', 'X4', 60000);
const allCars = [car1, car2, car3]

//3
console.table(car1)
console.table(car2)
console.table(car3)
console.table(allCars)

//4
console.groupCollapsed('Car properties')
{
  console.log(`model`)
  console.log({
    car1: car1.model,
    car2: car2.model,
    car3: car3.model,
  })

  console.log(`brand`)
  console.log({
    car1: car1.brand,
    car2: car2.brand,
    car3: car3.brand,
  })

  console.log(`price`)
  console.log({
    car1: car1.price,
    car2: car2.price,
    car3: car3.price,
  })
}
console.groupEnd();

// 5
 console.table({
  Maserati: car1.price + 100,
   Volvo: car2.price + 100,
   BMW: car3.price + 100,
 })




