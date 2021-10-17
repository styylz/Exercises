console.groupCollapsed('1. - https://edabit.com/challenge/ZngT4zDckDugt2JGY');
{
// konstruktorius iraso i classe, 03:20:40

class Player {
	constructor(name, age, height, weight) {
		this.name = name;
		this.age = age;
		this.height = height;
		this.weight = weight;

	}

	getAge() {
		return `${this.name} is age ${this.age}`
	}

	getHeight() {
		return `${this.name} is ${this.height}cm`
	}

	getWeight() {
		return `${this.name} weighs ${this.weight}kg`
	}
}

const p1 = new Player("David Jones", 25, 175, 75)

console.log(p1.getHeight())


}
console.groupEnd();

console.groupCollapsed('2. - https://edabit.com/challenge/yxKoCKemzacK6PECM');
{
  class Calculator {
    //write functions to add(), subtract(), multiply() and divide()//
    add = (a,b) => a + b;
    subtract = (a,b) =>  a - b;
    multiply = (a,b) => a * b;
    divide = (a,b) => a / b;
  }

  const calculator = new Calculator();
  console.log('add' + ': ' + calculator.add(5, 5))
  console.log( 'subtract' + ': ' + calculator.subtract(5, 5))
  console.log( 'multiply' + ': ' + calculator.multiply(5, 5))
  console.log( 'divide' + ': ' + calculator.divide(5, 5))
}
console.groupEnd();

console.groupCollapsed('3. - https://edabit.com/challenge/kGLhgwGaLJsCMS7wS');
{
  class Employee {
    constructor (firstname, lastname) {
      this.firstname = firstname
      this.lastname = lastname
      this.fullname = firstname +' '+ lastname
      this.email = firstname.toLowerCase()+ '.' + lastname.toLowerCase() + '@company.com'
    }
    // need more information about function creation and workin
  }

  const employee1 = new Employee('John', 'Smith')
  const employee2 = new Employee('Adam', 'Blazin')
  const employee3 = new Employee('Obivan', 'Drunkatron')

  const employees = [employee1, employee2, employee3]

  console.table(employees)
  console.table({
    employee_FirstName: employee1.firstname,
    employee_LastName: employee1.lastname,
    employee_FullName: employee1.fullname,
    employee_Email: employee1.email,

  })

}
console.groupEnd();

console.groupCollapsed('4. - https://edabit.com/challenge/iwdZiFucR5wkQsFHu');
{
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    compareAge(other) {
      if(this.age < other.age){
        return `${other.name} is older than me.`

      } else if( this.age > other.age){
        return `${other.name} is younger than me.`

      } else {
         return `${other.name} is the same age as me.`
      }
    }
  }

  const p1 = new Person("Samuel", 24)
  const p2 = new Person("Joel", 36)
  const p3 = new Person("Lily", 24)

  console.log(p1.compareAge(p2))
  console.log(p2.compareAge(p1))
  console.log(p1.compareAge(p3))

}
console.groupEnd();

console.groupCollapsed('5. - https://edabit.com/challenge/Hgb38yhWGwJCMHbRQ');
{
  class Rectangle {
    constructor(sideA, sideB) {
      this.sideA = sideA
      this.sideB = sideB
    }
    getArea(){return this.sideA*this.sideB}
    getPerimeter(){return (this.sideA + this.sideB) *2}
  }


  class Circle {
    constructor(radius){
      this.r = radius
    }

    getArea() {
      return Math.PI * this.r ** 2
    }

    getPerimeter() {
      return Math.PI * 2 * this.r
    }
  }




  const circuit = new Circle(4.44);
  console.log(circuit.getArea());
  console.log(circuit.getPerimeter());

}
console.groupEnd();

