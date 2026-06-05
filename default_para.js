const sum = (x, y, z = 0) => x + y+ z;
const result = sum (10, 44);
console.log(result);

const welcome = (name = 'man') => {
    console.log(`hello! ${name}, welcome`);
    
}
welcome ('himo');

