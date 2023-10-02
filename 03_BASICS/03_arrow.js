const user={
    username:"vinay",
    age:23,
    welcomeMsg:function(){
        console.log(`${this.username},welcome to the world class`);
        // console.log(this);
    }
}

// user.welcomeMsg()
// user.username="sam"
// user.welcomeMsg()
console.log(this);//return empty obj in node and window obj in browser

// function chai(){
//     let name="vinay"
//     console.log(this.name);
// }

// chai()

// function chai(){
//     const uname="vinay"
//     console.log(this.uname);
// }

// chai()

const chai= ()=>{

    let jd="gole"
    console.log(this);
}

// chai()

// const addTwo=(num1,num2)=>{
//     return num1+num2
// }

// const addTwo=(num1,num2)=>(num1+num2)
// const addTwo=(num1,num2)=>num1+num2
// console.log(addTwo(8,6));

const addTwo=(num1,num2)=>({name:"vinay"})

console.log(addTwo(4,6));


// const myArray = [2, 5, 3, 7, 8]

// myArray.array.forEach(element => {
    
// });