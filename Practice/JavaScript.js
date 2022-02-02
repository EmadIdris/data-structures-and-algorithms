// code challenge 3 (Map)
// Write a function named addOne that, given an array of numbers, uses map to return a new array with each value simply incremented by 1. 
// let arr = [1, 2, 3, 4, 5]
// let newArray = []
// function addOne(array) {
//   arr.map(x => {
//     return newArray.push(x + 1)
//   })
// }
// addOne(arr)
// console.log(newArray);
/*
Write a function named addQuestion that, given an array of strings, uses map to return a new array containing each string followed by a question mark character.
*/
// let stringArray = ["what" , "how" , "Which"]
// function addQuestion(array){
//   let newStringArray = stringArray.map(x =>{
//     return x+ "?"
//   })
//   return newStringArray;
// }
// console.log(addQuestion(stringArray)); 

/*
Write a function named forLoopTwoToThe that, given an array of integers as input, iterates over the array and returns a new array. The returned array should contain the result of raising 2 to the power of the original input element.

You may choose to complete this challenge using a for loop, for...in syntax, or for...of syntax.

For example, twoToThe([1,2,3]) returns [2,4,8] because 2 ^ 1 = 2, 2 ^ 2 = 4, and 2 ^ 3 = 8.
*/
// let arr = [1,2,3] 
// function forLoopTwoToThe(array){
//   let newArr = []
//   for(let i=0 ; i< arr.length ; i++){
//     let x = Math.pow(2,arr[i]) // math power 2^1 2^2 2^3
//     newArr.push(x)
//   }
//   return newArr;
// }
// console.log(forLoopTwoToThe(arr));

/*
Write a function named forEachTwoToThe that produces the same output as your forLoopTwoToThe function from challenge 4, but uses forEach instead of a for loop.
*/
// let arr = [1,2,3]
// function forEachTwoToThe(array){
//   let newArr =[]
//   let q = arr.forEach(x=>{
//     let power = Math.pow(2,x)
//     return newArr.push(power)
//   })
//   return newArr
// }
// console.log(forEachTwoToThe(arr));

/*
Write a function named mapTwoToThe that produces the same output as your forLoopTwoToThe function from challenge 4 and your forEachTwoToThe function from challenge 5, but uses map instead of a for loop or forEach.
*/
// let arr = [1,2,3]
// const mapTwoToThe = (Array) =>{
//  let x = arr.map(number =>{
//    return (Math.pow(2,number))
//  })
//  return x
// }
// console.log(mapTwoToThe(arr));

/* ------------------------------------------------------------------------------------------------
CHALLENGE 7 - Stretch Goal

Write a function named charCode that, given an array of letters as an input, uses map to return a new array where each element is the result of the `charCodeAt` method on the original array element.

Read the MDN documentation on String.charCodeAt() if necessary.

For example: charCode(['h','i']) returns [104, 105].
------------------------------------------------------------------------------------------------ */
// let arr = ['h','i']
// function charCode(array){
//   let a =[]
//   for (let index = 0; index < arr.length; index++) {
//     a.push(arr[index].charCodeAt())
//   }
//   return a
// }
// console.log(charCode(arr));

// let arr = ['h','i',"q"]
// function charCode(array){
//   let w = []
//   let q = arr.forEach(x=>{
//     return (w.push(x.charCodeAt()))
//   })
//   return w
// }
// console.log(charCode(arr));

/* ------------------------------------------------------------------------------------------------
CHALLENGE 8 - Stretch Goal

Write a function that, given an array of numbers as input, uses map to return a new array where each element is either the string "even" or the string "odd", based on each value.

If any element in the array is not a number, the resulting array should have the string "N/A" in its place.

For example: evenOdd([1,2,3]) returns ['odd','even','odd'].
------------------------------------------------------------------------------------------------ */
// let arr =[1,2,3,"Emad" , 4]
// function evenORodd(array){
//   let x = arr.map(number =>{
//     if(number %2 === 0){
//       return "Even"
//     }else if(number %2 === 1){
//       return "Odd"
//     }else(typeof number != Number)
//     {
//       return "N/A"
//     }
//   })
//   return x
// }
// console.log(evenORodd(arr));

/* ------------------------------------------------------------------------------------------------
CHALLENGE 9 - Stretch Goal

Use the snorlaxAbilities data, below, for this challenge.

Write a function named extractAbilities that, given the array of abilities, uses map to create an array containing only the ability name.

Note: Because this function is expecting the array of abilities, it will be invoked as:
extractAbilities(snorlaxAbilities.abilities)
------------------------------------------------------------------------------------------------ */

// const snorlaxAbilities = {
//   abilities: [
//     {
//       slot: 3,
//       is_hidden: true,
//       ability: {
//         url: 'https://pokeapi.co/api/v2/ability/82/',
//         name: 'gluttony',
//       },
//     },
//     {
//       slot: 2,
//       is_hidden: false,
//       ability: {
//         url: 'https://pokeapi.co/api/v2/ability/56/',
//         name: 'cute charm',
//       },
//     },
//     {
//       slot: 1,
//       is_hidden: false,
//       ability: {
//         url: 'https://pokeapi.co/api/v2/ability/17/',
//         name: 'immunity',
//       },
//     },
//   ],
//   name: 'snorlax',
//   weight: 4600,
// };

// const extractAbilities = (arr) => {
//   // Solution code here...
//   let x = snorlaxAbilities.abilities.map(item =>{
//     let val = item.ability.name
//     return val
//   })
//   return x
// };
// console.log(extractAbilities(snorlaxAbilities.abilities));

/* ------------------------------------------------------------------------------------------------
CHALLENGE 10 - Stretch Goal

Use the snorlaxStats data, below, for this challenge.

Write a function named extractStats that, given an array of stats, uses map to return an array of objects containing the stat name and the total.

The total should be the sum of the effort and the baseStat.

Here is an example of a single array element: { name: 'speed', total: 35 }
------------------------------------------------------------------------------------------------ */

// const snorlaxStats = {
//   stats: [
//     {
//       stat: {
//         url: 'https://pokeapi.co/api/v2/stat/6/',
//         name: 'speed',
//       },
//       effort: 5,
//       baseStat: 30,
//     },
//     {
//       stat: {
//         url: 'https://pokeapi.co/api/v2/stat/5/',
//         name: 'special-defense',
//       },
//       effort: 2,
//       baseStat: 110,
//     },
//     {
//       stat: {
//         url: 'https://pokeapi.co/api/v2/stat/4/',
//         name: 'special-attack',
//       },
//       effort: 9,
//       baseStat: 65,
//     },
//   ],
//   name: 'snorlax',
//   weight: 4600,
// };

// const extractStats = (arr) => {
//   // Solution code here...
//   let x = snorlaxStats.stats.map(item =>{
//     let val = item.stat.name
//     let speed = item.effort + item.baseStat
//     return {val,speed}
//   })
//   return x
// };
// console.log(extractStats(snorlaxStats.stats));