console.groupCollapsed('6. - https://edabit.com/challenge/qNMtrtizgssAQqP2b');
{
  class Name {
    constructor(fname, lname){
      this.name = fname[0].toUpperCase() + fname.slice(1).toLowerCase()
      this.lastname = lname[0].toUpperCase() + lname.slice(1).toLowerCase()
      this.fullname = fname[0].toUpperCase() + fname.toLowerCase().slice(1)  + ' ' + lname[0].toUpperCase() + lname.toLowerCase().slice(1)
      this.initials = fname[0].toUpperCase() +'.'+ lname[0].toUpperCase()
    }
  }

   /* [!] One more way to solve with literals
    class Name {
  	  constructor(fname, lname) {
		    this.fname = fname[0].toUpperCase() + fname.slice(1).toLowerCase();
		    this.lname = lname[0].toUpperCase() + lname.slice(1).toLowerCase();
		    this.fullname = `${this.fname} ${this.lname}`;
		    this.initials = `${this.fname[0]}.${this.lname[0]}`;
	  }
   }
    */


   /*[!] Third solution using functions

   class Name {
	constructor(fname,lname){
		this.fname = fname.charAt(0).toUpperCase() + fname.slice(1).toLowerCase();
		this.lname = lname.charAt(0).toUpperCase() + lname.slice(1).toLowerCase();
	}
	get fullname() {
		return this.fname + " "+ this.lname;
	}
	get initials() {
		return this.fname.charAt(0) + "." + this.lname.charAt(0);
	}
}
   */

  const a1 = new Name('john', 'SMITH')
  const a2 = new Name("sARah", "fRolliE")

  console.log(a1.name)
  console.log(a1.lastname)
  console.log(a1.fullname)
  console.log(a1.initials)
  console.log(`----------`)
  console.log(a2.name)
  console.log(a2.lastname)
  console.log(a2.fullname)
  console.log(a2.initials)
}
console.groupEnd();

console.groupCollapsed('7. - https://edabit.com/challenge/HKmJFmZZCX53ff4ke');
{
  /* array of instances meaning [?]  */
  class IceCream {
    constructor(flavor, numSprinkles){
      this.flavor = flavor;
      this.numSprinkles = numSprinkles;
    }
  }

  const ice1 =  new IceCream("index", 13)
  const ice2 =  new IceCream("Vanilla", 0)
  const ice3 =  new IceCream("Strawberry", 7)
  const ice4 =  new IceCream("Plain", 18)
  const ice5 =  new IceCream("ChocolateChip", 3)

  const iceCreams = [ice1, ice2, ice3, ice4, ice5]

  const flavors = {
    'Plain': 0,
    'Vanilla': 5,
    'ChocolateChip': 5,
    'Strawberry': 10,
    'index': 10,
  }
  // remember to match all cases
  console.log(flavors["index"]) // value is 10 > it means that index hold value 10
  function sweetestIcecream(arr) {

    const result = arr.map(element => flavors[element["flavor"]] + element["numSprinkles"])
    return Math.max(...result)
     //returns the sweetness value of the sweetest icecream.

    // Sweetness is calculated from the flavor and number of sprinkles.
                                      //chocolate: 10           13     = 23 (10+23) //
                                     // sprinkle has a sweetness value +  Sweetness Value
  }
  console.log(sweetestIcecream(iceCreams))

}
console.groupEnd();

console.groupCollapsed('8. - https://edabit.com/challenge/9zwdrfW99zmdRhibi');
{
  //  Given an int, figure out how many ones, threes and nines you could fit into the number. You must create a class. You will make variables (class.ones, class.threes, class.nines) to do this

  class OnesThreesNines {
    constructor(num){
      this.num = num
    }

    nines (){
      return Math.floor(this.num / 9)
    }

    ones(){
      return Math.floor(this.num / 1)
    }

    threes(){
      return Math.floor(this.num / 3)
    }

  }

  const n1 = new OnesThreesNines(5)
  console.log(n1.nines())
  console.log(n1.ones())
  console.log(n1.threes())
  const n2 = new OnesThreesNines(6)
  console.log(n2.threes())



}
console.groupEnd();

console.groupCollapsed('9. - https://edabit.com/challenge/7PA4jhWqDYJT4ixLp');
{

class User {

  static userCount = 0;

  constructor(username){
    User.userCount++
    this.username = username
  }

  userName () {
    return this.username
  }

}

const u1 = new User("johnsmith10");
const u2 = new User("marysue1989");
const u3 = new User("al4n_rodrick");
const u4 = new User("Moldevier");
const u5 = new User("kxander");
const u6 = new User("Sander");


console.log(User.userCount);
console.table({
  u1: u1.userName(),
  u2: u2.userName(),
  u3: u3.userName(),
  u4: u4.userName(),
  u5: u5.userName(),
  u6: u6.userName(),

});

}
console.groupEnd();

console.groupCollapsed('10. - https://edabit.com/challenge/s5Sz2ovKsvtGxNGgn');
{

  class Book {
    constructor (title, author){
      this.title = title;
      this.author = author;
    }

    getTitle (){
      return `Title: ${this.title}`
    }

    getAuthor (){
      return `Author: ${this.author}`
    }
  }

  const PP = new Book('Pride and Prejudice', 'Jane Austen ');
  const H = new Book('Hamlet', 'William Shakespeare');
  const WP = new Book('War and Peace', 'Leo Tolstoy ');

  console.log(PP.title);
  console.log(PP.author);
  console.log(PP.getAuthor());
  console.log(PP.getTitle());
}
console.groupEnd();
