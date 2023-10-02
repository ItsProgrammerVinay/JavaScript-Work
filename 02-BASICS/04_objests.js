// const instaUser={}
// const newUser=new Object()
const userOne={}
userOne.id="123"
userOne.name="vinay"
userOne.isloggedIn=false

// console.log(userOne);//you can'y print object like this

// console.log(userOne.id,userOne.name)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// console.log(obj1,obj2);

// const obj3=Object.assign({},obj1,obj2,obj4)

// console.log(obj3);

const obj3={...obj1,...obj2}

// console.log(obj3);


const usertwo=[
    {
    id:1,
    email:"v@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    }
]

usertwo.email
// console.log(usertwo);

// console.log(Object.keys(userOne));
// console.log(Object.values(userOne));
// console.log(Object.entries(userOne));


console.log(userOne.hasOwnProperty('isloggedIn'));


const courses={
    coursename:"javaScript",
    price:999,
    instTructor:"vinay"
}

// courses.instTructor

const {instTructor:ins}=courses
// console.log(instTructor);
console.log(ins);


// {
//     "name": "Vinay",
//     "coursename": "js in english",
//     "price": "free"
// }
[
    {},
    {},
    {}


]