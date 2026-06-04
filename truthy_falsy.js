let number = 23 + 'is';
if ('') {
    console.log('it is true');   
}
else {
    console.log('it is false');   
}

let arr = [1,2,3,4];
const isExistThreeHundred = arr.find (el => el === 300);
 if (isExistThreeHundred) {
    console.log('triggered if block');
 }
 else {
    console.log('triggered else block');
    
 }