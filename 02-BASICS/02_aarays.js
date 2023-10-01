const marvel_heros=["Ironman","thor","hulk","wonda"]

const dc=["spiderman","superman","flash"]

marvel_heros.push(dc)

console.log(marvel_heros);
console.log(marvel_heros[2][2]);
console.log(marvel_heros.concat(dc));

const allHeros=[...marvel_heros,...dc]
console.log(allHeros);

const arr3=[1,23,3,4,5,[5,6,6],4,5,[,5,5[578],8]]

const real_another_Arr=arr3.flat(Infinity)
console.log(real_another_Arr);
console.log(Array.isArray("VINAYGOLE"));
console.log(Array.from("VINAYGOLE"));

console.log(Array.from({name:"Vinay",Last:"gole"}))//interesting case

let score1=100
let score2=200;
console.log(Array.of(score1,score2));