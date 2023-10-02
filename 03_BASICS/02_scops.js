var c=300
let a=400
if(true){
    let a=10
    const b=20
    console.log("Inner:",a);
}

console.log(a);
// console.log(b);
// console.log(c); //var is always treated ad global variable in js
// cat acces beacause the scope is  only at inside the if block


function one(){
    const name="vinay"
    function two(){
        const web="youtube"
        console.log(name,web);


    }
    // console.log(web);

    two()
}

one()

if(true){
    const name="vinay"

    if(name==="vinay"){
        const web="instagram"
        console.log(name+web);   
     }
     

     //+++++++++++++++++++++ Intersting ++++++++++

     console.log(addone(5));
     
     
     function addone(num){
        return num+1

     }

     console.log(addtwo(6));
     function addtwo(num){
        return num+2

     }


}
