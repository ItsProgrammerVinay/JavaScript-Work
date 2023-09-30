// const name="vinay "
// const reposCount= 50

// console.log(name+ reposCount);
// console.log(`hello my name is ${name} and my repos are ${reposCount}`);

const gameName=new String("GodOfW-arghosofSparta")

// console.log(gameName.length)
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf('t'))
// console.log(gameName.__proto__)

const newString=gameName.substring(0,6)
// console.log(newString)
// console.log(gameName)
console.log(gameName.trim())
// const newString = gameName.substring(0, 4)
// console.log(newString);
// const newString = gameName.substring(0, 4)
const anotherString =gameName.slice(1,5);

console.log(anotherString);

// console.log("newString");

const url = "https://vinay.com/vinay%gole"

console.log(url.replace('%20', '-'))

console.log(url.includes('ayush'))

console.log(gameName.split('-'));