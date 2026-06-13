// ||, &&, optional chaining 
const name = 'Hablu';
const age = 23;
const isMatured = true;

const test1 = isMatured || name;
const test2 = isMatured && name;

// console.log(test1);
// console.log(test2);


// if (test2) {
//     console.log('biye korte parbe');
// }
// else {
//     console.log('biye korte parbe nah');
    
// }

const student = {
    name : 'Hablu',
    age : 24,
    'is good' : {
        brain : true,
    }
}
console.log(student['is good']?.work);
