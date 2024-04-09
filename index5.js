
//     let n = 6
//     let str = "vishal"
//     for(let i=0; i<=str.length; i++){
//     if(num % 2 == 0){
//         i += 1
//         console.log(str);
//     }  
// }
// var N = 6;
// var str = "ankudh";

// for (var i = 1; i <= N; i+=2) {
   
//     console.log(str[i]);
// }


//2. chai and codes

// const mysym =Symbol("key1")

// const jsuser = {
//     name: "vishal",
//     "full name": "vishal batham",
//     [mysym]: "mykey1",
//     age: 18,
//     location: "gwalior",
//     email: "vishal@gmail.com",
//     isloggedin: false,
//     lastlogindays: ["monday", "saturday"]
// }

// console.log(jsuser.email);
// console.log(jsuser["email"]);
// console.log(jsuser["full name"]);
// console.log(jsuser[mysym]);

//jsuser.email = "vishal@cahtgpt"
//Object.freeze(jsuser)
//jsuser.email = "vishal@microsoft"
//console.log(jsuser);

// jsuser.greeting = function(){
//     console.log("hello js");
// }
// jsuser.greeting2 = function(){
//     console.log(`hello js user, ${this.name}`);
// }
// console.log(jsuser.greeting());
// console.log(jsuser.greeting2());

const tindruser = {}

tindruser.id = "123abc"
tindruser.name = "vissu"
tindruser.isloggedin = false

//console.log(tindruser);


const regularuser = {
    email: "some@gamil.vom",
    fullname: {
        userfullname:{
            first: "vish",
            last: "batham"
        }
    }
}
//console.log(regularuser.fullname.userfullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4:"c"}

//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({},obj1, obj2)
const obj3 = {...obj1, ...obj2}
//console.log(obj3);

const user = [
    {
        id: 1,
        email: "vishal@gmail"
    },
    {
        id: 1,
        email: "vishal@gmail"
    },
    {
        id: 1,
        email: "vishal@gmail"
    },
]

user[1].email
// console.log(tindruser);
// console.log(Object.keys(tindruser));
// console.log(Object.values(tindruser));
// console.log(Object.entries(tindruser));

// console.log(tindruser.hasOwnProperty('isloggedin'));


//cap-day60

console.log("hello0");

var num1 =25;
var num2;

num2 = 46;
num2 = 50;
num2= "25"
//console.log(num2 === num1);

// && , || , !

//console.log(1 && 0 && true);
//console.log(1 || false || 0); 

// datatype => string , number , boolean ,arr , obj

function greet(name){
    console.log("hi there ||", name);
}

greet("virat")
greet("kohli")

// we have a data structure arrey
//var arr = [2,3,10,12,4, 17]
//only wanna return the element which are at even position

// function doubleIt(anArr){
//     for(var i=0; i < anArr.length; i++){
//         if(i%2==0){
//         anArr[i] = anArr[i]*2
//        // console.log(anArr[i]);
//         }
//     }
//     //console.log(anArr);
//     return anArr
// }
//doubleIt(arr)
// var doubleVariable = doubleIt(arr)
// console.log(doubleIt([2,3,4]));
// console.log(doubleVariable);

//  for(var i = 0; i<doubleVariable.length; i++){
//     console.log(doubleVariable[i]);
//  }

// function statement => function name(){}
// function expressoin

// var namemyfunction = function(){
//     return "h1"
// }

//  console.log(namemyfunction());

// function add(a,b,str){
//     console.log(a,b,str)
// }
// add(1,2)

// var names;
// console.log(names);
// names = "vishal"

{
    var neme =14
  //  console.log(neme);
}
//console.log(neme);

{
    let name2 =15
    console.log(name2);
}
//console.log(name2);

{
    const name3= 20 
}

function calculatesum(number){
    let sum = 0;
    for (let i =1; i<=number; i++){
        if(i%2==0){
            sum += i;
        }
    }
    return sum;
}

console.log(calculatesum());