/*
------------------------------------ 1 Dalis ------------------------------------
1. Sukurti objektų(žmonių) masyvą su 8 elementais, kuriame būtų:
  - name
  - surname
  - age
  - height
  - weight
  - sex
2. Panaudojant array.foreach:
  - Atspausdinti kiekvieną elementą
  - Atspausdinti kiekvieno elemento pilną vardą
  - Atspausdinti kiekvieno elemento kūno masės indeksą
3. Panaudojant array.filter atrinkti į naują masyvą ir po to atspausdinti žmones:
  - kurių vardas ilgesnis nei 6 simboliai
  - kurių svoris didesnis nei 80kg
  - kurie aukštesni nei 185cm
4. Panaudojant array.map atrinkti į naują masyvą ir po to atspausdinti
  - ūgius
  - svorius
  - ūgius, svorius ir amžius : [{height, weight, age}, ...]
  - KMI indeksus
  - KMI indeksus ir amžius
5. Panaudojant array.reduce suskaičiuoti ir po to atspausdinti
  - svorių vidurkį
  - ūgio vidurkį
------------------------------------ 2 Dalis ------------------------------------
0. Pasinaudojant 1 dalies elementų masyvu, sukurti Person prototipų(Class) masyvą:
    Person klasėje:
    - sukurti vidinį metodą: getBMI();     // suskaičiuoja kūno masės indeksą
    - sukurti vidinį metodą: toString();   // atspausdina žmogų su esamom savybėm
1. Atrinkti moteris, kuriuos jaunesnės nei 20 metų ir svoris didesnis nei 70kg
2. Atrinkti vyrus, kurie vyresni nei 25 metai ir KMI mažesnis nei 18,5
3. Atrinkti vaikus, su antsvoriu (KMI > 30)
4. Atrinkti pensininkus, su antsvoriu (KMI > 30)
5. Atrinkti visus, kieno KMI nepatenka į rėžius [18.5; 25]

------------------------------------ 3 Dalis -------------------------------------
Peržiūrėti video:
https://www.youtube.com/watch?v=JaMCxVWtW58

Rekomenduoju pasikartoti greitasias komandas
*/

const humans = [
    {
        name: 'Heimerisanas',
        surname: 'Dongeris',
        age: 68,
        height: 2.00,
        weight: 149,
        sex: 'male',
    },

    {
        name: 'Sion',
        surname: 'Bantaiga',
        age: 26,
        height: 2.10 ,
        weight:  20,
        sex: 'male',
    },
    {
        name: 'Anivia',
        surname: 'Faizer',
        age: 50,
        height: 1.95 ,
        weight:  78,
        sex: 'female',
    },
    {
        name: 'Frostenberg',
        surname: 'Icebergen',
        age: 17,
        height: 2.10 ,
        weight:  140,
        sex: 'male',
    },
    {
        name: 'Leaf',
        surname: 'Leafovic',
        age: 43,
        height: 1.76 ,
        weight:  73,
        sex: 'male',
    },
    {
        name: 'Alana',
        surname: 'Pugatiova',
        age: 17,
        height: 1.69 ,
        weight:  82,
        sex: 'female',
    },
    {
        name: 'Blessevic',
        surname: 'Boomerangevic',
        age: 24,
        height: 1.70 ,
        weight:  60,
        sex: 'male',
    },
    {
        name: 'Arteon',
        surname: 'VolksWagonovic',
        age: 30,
        height: 2.50 ,
        weight:  600,
        sex: 'male',
    },
]


