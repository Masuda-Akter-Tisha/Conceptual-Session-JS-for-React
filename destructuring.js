const numbers = [11, 34, 23, 45, 33];
// console.log(numbers[3]);
// numbers[0] = 89;
// console.log(numbers);

let [first, second, third, , five, ...rest] = [20, 44, 67, 55, 78, 33, 45, 67];
second = 30;
console.log([first, second, third, five, ...rest]);

let {name : person, age, street, job : {salary}, money = 300, ...rest2} = {
    name: 'hablu',
    age: 26,
    address: 'dhaka, bangladesh',
    street: 'green road',
    job : {
        salary: 25000,
    },
    money : 400,
    'is good' : true,
    food : 'rice'
}
console.log(salary = 30000);
console.log(rest2);


const employee = [
    {
        name: 'jhon_doe',
        age: 34
    },
    {
        name: 'smith_jhon',
        age: 24
    },
    {
        name: 'jingalala_ho',
        age: 27
    }
]

for (const {name} of employee) {
    console.log(`hello! ${name}`);
    
}

let obj = {
    name: 'hablu',
    age: 25,
    address: 'B-Baria',
    job: {
        title: 'web-dev',
        salary: 30000,
        location : {
            address: 'US-3459',
        }
    },
}

let {name,address, job:{location:{address : locationAdd}}} = obj;

console.log(name, address, locationAdd);
