// ----------------------Užduotys--------------------------
const numbers = [1, 2, -2, 6, -5, 9, 1.02, 45, -69, 77, -12, 2, 8, -2, -4, 59, 7, -3];

console.group('1. Padauginti masyvo narius iš 2 ir išsaugoti naujame masyve');
console.log('---');
{

  // Longer method 
    function mulArrBy2(array) {
      const result = [];
      const elementCount = array.length; // issaugotas elemntu kiekis
      for (let index = 0; index < elementCount; index++) {
        const currentElement = array[index]; // einamajam elementui, kad butu aiskiau
        const currentElementDoubled = currentElement * 2;
        result.push(currentElementDoubled);
      }
      return result;
    }

    // shorter of Upper

    function multArr2By2(arr){
      const result = [];
      const elementCount = array.length;
      for(let i = 0; i < elementCount; i++){
        result.push(arr[index] * 2);

      }
      return result;
    }

    // function mulArrBy2(array) {
    //   const result = [...array]; // copy of array
    //   const elementCount = array.length; // issaugotas elemntu kiekis
    //   for (let index = 0; index < elementCount; index++) {
    //     const currentElement = array[index]; // einamajam elementui, kad butu aiskiau
    //     const currentElementDoubled = currentElement * 2;
    //     result.push(currentElementDoubled);
    //   }
    //   return result;
    // }

  console.log({
    numbers,
    result: mulArrBy2(numbers),
    result: numbers.map(x => x * 2) // same method but much shorter of longer method UPPER ^
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('2. Pakelti masyvo narius kvadratu ir išsaugoti naujame masyve');
console.log('---');
{
  function powerArrBy2(arr) {
    const result = [];
    for(let i = 0; i<arr.length; i++){
      const element = arr[i];
      const elementPowerTwo = element ** 2;
      result.push(elementPowerTwo);
    }
    return result;
  }


  function powerArrTwoBy3 (arr) {
    const result = [];
    for(let i=0; i < arr.length; i++){
      result.push(arr[i] ** 2);
    }
    return result;
  }



  console.log({
    numbers,
    result: powerArrBy2(numbers),
    result2: numbers.map(a => a**2),
    result3: powerArrTwoBy3(numbers)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('3. Padauginti masyvo narius iš jų index\'o (vietos masyve) ir išsaugoti naujame masyve');
console.log('---');
{
  function mulArrElementsByIndex(arr) {
    const result = [];
    for(let i = 0; i<arr.length; i++){
      const currElement = arr[i];
      const indexMultipliedByValue = currElement * i  // i is index value multiplied by currentELement on it index
      result.push(indexMultipliedByValue)
    }
    return result
  }
  console.log({
    numbers,
    result: mulArrElementsByIndex(numbers),
    result1: numbers.map((x, i) => x * i)
  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('4. Atrinkti tiktai teigimų elementų masyvą');
console.log('---');
{
  function filterPositives(arr) {
    const result = [];
    for(let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if(element > 0) {
        result.push(element)
      }
    }
    return result;
  }
   console.log({
     numbers,
     result: filterPositives(numbers),
     result1: numbers.filter(a => a > 0 ? a : null)
   });
}
console.log('---');
console.groupEnd();
console.log();

console.group('5. Atrinkti tiktai neigiamų elementų masyvą');
console.log('---');
{
  function filterNegatives(arr) {
    const result = [];
    for(let i = 0; i< arr.length; i++){
      if(arr[i] < 0){
        result.push(arr[i])
      }
    }
    return result
  }

   console.log({
    numbers,
     result: filterNegatives(numbers),
     result2: numbers.filter(a => a<0 ? a : null)
   });
}
console.log('---');
console.groupEnd();
console.log();

console.group('6. Atrinkti tiktai lyginių skaičių masyvą');
console.log('---');
{
  function filterEquals(arr) {
    const result = [];
    for(let i = 0; i < arr.length; i++){
      if (arr[i] % 2 == 0 && arr[i] > 0){
        result.push(arr[i]);
      }
    }
    return result;
  }
   console.log({
    numbers,
     result: filterEquals(numbers),
     result2: numbers.filter(a => a % 2 === 0 && a > 0 ? a : null)

  });
}
console.log('---');
console.groupEnd();
console.log();

console.group('7. Atrinkti tiktai nelyginių skaičių masyvą');
console.log('---');
{
  function filterOdds(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (element % 2 == 1){
        result.push(element)
      }

    }
    return result
  }
  console.log({
    numbers,
     result: filterOdds(numbers),
     result2: numbers.filter(a => a % 2 === 1 ? a : null)
   });
}
console.log('---');
console.groupEnd();
console.log();

console.group("8. Visas neigiamas vertes masyve padaryti teigiamomis ir išsaugoti į naują masyvą");
{
  function arrAbsoluteValues(arr) {
    const result = [];
    for(let i = 0; i < arr.length; i++){
      if(arr[i] < 0){
        result.push(arr[i] * -1);
      }
    }
    return result;
  }



  const newArr = numbers.filter((x) => x < 0).map((x) => x * -1)

  console.log('---');
  console.log({
    numbers,
    result: arrAbsoluteValues(numbers),
    result2: numbers.map(a => a *= -1),
    newArr
  });
  console.log('---');
}
console.groupEnd();
console.log();

console.group('9. Pakelti visas masyvo reikšmes laipsniu \'index\' ir išsaugoti naujame masyve');
console.log('---');
{
  function powArrElementsByIndex(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i]; //arr[i] elementas ; i - indexas elementas ** index
      result.push(element ** i)
    }

    return result;

  }
   console.log({
     numbers,
    result: powArrElementsByIndex(numbers),
    result2: numbers.map((a, i) => a ** i)
   });
}
console.log('---');
console.groupEnd();
console.log();

console.group('10. Atrinkti tik natūralių skaičių masyvą');
console.log('---');
{
  function filterNaturals(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {      // natural numbers arra / 1 == 0 > 0
      if( arr[i] > 0  &&  arr[i] % 1 === 0){
        result.push(arr[i])
      }
    }
    return result;
  }


   console.log({
     numbers,
     result: filterNaturals(numbers),
     result2: numbers.filter(a => a > 0 && a % 1 ==0 ? a : null),

   });
}
console.log('---');
console.groupEnd();
console.log();

console.group('11. Suapvalinti visas masyvo reikšmes iki sveikų skaičių ir išsaugoti naujame masyve');
console.log('---');
{
  // function absArrElements(arr) {
  //   const result = [];
  //   for(let i = 0; i< arr.length; i++){
  //     if(arr[i] % 1 == 0 && arr[i] < 0) {
  //        let sliced = arr[i] * -1
  //        result.push(sliced)
  //     }
  //   }

  // return result
  // }

  function absArrElements(arr) {
    const result = [];
    for(let i = 0; i< arr.length; i++){
      const remainder = (arr[i] % 1)
      const whole = arr[i] - remainder

      // result.push(remainder > 0.5 ? whole < 0 ? whole -1 : whole + 1)
    }
      return result
  }

   console.log({
     numbers,
     result: absArrElements(numbers),
     result1: numbers.map(Math.round)
   });
}
console.log('---');
console.groupEnd()

console.group('12. Atrinkti kas antrą elementą');
console.log('---');
{
  function filterEverySecond(arr) {
    for(let i = 0; i< arr.length; i+=2){
      console.log(arr[i])
    }
  }
   console.log({
     numbers,
     result: filterEverySecond(numbers),
     result1: numbers.filter((elem, index ) => index % 2 === 0 ? elem : null ) 
   });
}
console.log('---');
console.groupEnd();

console.group('13. Atrinkti kas penktą elementą');
console.log('---');
{
  function filterEveryFifth(arr) {
      const nth5= []
      for(let i = 0; i< arr.length; i++){
        if( i % 5 === 5 - 1){
          nth5.push(arr[i]);
        }
      }
      return nth5;

  }
   console.log({
     numbers,
     result: filterEveryFifth(numbers),
     result1: numbers.filter((elem, index ) => index % 5 === 0)
   });
}
console.log('---');
console.groupEnd();


console.group('14. Sukurti funkciją, kuri ima masyvą ir atspausdina kiekvieną jo reikšmę atskirai: [0] => 64. (nieko negrąžina)');
console.log('---');
{
  function printArr(arr) {
    for(let i = 0; i< arr.length; i++){
      console.log(`[${i}] => ${arr[i]}`)
    }
  }
 

  //using forEach
  // function printArr(arr) {
  //   arr.forEach(x, i) => console.log(`[${i}] => ${arr[x]}`)

  // }


  console.log({
    numbers,
    result: printArr(numbers),
    result1: numbers.forEach((elem, index) => console.log(`[${index}] => ${elem}`))
  });
}
console.log('---');
console.groupEnd();

console.group('15. Sukurti funkciją, kuri ima masyvą ir grąžina visų elementų sumą');
console.log('---');
{
  function sumArr(arr) {
    let result = 0
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      result+= element
    }
    return result;
  }

   console.log({
     numbers,
     result: sumArr(numbers),
     result2: numbers.reduce((base, num) => num+=base)
   });
}
console.log('---');
console.groupEnd()

console.group('16. Sukurti funkciją, kuri ima masyvą ir grąžina visų elementų vidurkį');
console.log('---');
{
  function avgArr(arr) {
    let result = 0;
    const total = arr.length;
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      result += element

    }
    return result / total
  }

   console.log({
     numbers,
     result: avgArr(numbers),
     result1: numbers.reduce((elem, total) => elem+=total) / numbers.length
   });
}
console.log('---');
console.groupEnd()

console.group('17. Sukurti funkciją, kuri ima masyvą ir grąžina didžiausią skaičių masyve.');
console.log('---');
{
  function arrMax(arr) {

    let largest = arr[0]; // The largest number at first should be the first element or null for empty array
    for (let i = 0; i < arr.length; i++) {
      if(arr[i] > largest ) {
        largest = arr[i];
      }
    }
    return largest
  }

   console.log({
     numbers,
     result: arrMax(numbers),
     result1: numbers.reduce((acc, el) => acc = acc > el ? acc : el, 0),
     result2: Math.max(...numbers)
     //
   });
}
console.log('---');
console.groupEnd()

console.group('18. Sukurti funkciją, kuri ima masyvą ir grąžina mažiausią skaičių masyve.');
console.log('---');
{
  function arrMin(arr) {
    let lowest = arr[0];
    for (let i = 0; i < arr.length; i++) {
      // console.log('lowest and arr', lowest, arr[i])
      if(arr[i] < lowest){
        // console.log(lowest)
        lowest = arr[i]
      }
    }
    return lowest
  }

   console.log({
     numbers,
     result: arrMin(numbers),
     result1: numbers.reduce((base, x) => base=base > x ? base : x)
   });
}
console.log('---');
console.groupEnd();


