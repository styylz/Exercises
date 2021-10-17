const people = [
  {
    name: 'Jonas',
    surname: 'Jonaitis',
    sex: 'male',
    age: 26,
    income: 1200,
    married: false,
    hasCar: false
  },
  {
    name: 'Severija',
    surname: 'Piktutytė',
    sex: 'female',
    age: 26,
    income: 1300,
    married: false,
    hasCar: true
  },
  {
    name: 'Valdas',
    surname: 'Vilktorinas',
    sex: 'male',
    age: 16,
    income: 0,
    married: false,
    hasCar: false
  },
  {
    name: 'Virginijus',
    surname: 'Uostauskas',
    sex: 'male',
    age: 32,
    income: 2400,
    married: true,
    hasCar: true
  },
  {
    name: 'Samanta',
    surname: 'Uostauskienė',
    sex: 'female',
    age: 28,
    income: 1200,
    married: true,
    hasCar: true
  },
  {
    name: 'Janina',
    surname: 'Stalautinskienė',
    sex: 'female',
    age: 72,
    income: 364,
    married: false,
    hasCar: false
  }
];
console.groupCollapsed('1. Atspausdinkite visus žmones eilutėmis');
{
  people.forEach(function(person) {
    console.log(person);
  })

  // function declar

}
console.groupEnd();

console.groupCollapsed('2. Atpausdinkite visus žmonių vardus ir pavardes, atskirtus brūkšneliu');
{
  people.forEach(person => console.log(`${person.name} - ${person.surname}`));
}
console.groupEnd();

console.groupCollapsed('3. Atspausdinkite visų žmonių vardus ir pavardes bei santuokos statusą');
{
  people.forEach(person => console.log(`${person.name} - ${person.surname}, married: ${person.married}`));

  function printFullnameAndMarried(person) {
    console.log(`${person.name} ${person.surname}: ${person.married ? 'married' : 'not married'}`);
  }

  people.forEach(printFullnameAndMarried)
}
console.groupEnd();

console.groupCollapsed('4. Sukurtite masyvą su lytimis ir uždirbamu pinigų kiekiu, pagal pradinį žmonių masyvą');
{
  // const pplStatus = people.map(person => `${person.sex} ${person.income}`)
  // console.table(pplStatus)

  function getSexAndIncome(person) {
    return {
      sex: person.sex,
      income: person.income
    }
  }

  const namesAndSex = people.map(getSexAndIncome);
  console.table(namesAndSex);

}
console.groupEnd();

console.groupCollapsed('5. Sukurtite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą');
{
  const personNameSurn= people.map(person => `${person.name} ${person.surname}, ${person.sex}`);
  console.log(personNameSurn)
}
console.groupEnd();

console.groupCollapsed('6. Atspausdinkite visus vyrus');
{
  people.forEach(person => person.sex === 'male' ? console.log(`${person.name} ${person.sex}`) : 0);
  // ar gali buti ternary if'as tureti tik viena if be else'o ?

}
console.groupEnd();

console.groupCollapsed('7. Atspausdinkite visas moteris');
{
  people.forEach(person => person.sex === 'female' ? console.log(`${person.name} ${person.sex}`) : 0)
}
console.groupEnd();

console.groupCollapsed('8. Atspausdinkite žmonių vardus ir pavardes, kurie turi mašinas');
{
  people.forEach(person => person.hasCar != false ? console.log(`${person.name} ${person.surname}`) : 0);
}
console.groupEnd();

console.groupCollapsed('9. Atspausdinkite žmones kurie yra susituokę');
{

  people.forEach(person => person.married ? console.log(person) : null)

}
console.groupEnd();

console.groupCollapsed('10. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį');
{

      function isMaleDriver (person) {
        return person.hasCar && person.sex === 'male';
      }

      function isFemaleDriver (person) {
        return person.hasCar && person.sex === 'female';
      }

      const driverCountSexSecond = {
        male: people.filter(isMaleDriver).length,
        female: people.filter(isFemaleDriver).length
      };

      console.log(driverCountSexSecond);

}
console.groupEnd();

console.groupCollapsed('11. Performuokite žmonių masyvą, jog kiekvieno žmogaus savybė "income", taptų "salary"');
{
  const incomeToSalary = people.map(function(obj) {

       obj['salary'] = obj['income'];
       delete obj['income'];
       return obj;
  } )

  console.log(incomeToSalary)

}
console.groupEnd();

console.groupCollapsed('12. Suformuokite žmonių masyvą, kuriame nebūtų lyties, vardo ir pavardės');
{
  const noNameSurSex = people.map(function({age, hasCar, married, salary}) {
    return {
      age,
      hasCar,
      married,
      salary
    }
  })

  console.log(noNameSurSex);
}
console.groupEnd();

