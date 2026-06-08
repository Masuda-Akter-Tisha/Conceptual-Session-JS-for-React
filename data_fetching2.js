
const dataLoad = async () => {
    let res = await fetch ('https://jsonplaceholder.typicode.com/users');
    const data = await res.json ();
    console.log(data);
    
}
dataLoad ();

const data = 'B12-brahmanbaria';
console.log(data);
