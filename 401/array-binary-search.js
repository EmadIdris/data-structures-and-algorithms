'use strict';

function BinarySearch(inputArray, searchValue) {
  let loopIndex = 0;
  let foundIndex = -2;
  let splitIndex = 0;
  let initialArrayLength = inputArray.length;
  let arrayLength = inputArray.length;

  if (!inputArray) { return -1;} else if (inputArray === null) { return -1;}

  let findNewSplitIndex = (inputArrayLength, oldSplitIndex) => {
    if (inputArrayLength % 2 === 1) {
      splitIndex = (inputArrayLength / 2) + 0.5; 
    } else if (inputArray.length % 2 === 0) {
      splitIndex = (inputArrayLength / 2); 
    }
    splitIndex += oldSplitIndex;
    loopSplitFunction(oldSplitIndex, splitIndex);
  };

  let loopSplitFunction = (loopIndex, splitIndex) => {
    console.log(`Start at: ${loopIndex} end at: ${splitIndex}`);
    for(loopIndex; loopIndex < splitIndex; loopIndex++) {
      if (inputArray[loopIndex] === searchValue) {
        foundIndex = loopIndex; 
      } else if (loopIndex >= initialArrayLength) { 
        foundIndex = -1;
      }
    }
    arrayLength = initialArrayLength - splitIndex;
    if (arrayLength === 0) {
      foundIndex = -1; 
    } else if (foundIndex === -2) {
      findNewSplitIndex(arrayLength, splitIndex);
    }
  };

  if (foundIndex === -2) { 
    findNewSplitIndex(arrayLength, loopIndex); 
  }
  return foundIndex;
}
BinarySearch(initialArray, searchValue);