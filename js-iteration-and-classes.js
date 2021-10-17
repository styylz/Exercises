'use strict'

const carLobby = [
    { brand: 'Toyota', model: 'Yaris', year: 2002, color: 'red', fuelTypes: ['dysel'], price: 800 },
    { brand: 'Tesla', model: 'Model 3', year: 2016, color: 'black', fuelTypes: ['electric'], price: 22000 },
    { brand: 'Toyota', model: 'Avensis', year: 2015, color: 'blue', fuelTypes: ['petrol'], price: 13000 },
    { brand: 'Audi', model: 'A6', year: 2015, color: 'black', fuelTypes: ['dysel', 'electric'], price: 14000 },
    { brand: 'Audi', model: 'A5', year: 2015, color: 'red', fuelTypes: ['petrol'], price: 17000 },
    { brand: 'Audi', model: 'R8', year: 2019, color: 'black', fuelTypes: ['petrol'], price: 17000 },
    { brand: 'Audi', model: 'R8', year: 2017, color: 'black', fuelTypes: ['petrol',], price: 15000 },
    { brand: 'Tesla', model: 'Model S', year: 2020, color: 'blue', fuelTypes: ['electric'], price: 38000 },
    { brand: 'Subaru', model: 'Impreza', year: 2010, color: 'green', fuelTypes: ['dysel', 'electric'], price: 6000 },
  ];
  const usd_eur = 1.16;

  class Car {
      constructor({brand, model, year, color, fuelTypes, price}){
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.fuelTypes = fuelTypes;
        this.price = price
      }

      getFuelTypes= () => this.fuelTypes.join('/')

      get fuelType() {return this.fuelTypes.join('/')}


  }


  let carsStorage
  let electroMobil
  let petrolOnly

  console.group('1. Sukurkite klasę Car, kuri turėtų savybes ir priskirtų jas naudojant konstruktorių');
  {
    const car1 = new Car({ brand: 'Toyota', model: 'Yaris', year: 2002, color: 'red', fuelTypes: ['dysel'], price: 800 });
  }
  console.groupEnd();

  console.group('2. Sukurkite masyvą sudarytą iš 8 Car klasės mašinų, naudodami duomenis <data>');
  {
    carsStorage = carLobby.map(carProp => new Car(carProp))

    console.table(carsStorage);

}
console.groupEnd();

console.group("3. Klasėje Car sukurkite metodą getFuelType, kuris grąžintų mašinos kurų tipus (fuelTypes) kaip 'string'ą atskirtą '/'.");
{
    // carsStorage.forEach(x => console.log(x.getFuelTypes()))
    carsStorage.forEach(x => console.log(x.fuelType))

}
console.groupEnd();

console.group('4. Atspausdinkite kiekvieno automobilio pavadinimą ir 3 punktu sukurto metodo rezultatą');
{
  carsStorage.forEach(({brand, model, fuelType}) => console.log(`${brand} ${model} ${fuelType}`))

}
console.groupEnd();


console.group('5. Atrinkite tik elektrinius automobilius');
{
   electroMobil = carsStorage.filter(car => car.fuelTypes.includes('electric') && car.fuelTypes.length === 1  )

  console.log(electroMobil)

}
console.groupEnd();

console.group('6. Atrinkite tik benzininius automobilius, naujesnius nei 2016 metai');
{

 petrolOnly = carsStorage.filter(car => car.fuelTypes.includes('petrol') && car.year > 2016)

  console.log(petrolOnly)

}
console.groupEnd();

console.group("7. Atrinkite 'audi' markės automobilius nuo 2012 iki 2016, kurie nėra dyzeliniai");
{
  const audiIsNotDiesel = carsStorage.filter(car => car.brand.toLowerCase()==='audi' && car.year > 2012 && car.year < 2016 && !car.fuelTypes.includes('dysel'))

  console.log(audiIsNotDiesel)

}
console.groupEnd();


console.group('8. Suskaičiuokite 5 punkte gautų automobilių kainos vidurkį');
{

  const electroCarAvg = electroMobil.reduce((sum, x) => sum + x.price ,0) / electroMobil.length

  console.log(electroCarAvg)


}
console.groupEnd();

console.group('9. Suskaičiuokite 6 punkte gautų automobilių bendrą vertę');
{
   const petrolCarsSum = petrolOnly.reduce((sum, car) => sum + car.price, 0);

   console.log(petrolCarsSum)

}
console.groupEnd();

console.group('10. Panaudokite pradinį Car objektų masyvą performuoti duomenis į tokių objektų masyvą');
{
  const carsFormation = carsStorage.map(({brand, model, price, fuelType}) =>
  ({
    brand,
    model,
    price: Math.round(price * usd_eur),
    fuelType
  }));

  console.log(carsFormation)


}
console.groupEnd();