console.group(`1 part`)
{
    console.groupCollapsed(`2. Panaudojant array.foreach: `)
    {
      humans.forEach(x => console.log(x)); //Atspausdinti kiekvieną elementą
      console.log(`----`)
      humans.forEach(x => console.log(`${x.name} ${x.surname}`)); //Atspausdinti kiekvieno elemento pilną vardą
      //BMI = (weight) / (height * height)
      console.log(`----`)
      humans.forEach(x => console.log(`[${x.name}] => BMI: ${x.weight / (x.height * x.height)}`)) //Atspausdinti kiekvieno elemento kūno masės indeksą
    }
    console.groupEnd();

    console.groupCollapsed(`3. Panaudojant array.filter atrinkti į naują masyvą ir po to atspausdinti žmones: `)
    {

        //kurių vardas ilgesnis nei 6 simboliai
        const nameIsLongerThanSix = humans.filter(x => x.name.length > 6 ? 1: null )
        nameIsLongerThanSix.forEach(x => console.log(x.name))

        // kurių svoris didesnis nei 80kg
        const weightIsBiggerThan80 = humans.filter(x => x.weight > 80 ? console.log(x) : null)

        // kurie aukštesni nei 185cm
        const heigherThan185cm = humans.filter(x => x.height > 1.85 ? x: null)
        console.log(heigherThan185cm)

    }
    console.groupEnd();

    console.groupCollapsed(`4. Panaudojant array.map atrinkti į naują masyvą ir po to atspausdinti`);
    {
        // const heights = humans.map((x, i) => {return {id: i, height: x.height}}) // is masyvo i objekta

        //   - ūgius
        const heights = humans.map(x => x.height)
        console.log( heights)

        //   - svorius
        const weights = humans.map(x => x.weight)
        console.log('weights ' + weights)

        //   - ūgius, svorius ir amžius
        const propertiesHWA = humans.map(x => {return {height: x.height, weight: x.weight, age: x.age}})
        console.log(propertiesHWA)

        //   - KMI indeksus
        const kmiCalc = x => Math.round(100 * x.weight / (x.height * x.height)) / 100

        // lambda i funkcija perduos pirma elementa
        const kmiIndexes = humans.map(kmiCalc)
        console.log(kmiIndexes)

        //   - KMI indeksus ir amžius
        const kmiAgeIndexes = humans.map(x => {return {KMI: kmiCalc(x), age: x.age }} )
        console.log(kmiAgeIndexes)
        //one more way
        /*
        const propertiesHWA = humans.map(({height, weight, age})=> {return {
            height: height,
            weight: weight,
            age: age,
        }});
        */
    }

    console.groupCollapsed(`5. Panaudojant array.reduce suskaičiuoti ir po to atspausdinti`)
    {
        console.log(`svorių vidurkįs`)
       //svorių vidurkį
        const weightAVG = humans.reduce((base, value) => base+value.weight ,0) / humans.length
        console.log(weightAVG)

        console.log(`ūgio vidurkis`)
       //ūgio vidurkį
       const heightAVG = humans.reduce((base, value) => base+value.height ,0) / humans.length
        console.log(heightAVG)
    }
    console.groupEnd();
}
console.groupEnd();







console.groupCollapsed('2part')
{
    class Person {
        name;
    surname;
    height;
    weight;
    sex;
    age;
        constructor({name, surname, age, weight, height, sex}){
            this.name = name;
            this.surname = surname;
            this.age = age;
            this.weight = weight;
            this.height = height;
            this.sex = sex;
        }

        get BMI(){
            return Math.round(10 * this.weight / this.height  ** 2) / 10;
        }

         BMI(){
            return Math.round(10 * this.weight / this.height ** 2) / 10;
        }

        toString(){
            return this.name + ' ' + this.surname + ' ' + this.age +'\n\t'+  this.weight  + ' '  +  this.height + ' '  +this.sex

        }
    }

    //#0
    const peopleArray = humans.map(p => new Person(p));
    console.log(peopleArray)
    peopleArray.forEach(p => console.log(p.toString()))


    console.group('1. Atrinkti moteris, kuriuos jaunesnės nei 20 metų ir svoris didesnis nei 70kg')
    {
        const femaleYounges = peopleArray.filter(prop => prop.sex==='female' && prop.age < 20 && prop.weight> 70);
        console.table(femaleYounges);
    }
    console.groupEnd();

    console.group('2. Atrinkti vyrus, kurie vyresni nei 25 metai ir KMI mažesnis nei 18,5');
    {

        const maleYounges = peopleArray.filter(prop => prop.sex==='male' && prop.age > 25 && prop.BMI() < 18);

        console.table(maleYounges);

    }
    console.groupEnd();

    console.group('3. Atrinkti vaikus, su antsvoriu (KMI > 30)');
    {
        const childees = peopleArray.filter(child => child.age < 18 && child.BMI() > 30);

        console.table(childees);
    }
    console.groupEnd();

    console.group('4. Atrinkti pensininkus, su antsvoriu (KMI > 30)');
    {
        const elders = peopleArray.filter(elder => elder.age > 65 && elder.BMI() > 30);

        console.table(elders);
    }
    console.groupEnd();
    console.group('5. Atrinkti visus, kieno KMI nepatenka į rėžius [18.5; 25]');
  {
      const rangeBMI = peopleArray.filter(human => {
          const bmi = human.BMI();
          return bmi < 18.5 || bmi > 25
      })

      console.table(rangeBMI)

  }
  console.groupEnd();

}
console.groupEnd();