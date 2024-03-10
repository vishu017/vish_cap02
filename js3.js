//(1)index.js
//let str = "Hello World"
//console.log("Hello\nWorld")
//console.log(str.length)
//console.log(str[0])
//console.log(str[str.length-3])

//let name = "vishal"
//console.log(name[name.length-1])

//let arr = [1,2,3,4]
//arr[0]= 10 //mutable
//console.log(arr)

//name[0] ="G"
//console.log(name)

// for(let i = 0; i<name.length; i++)
// {
//     console.log(name[i]);
// }/

// for(let i = name.length - 1; i >= 0; i--)
// {
//     console.log(name[i])
// }

//(2)func1.js

// function instagram()
// {
//     console.log("instagram is clicked")
// }

// instagram()

//(3)func2.js

// function call(name,name1)
// {
//     console.log("please call",name,name1)
// }

// call("abha","aman")

//func3.js

//return
// function add(a,b)
// {
//     let sum = a + b
//     return sum
//     console.log("hello")
// }

// let ans = add(5,10)

// console.log(ans)
// console.log(2*ans)

//func4.js

// global scope

// let globalvar = 10

// function MyFunction()
// {
//     console.log(globalvar)
// }
// MyFunction()

// function MyFunction1()
// {
//     let z = 20;
//     console.log(z);
// }
//MyFunction1()
//console.log(z);

//let i = 0;
// let arr = [1,2,3,4]

// n= arr.length

// let str = ""

// for(let i=0; i<n; i++)
//   {
//    str=str+arr[i]+" "
//   }
// console.log(str)

// for(let i=1; i<=5; i++)
//  {
//    let bag = ""
//    {
//     for(let j=1; j<=5; j++)
//     {
//       if(i == 5 || j == 1 || j==5)
//      {
//       bag += "*" + " "
//      }
//      else{
//       bag = bag + "  "
//      }
//     }
//    }
//   // console.log(bag)
//  }

 
//let bag = 0
// const n = 4;
// const m = 4;
//  for(let i=1; i<4; i++)
//  {
//    let pack = "" ;
//    for(let j=1; j<i; j++)
//    {
    //pack += bag + " ";
    //bag ++ ;   
    //console.log(pack) 
  // }
   //console.log(pack) 
 //}

//  arr = [4,2,1,3]
//  n = arr.length
//  small = 1
//  for(let i=0; i<n){
//   if(arr[i<small]){
//     small=arr[i]
//   }
//  }
//  console.log(small)
// let bag = 1;
// for(let i = 1; i <= 5; i++)
//   {
//     let pack = "";
//     for(let j = 1; j<= i;  j++)
//       {
//         pack++;
//       }
//     console.log(pack);
//   }

// var str = "nrupul";

// for (var i = 0; i < str.length; i++) {
//   if (i % 2 !== 0) {
//     console.log(str[i]);
//   }
// }

// for (let i = 1; i <= 5; i++) {
//   let pattern = '';
//   for (let  j = 5; j >= 1; j--) {
//     pattern += j + ' ';
//   }
//   console.log(pattern);
// }

// var n = 5;

// for (var i = 1; i <= n; i++) {
//   var pattern = '';
//   for (var j = 1; j <= i; j++) {
//     pattern += '* ';
//   }
//   console.log(pattern);
// }


let N = 6;
let str = "ankush";
// Function to count vowels and consonants
function VowelsAndConsonantsCount(N,str) {


    let vowels = 0;
    let consonants = 0;

    // Convert the string to lowercase to simplify the vowel check
    //str = str.toLowerCase();

    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
            vowels++;
        } else if (str[i] >= 'a' && str[i] <= 'z') {
            consonants++;
        }
    }
   console.log(vowels,consonants);
}
VowelsAndConsonantsCount(N,str);

// Call the function and get the counts
//const counts = countVowelsAndConsonants(str);

// console.log(`Number of vowels: ${counts.vowels}`);
// console.log(`Number of consonants: ${counts.consonants}`);
