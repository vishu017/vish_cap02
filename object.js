//  let detoils = 
//   {
//      name:"vishal",
//      adress:"m.p",
//      age:25,
//      mobile:9131066695,
//      father: "rampraksh"
//   }
//  console.log(detoils);

 //dot notation
 //console.log(details.adress)

 //bracket notation
 //console.log(details["mobile"]);
//2.
//  let details = 
//  {
//     name:"vishal",
//     adress:"m.p",
//     age:25,
//     hobby:["listen song","games","coding"],
//     mobile:9131066695,
//     father: "rampraksh"
//  }
//  console.log(details["hobby"][0]);
 //3.
//  let details=
//  {
//     name:"vish",
//     adress:"mohali",
//     age:25,
//     mob:9131066695,
//     father:"ramprakash"
//  }
//  details["mother"]="sarvati"
 //console.log(details)

 //update the existing value
//  details["age"]=28;
//  console.log(details)
//4.
// let details = 
//  {
//     name:"vish",
//     age:25,
//     hobbies : ["listen song","games","coding"],
//     mob:9131066695,
//      father:"ramprakash",
//      location:{
//         city:"gwalior",
//         state:"m.p",
//         pincode:474006,
//         landmark:"sanjay park"
//     }
//  }
//  console.log(details["mother"])
//5.
// let details =
// {
//     name:"vish",
//     age:25, 
//     adress:"mohali",
//     mob:9131066695,
//     father:"ramprakash"
// }

// for(let abc in details)
//  {
//    console.log(abc + "-" + details[abc])
//  }

// let bag = "";
// for(let abc in details)
//  {
//    bag += abc + " ";
//  }
// console.log(bag)
//6.
// let arr=["r","b","g","b","r","g","w"]

// let obj = {};
// //obj["r"] = 1;
// //console.log(obj)
// for(let i=0; i<arr.length; i++)
//    {
//      obj[arr[i]]=i+1
//    }
//    console.log(obj)

//(chatgpt)code
// var arr = ["r", "b", "g", "b", "r", "g", "w"];
// var uniqueValues = {};

// for (var i = 0; i < arr.length; i++) {
//     uniqueValues[arr[i]] = i+1;
// }

// //var output = Object.keys(uniqueValues);
// console.log(uniqueValues);
// let str = "apple"
// let obj ={}

// for(let i=0; i<str.length; i++)
//   {
//     if(obj[str[i]] == undefined)
//     {
//         obj[str[i]] = 1;
//     }
//     else
//     {
//          obj[str[i]]++
//     }
//   }
//console.log(obj)

// let detail = 
// {

//     name:"vishal",
//     age:25,
//     add: "mohali",
//     hobby:"coding",

// }
//console.log(detail)

//let detail =
// {

//   name : "vishal",
//   address : "gwalior",
//   age : 25,
//   mob : 9131066695,
//   hobby : ["coding","videogames","cricket"],
//   fathername : "ramprakash"

// }
//console.log(detail["hobby"][]);
//console.log(hobby);

//let form =
//{

  //address : "delhi",
  //rollno : 2211

//  detail : function(name,age)
//  {
//    console.log(name,age);
 // }
//}

//form.detail("visha",25)

//HOF

//1.
// let MyFunction = (param) =>
// {
//   let a = 10;
//   let b = 20;
//   console.log();
// }
// MyFunction("vishal")

//2.
// let doub = x => x*2
// console.log(doub(8))

// let sum = (a,b) => a+b
// console.log(sum(10,30))

//3.
// function print()
// {
//   console.log("hello");
// }


// let sum = function(a,b)
// {
//   console.log(10+30);
// }

//4.
// let dress  = function()
// {
//   return("i bought a blue dress");
// }

// function party(x,friend)
//  {
//    console.log(x())
//     console.log("now let got to party",friend);
//  }
// party(dress,"vishal")

//5.
// function double(x)
// {
//   return x * 2;
// }
// function MyFunction(array,transform)
// {
//   let output = [];
//   for(let i = 0; i<array.length; i++)
//   {
//     let result = transform(array[i]);
//      output.push(result);
//   }
//   console.log(output);
// }

//MyFunction([1,2,3,4],double)

//6.
// let arr = [1,2,3,4,5];

// let ans = arr.map(function(element)
//     {
//       console.log(element)
//       return element * 3;
//     })
//console.log(ans)
//let ans1 = arr.map(ele => ele*3)
//console.log(ans1)

//7.
// let arr =[1,2,3,4,5,6]
//    let evenarray = arr.filter(function(ele)
//    {
//     return ele % 2 == 0
//    })
// console.log(evenarray)

//8.
// let arr = [1,2,3,4,5]

// let array = [];
// arr.forEach(function(ele)
// {
//   array.push(ele*2)

// })
// console.log(array);

//9.
// let arr = [1,2,3,4,5]

// let mul = arr.reduce(function(acc,curr)
// {
//   return acc * curr
// },1);

// console.log(mul)

// let sum = arr.reduce((ac,cu) => ac + cu,0)
// console.log(sum);

//10.
// let arr = ["chunnu","munnu","pablo"]

// let strlength = arr.map(ele => ele.length)
// console.log(strlength)

//11.
// let words = ["hello","world","javascript"];

// // let str = "hello";
// // console.log(str.slice(0));

// let ans  = words.map(ele => ele[0].toUpperCase() + ele.slice(1))
// console.log(ans);

//12.
// let product = 
// [
//   {name : "Apple",price : 13, instock : true},
//   {name : "Apple",price : 9, instock : true},
//   {name : "Apple",price : 12, instock : true},
//   {name : "Apple",price : 15, instock : false}
// ];

// let ans = product.filter(ele => ele.instock = true && ele.price > 10).map(ele => ele.price).reduce((acc,curr)=> acc + curr,0)
// console.log(ans)
//(1)
// const number = [1,2,3,4,5,6];

// let ans =number.filter(ele => ele%2 == 0).map(ele => ele*ele).reduce((acc,curr)=> acc + curr,0)
// console.log(ans)

//(2)
const number2 = [1,2,3,4,5];

let ans2 =number2.filter(ele => ele % 2 == 1).reduce((acc,curr)=>acc*curr,1);
console.log(ans2)

let number3 = [5,12,8,15,20,11];

let ans3 = number3.filter(ele => ele > 10).map(ele => ele * ele)
console.log(ans3)

// let avg =ans3.reduce((acc,curr) => acc+curr,0)
// console.log(avg)
// console.log(avg/ans3.length) 
