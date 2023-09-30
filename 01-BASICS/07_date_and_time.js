let mydate=new Date()

console.log(mydate);// todays date and time 2023-09-30T15:18:27.747Z

let createdDate=new Date(2023,1,3)
console.log(createdDate);

let newDate=new Date(2023,1,3,6,4)
console.log(newDate);

let date_cust=new Date("01-14-2023")
console.log(date_cust.toLocaleString());

let mytimeStamp= Date.now()
console.log(mytimeStamp);
let todaysdate=new Date()
console.log(todaysdate.getDay());
let myCreatedDate = new Date("01-14-2023")
let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.toLocaleString())
console.log(myCreatedDate.getTime());
 console.log("hello "+Math.floor(Date.now()/1000));

`${newDate.getDay()} and the time `
newDate.toLocaleString('default', {
    weekday: "long",
    
})

console.log(newDate);

let sDate = new Date()
console.log(sDate);
console.log(sDate.getMonth() + 1);
console.log(sDate.getDay());
