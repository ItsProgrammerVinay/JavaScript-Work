//singleton

// Object.create

//Object literals

const mySym=Symbol("key1")

// console.log(mySym);
// console.log(typeof mySym);

const user={

    name:"vinay",
    "fullname":"vinay gole",
    [mySym]:"mykey1",
    age:18,
    location:"rajsthan",
    isLoggedIn:"false",
    email:"hitesh@microsoft.com",
    lastDaysLogin:["Monday","Wednesday"]
}

// console.log(user.name);
// console.log(user["name"]);
// console.log(user["fullname"]);
// console.log(user[mySym]);

// user.name="GoleVinay"
// console.log(user);

// Object.freeze(JsUser)
user.email = "hitesh@microsoft.com"
console.log(user);

user.greeting = function(){
    console.log("Hello JS user");
}
user.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(user.greeting("gole"));
console.log(user.greetingTwo("vinay"));
