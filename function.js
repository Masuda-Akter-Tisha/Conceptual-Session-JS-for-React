// traditional function
function myFunc (a, b) {
    console.log(a,b);
    
}
myFunc (1, 2);

// expression function
const myFunc2 = function (x, y) {
    console.log(x, y);
    
}
myFunc2 (3,4);

// Arrow function
const myFunc3 = (a, b) => a * b;
console.log( myFunc3 (2, 3));
