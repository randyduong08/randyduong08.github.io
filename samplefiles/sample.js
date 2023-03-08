// First Javascript code
console.log('Testdsadsaer');
// Variables obviously can't be a reserved keyword
// variable name can't start with a number
// variable cant have space or hyphen
let eName = 'Randy', lastName = "Duong", age = 4;
age = 30; // Number literal 
let isApproved = true; //Boolean literal
let testing; //undefined literal
let test = undefined; //undefined literal 
let nothing = null; // null 

let person = {
    eName: 'Randy', 
    age: 30
};

let selectedColours = []; //empty array literal 
let colours = ['red','blue'];


const interestRate = 0.3; //const makes it constant
console.log(eName);
console.log(age);
console.log(interestRate);

console.log(person);

person.eName = 'Bofa';
person['eName'] = 'Bofa';

// performing a task
function greet(name){
    console.log(name);
}

//calculate value
function square(number){
    return number * number; 
}

greet(person.eName);

let nom = square(2);
greet(nom);
greet(square(2));