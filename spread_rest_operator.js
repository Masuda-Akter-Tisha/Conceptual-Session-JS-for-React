// const arr = [20, 30, 45, 67];
// console.log(arr);

// const arr2 = arr;
// arr2.push (44);

// console.log(arr);

// console.log(arr2);

const arr = [10, 20, 30, 40];
// console.log(...arr);

const arr2 = [...arr];
arr2.push (50);

console.log(arr);
console.log(arr2);


const arr3 = [10, 20];
const arr4 = [30,40];

const newArr = [...arr3, ...arr4];
console.log(newArr);


const person = {
    name: 'Tisha',
    age: 23
}
console.log(person);

const newPerson = {...person};
newPerson.job = 'Developer';
console.log(newPerson);
console.log(person);

const fruit1 = {
    name: 'apple',
    price: 300
}
const fruit2 = {
    nam: 'orange',
    pri: 400
}

const fruits = {...fruit1, ...fruit2};
console.log(fruits);

// rest operators
function myFunc (a, ...rest) {
    console.log(arguments);
    
    console.log (a, rest)
}
myFunc (10, 20, 30, 50);

const sum = (...numbers) => {
   let total = 0;
   for (const number of numbers) {
    total += number;
   }
   return total;
}

console.log(sum (10, 20, 33, 40, 55));
