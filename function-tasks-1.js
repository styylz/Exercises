console.groupCollapsed('1. Parašykite funkciją, kuri grąžina pirmą masyvo elementą.');
{
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  function firstArrEl (arr) {
    return arr[0];
  }

  const firstChar = firstArrEl(nums)
  console.log(firstChar)
}
console.groupEnd();

console.groupCollapsed('2. Parašykite funkciją, kuri pašalina pirmą masyvo elementą ir jį grąžina.');
{
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  function firstArrElChar (arr) {
    return arr.shift();
  }

  const arrChar = firstArrElChar(nums)
  console.log(arrChar)
}
  // ...sprendimas ir spausdinimas
  // google: mdn remove first array element

console.groupEnd();

console.groupCollapsed('3. Parašykite funkciją, kuri grąžina paskutinį masyvo elementą.');
{
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  function lastArrElChar (arr) {
    return arr[arr.length - 1];
  }


  console.log( lastArrElChar(nums))

}
console.groupEnd();

console.groupCollapsed('4. Parašykite funkciją, kuri pašalina paskutinį masyvo elementą ir jį grąžina.');
{
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  function lastArrElChar (arr) {
    return arr.pop();
  }

  const arrChar = lastArrElChar(nums)
  console.log(arrChar)
  // ...sprendimas ir spausdinimas
  // google: js last array element
}
console.groupEnd();

console.groupCollapsed('5. Parašykite funkciją, kuri grąžina elementų kiekį masyve');
{
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  function calcArr(arr) {
    return arr.length;
  }

  console.log(calcArr(nums));

  // ...sprendimas ir spausdinimas
  // google: js element count in array
}
console.groupEnd();

console.groupCollapsed('6. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą');
{
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  function lastItemIndex(arr) {

     return arr.length - 1

  }

  console.log(lastItemIndex(nums))
  // ...sprendimas ir spausdinimas
  // google: js last array element index
}
console.groupEnd();

console.groupCollapsed('7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis');
{
  // ...sprendimas ir spausdinimas
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // let elements = nums.slice(); // copy of array

  function indexOfEveryEl (arr){
    for(let i = 0; i < arr.length; i++){
       console.log(arr.indexOf(arr[i]));  // arr[i] > [0] -> 1 [1] -> 2 [2] -> 3 ...
    }
  }
  indexOfEveryEl(nums)
}
console.groupEnd();

console.groupCollapsed('8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes eilutėmis [?]');
{
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  function evEl (arr) {
    for(let i = 0; i < arr.length; i++){
      console.log(arr[i])
    }
  }

  evEl(nums);

  // ...sprendimas ir spausdinimas
}
console.groupEnd();

console.groupCollapsed('9. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  ');
// [0] => reikšmė
// [1] => reikšmė
// [2] => reikšmė
{
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  function indexValue(arr){
    for(let i = 0; i < arr.length; i++){
      console.log(`[${i}] => ${arr[i]}`);
    }
  }

  // function indexValue2(a){
  //   for(let i = 0; i < a.length; i++){
  //     everyElement = a[i]
  //     console.log(everyElement);
  //     console.log(`[${a.indexOf(everyElement)}] => ${nums[i]}`);
  //   }
  // }

  indexValue(nums);

  // indexValue2(nums);

  // ... sprendimas ir spausdinimas
  // google: js string literal
}
console.groupEnd();

console.groupCollapsed('10. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo.');
{
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  function reverseArr (arr) {
    for(let i = arr.length - 1; i >= 0; i--){
      console.log(arr[i]);
    }
  }

  reverseArr(nums);
  // ...sprendimas ir spausdinimas
  // google: js iterate through array reverse
}
console.groupEnd();

console.groupCollapsed('11. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ...');
{
  function printArrElementIndexesInline(arr) {
    let result = '';
    for (let i = 0; i < arr.length; i++) {
      result += i + ', ';
    }
    result = result.slice(0, -2);
    console.log(result);
  }
  printArrElementIndexesInline([4, 5, 6, 7]);
  printArrElementIndexesInline(['labas', 'as', 'krabas', '!']);
}
console.groupEnd();

console.groupCollapsed('12. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48');
{
  function printArrElementsInline(arr) {
    console.log('[' + arr.join(', ') + ']');
  }

  printArrElementsInline([4, 5, 6, 7]);
  printArrElementsInline(['labas', 'as', 'krabas', '!']);
}
console.groupEnd();

console.groupCollapsed('13. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:');
//  [0]=>17 [1]=>8 [2]=>88 ...
{

  function printArrElementsFormattedInline(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(`[${i}]=>${arr[i]}`);
    }
    console.log(result.join(' '));
  }
  printArrElementsFormattedInline([4, 5, 6, 7]);
  printArrElementsFormattedInline(['labas', 'as', 'krabas', '!']);
}
console.groupEnd();