console.groupCollapsed('13. Suformuokite žmonių masyvą, kuriame "name" ir "surname" savybės, būtų pakeistos "fullname" savybe');
{


  function addFullname(person) {
    return {
      fullname: person.name + ' ' + person.surname,
      age: person.age,
      hasCar: person.hasCar,
      married: person.married,
      salary: person.salary,
      sex: person.sex
    };
  }

  const fullname = people.map(addFullname);

  console.log(fullname)
}
console.groupEnd();



console.group('14. Youtube HomeWork video about itteration methods.. Create your own array')
{
  const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];

  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

  // for (let i= 0; i<companies.length; i++) {

  //   console.log(companies[i]);
  // }

  // forEach <>
  // companies.forEach(function(company) {
  //   console.log(company.name)
  // })

  // filter <>
  // get 21 older

  let canDrink = []  //array created for 21 or over to hold data about newAges
  // for(let i= 0; i < ages.length; i++){
  //   if(ages[i] >= 21){
  //     canDrink.push(ages[i])
  //   }
  // }

  // console.log(canDrink);

 const canDrink2 = ages.filter(function(age){
    if(age >= 21) {
      return true;
    }
  })

  const canDrink3 = ages.filter(age => age>=21 ? true : false ); // always try to use newer methods
  //it will make you look a lot better programmer

  console.log(canDrink3);

  // Filter Companies

 const retailCompanies = companies.filter(company => company.category === 'Retail' ? true : false)

    // kaip parasyti else kad jokiu kompaniju nerado ir isvesti i konsole tik viena karta 'nera retail imoniu'

  console.log(retailCompanies)


  // get 80 companies
  const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start <= 1990))

  console.log(eightiesCompanies)

  // Companies that lasted 10 years
  const companiesTenYears = companies.filter(function(company){
    let age = company.end - company.start
    if (age >= 10){
      return true;
    }
  })
  console.log(companiesTenYears)

  //shorthand notation from companies that lasted 10 years
  const tenYearsCompanies = companies.filter(company => (company.end - company.start >= 10))

  console.log(tenYearsCompanies)

  console.group('14.3 map method')
  {
    // Create array of company names
    const companyNames = companies.map(company => company.name)

    console.table(companyNames)

    // Create array of company names v2
    const namesCompanies = companies.map(company => `${company.name} [${company.start} - ${company.end}]`)

    console.table(namesCompanies)

    // Using ages array and square root

    const agesSquare = ages.map(age => Math.sqrt(age));
    const agesTimesTwo = ages.map(age => age * 2);

    console.log(agesSquare);
    console.log(agesTimesTwo);

    // shorthand of square and multiply by two

    const agesMap = ages
      .map(age => Math.sqrt(age))
      .map(age => age * 2);

    console.log(agesMap);
  }
  console.groupEnd();

  console.group('14.4 sort method');
  {
    // Sort companies by start
    // Longer way of sorting ASC
    const sortedCompaniesV2 = companies.sort((a, b) => (a.start> b.start) ? 1 : -1);
    console.log(sortedCompaniesV2);

    // shorthand for sorting ASC
    const sortedCompanies = companies.sort(function(c1, c2){
      return c1.start - c2.start;
    });

    console.log(sortedCompanies);

    //Sort ages
    // sort method will work fine without function but when it will meet one single number it will create failure. So use function for sorting etc.
    const sortNumberAsc = ages.sort((a, b) => a - b );

    console.log(sortNumberAsc);

  }
  console.groupEnd();


  console.group('14.5 reduce method');
  {
    // for loop example of creating sum from the array
    let ageSum = 0;
    for(let i = 0; i < ages.length; i++){
      ageSum += ages[i]
    }

    console.log(ageSum)


    // Reduce example for creating sum from the array

    const agesSum = ages.reduce((total, age) => total + age, 0) // 0 is the second parameter for total

      console.log(agesSum)

    // reduce to take all years of all companies

    const totalYearsCompanies = companies.reduce(function(total, company) {
      return total + (company.end - company.start);
    }, 0)
    console.log(totalYearsCompanies);

    // Arrow exampl

    const arrowYearsCompanies = companies.reduce((total, company) => total + (company.end - company.start), 0);

    console.log(arrowYearsCompanies);

    //[#] COmbine methods

    const combined = ages
    .map(age => age * 2)
    .filter(age => age >= 40)
    .sort((a, b) => b - a)
    .reduce((a,b) => a + b, 0)

    console.log(combined)


  }
  console.groupEnd();
}


console.groupEnd();

