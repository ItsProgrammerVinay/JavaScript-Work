// for of

// ["", "", ""]
// [{}, {}, {}]


const arr=[1,2,3,4,5]

for(const num of arr){
    console.log(num);
}

const greetings="Hello world!"

for(const greet of greetings){
    console.log(`Each char is ${greet}`);
}

//Map

const map=new Map()
map.set('IN','India')
map.set('USA','United State of America')
map.set('FR','france')
map.set('JP','japan')

console.log(map);

for( const [key,val] of map){
    console.log(key,val);

}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// } // we can not iterate on objects


