console.groupCollapsed('1 - https://edabit.com/challenge/nuXdWHAoHv9y38sn7');
{
    drinks = [
        {name: "lemonade", price: 50},
        {name: "lime", price: 10}
      ]

    //   const sortDrinkByPrice = drinks.sort((a, b) => a.price - b.price)

      function sortDrinkByPrice( drinks) {
          const sorted = drinks.sort(function(a, b){
            return a.price - b.price
          })
          return sorted

      }


      const sorted = sortDrinkByPrice(drinks)

      console.log(sorted)



}
console.groupEnd();

console.groupCollapsed('2 - https://edabit.com/challenge/9KEKJG5PZTFmG3Zau');
{
    const open= []

    function addName(obj, name, value) {
         obj[name] =value
        return obj
    }

    console.log(addName({}, 'brutus', 300))
    console.log(addName({ piano: 500 }, "Brutus", 400))
    console.log(addName({ piano: 500, stereo: 300 }, "Caligula", 440))

    // adding items one by one to the array
    open.push(addName({}, 'brutus', 300))
    open.push(addName({ piano: 500 }, "Brutus", 400))
    open.push(addName({ piano: 500, stereo: 300 }, "Caligula", 440))


}
console.groupEnd();

console.groupCollapsed('3 - https://edabit.com/challenge/48EJWLhF224na8po3');
{

    const generations = {
        '-3': {m:'great grandfather', f:'great grandmother'	},
        '-2': {m:'grandfather', f:'grandmother'},
        '-1': {m:'father', f:'mother'},
        '0': {m: 'me', f:'me'},
        '1': {m: 'son', f:'daughter'},
        '2': {m: 'grandson', f:'granddaughter'},
        '3': {m: 'great grandson', f:'great granddaughter'},
    }

    function generation(x, y) {
        return generations[x][y];
    }

    console.log(generation(2, "f"))
    console.log(generation(-3, "m"))
    console.log(generation(1, "f"))
}
console.groupEnd();

console.groupCollapsed('4 - https://edabit.com/challenge/i6YqzHcSiPiEQKjeX');
{
    const hand = [
        { tile: "N", score: 1 },
        { tile: "K", score: 5 },
        { tile: "Z", score: 10 },
        { tile: "X", score: 8 },
        { tile: "D", score: 2 },
        { tile: "A", score: 1 },
        { tile: "E", score: 1 },
      ]




     function maximumScore(tileHand) {
         return tileHand.reduce((previousValue, currentValue) => previousValue + currentValue.score ,0)

     }
     console.log(maximumScore(hand))


 }
console.groupEnd();

console.groupCollapsed('5 - https://edabit.com/challenge/8s2jy9hR2TAeQinKD');
{

    function calculateDifference(obj, limit) {
        let result = 0
        for(let key in obj){
            result += obj[key]
        }
        return result - limit
    }

    /*
     function calculateDifference(obj, limit) {
    const newArr = Object.values(item) //gets input from function call and takes only values
    let total = 0; // creating new sum variable to calculate total value starting with 0
    for (let i = 0; i < newArr.length; i++) { // iterates only once because of one item
      total += newArr[i]  // adding item value which was passed to the function
      console.log(newArr[i])
    }
    return total - limit // minus limit to getsum
    }
    */

    console.log(calculateDifference({ "baseball bat": 20 }, 5))
    console.log(calculateDifference({ skate: 10, painting: 20 }, 19))
    console.log(calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400))
}
console.groupEnd();

console.groupCollapsed('6 - https://edabit.com/challenge/pPNAs5PvB3WvnDwDM');
{

    function toArray(obj) {
        return Object.entries(obj)
    }

    console.log(toArray({ a: 1, b: 2 })) // [["a", 1], ["b", 2]]
    console.log(toArray({ shrimp: 15, tots: 12 })) // [["shrimp", 15], ["tots", 12]]
    console.log(toArray({})) // []
}
console.groupEnd();

console.groupCollapsed('7 - https://edabit.com/challenge/QXWM2oo7rQNiyDsip');
{

      function inkLevels(inks) {
            return Math.min(...Object.values(inks))
            //get values of in and return lowest number from an object
    }
    console.log(
        inkLevels({
          cyan: 23,
          magenta: 12,
          yellow: 10,
        })
      );

}
console.groupEnd();

console.groupCollapsed('8 - https://edabit.com/challenge/pLNavsePxJ87t9Nak');
{
    const stolenItems = {
        tv: 30,
        skate: 20,
        stereo: 50,
      }

      const stolenItems1 = {
        painting: 20000,
      }

      const stolenItems2 = {}

      function calculateLosses(obj) {
        let sum = 0;
        for(let ele in obj){
            sum += obj[ele];
        }
        return sum > 0 ? sum : 'Lucky you!';
    }

    console.log(calculateLosses(stolenItems))
}
console.groupEnd();
