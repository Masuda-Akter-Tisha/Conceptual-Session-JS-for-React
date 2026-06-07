const person = {
    name: 'Tisha',
    age: 23,
    'is good': true,
    occupation: 'student',
    address: 'B-Baria',
    job: {
        name: 'Web-Dev',
        salary : 30000,
        location: {
            address: 'USA-3047'
        },
    }
}

const {name,'is good' : isGood, address, job: {location: {address: locationAdd}}} = person;
console.log(name, isGood, address, locationAdd);
