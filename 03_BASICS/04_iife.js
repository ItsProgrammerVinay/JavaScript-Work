//Immediately Invoked Function Expression 

(function chai(){
    console.log("DB CONNECTED");
})();


((name)=>{
    console.log(`Db two connected ${name}`);
})('vinay');