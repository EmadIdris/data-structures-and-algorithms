const arr = [ 8, 6,6,11,9,60,102,98,100];

// const reducer = (previousValue , currentValue) => previousValue+currentValue;
function reducer(previousValue , currentValue){
  return previousValue+currentValue;
}
// console.log(q());
console.log(arr.reduce(reducer));




// let x;
// for(let i = 0 ;  i<arr.length ; i++){
//   x = arr[i] + arr[i+1]
// }
// console.log(x);
// const arrSorted = arr.sort((a, b) => a - b); //[1,2,3,4,5]
// console.log(arrSorted);

//   arrSorted[arr.length - 2];
// console.log(arr.length - 2);
// console.log(arrSorted[arr.length - 2]);

// let firstMax =[]
// for(let i = 0 ; i<arr.length ; i++){
//   if(firstMax<arr[i])
//   {
//     firstMax = arr[i]
//   }
// }
// let secMax = arr.filter(x => x < firstMax)
// console.log(secMax);

// let firstMax = Math.max(...arr) // 9
// let secondMax = arr.filter(x => x< firstMax) // [lower than 9]
// let secM = Math.max(...secondMax) // get max
// let thirdMax = arr.filter(y => y<secM)
// let thiMax = Math.max(...thirdMax)
// console.log(firstMax);
// console.log(secondMax);
// console.log(thiMax);

//-----------------------------------




