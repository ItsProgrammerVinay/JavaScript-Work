function sayName() {
    console.log("V");
    console.log("I");
    console.log("N");
    console.log("A");
    console.log("Y");  
}
sayName()

// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
// }

// addTwoNumbers(9,5)

function addTwoNumbers(number1,number2){
    return number1+number2;
}

const result=addTwoNumbers(8,9)
// console.log("Result:",result);

function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return`${username} just logged in`
}

// console.log(loginUserMessage("vinay"));


function calculateCartPrice(val1,val2,...num1){
    return num1
}

console.log(200,450,625);

const user={
    username:"chaheti",
    age:3
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and age is ${anyobject.age}`);
}

handleObject(user)//passing a object in function

 handleObject({username:"sam",//passing object in  a function call 
age:15

})


const myNewArray=[200,100,300,5]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
returnSecondValue(myNewArray)
console.log(returnSecondValue[200, 400, 500, 1000]);

 