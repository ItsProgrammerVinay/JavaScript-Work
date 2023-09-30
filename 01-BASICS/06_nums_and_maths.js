const score=100.45 //in primitive copy of the variable is saved in stack memory

// console.log(score.toFixed(2));
// console.log(score.toPrecision(2));
console.log(score.toString().length);
console.log(typeof score);

const salary=10000000

console.log(salary.toLocaleString('en-In'));

console.log(Math.round(4.5));
console.log(Math.ceil(4.5));
console.log(Math.floor(4.5));
console.log(Math.abs(-53));
console.log(Math.min(4,5,3,38,6,1));
console.log(Math.max(4,2.5,64,6,7,6,99.6));


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
console.log(Math.random()*10);
console.log(Math.round(Math.random()*10+12))