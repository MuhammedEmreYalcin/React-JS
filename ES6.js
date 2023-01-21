// Arrow Functions 
const printMyName = (name,age) =>{
    console.log(name,age)
}

printMyName("Emre",22); // Emre 22

const multiply = (number) =>{
    return number * 2
}

printMyName(4); // 8


// Old Way Classes 
class Human {
    constructor(){
        this.gender = "Male";
    }


    printGender(){
        console.log(this.gender);
    }
}

class Person extends Human {
    constructor(){
      super();
        this.name = "Emre";
    }


    printMyName(){
        console.log(this.name);
    }
}
const person = new Person();
person.printMyName(); // Emre
person.printGender(); // Male


// New Way Classes 
class Human {
    gender = "Male";


printGender = () => {
    console.log(this.gender);
}
}

class Person extends Human {
    name = "Emre";

printMyName = () => {
    console.log(this.name);
}
}

const person = new Person();
person.printMyName(); // Emre
person.printGender(); // Male


// Spread Operator (Used to split up arra elements OR objects properities)
const numbers = [1,2,3];
const newNumbers = [... numbers, 4]
console.log(newNumbers) // [1, 2, 3, 4]


// Rest Operator (Used to merge a list of functions arguments into an array)
const filter = (...args) => {
    return args.filter(el => el === 1);
  }
console.log(filter(1,2,3)); // [1]


//  Destructuring (Easily extract array elements or objects properities and store them in variables)
const number = [1,2,3];
[num1,num2]  = number;
console.log(num1,num2) //1,2