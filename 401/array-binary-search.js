'use strict';
//--------------------------------------------------
function BinarySearch(sortedArray, value) {
  let lower = 0;
  let upper = sortedArray.length-1;
  let middle;
  do {
    middle = lower + Math.floor((upper-lower)/2);
    if(value === sortedArray[middle]){
      return middle;
    }
    if(value<sortedArray[middle]){
      upper = middle - 1;
    } else { 
      lower = middle + 1;
    }
  } while(lower<=upper);
  return -1;
}
//--------------------------------------------------