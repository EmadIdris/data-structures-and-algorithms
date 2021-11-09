'use strict';

// Require our linked list class
const LinkedList = require('../linked-list');

describe('Linked List', () => {
  it('throws an error if either linked list is empty', () => {
    const listOne = new LinkedList();
    const listTwo = new LinkedList();
    const errorMessage = LinkedList.zipLists(listOne, listTwo);
    expect(errorMessage.message).toBe('Linked list one is empty');
  });
  it('works if `linkedListOne` is smaller than `linkedListTwo`', () => {
    const listOne = new LinkedList();
    const listTwo = new LinkedList();
    listOne.append('one');
    listOne.append('three');

    listTwo.append('two');
    listTwo.append('four');
    listTwo.append('five');
    //console.log('Test 08 - #2:', listOne.toString());
    const zipReturn = LinkedList.zipLists(listOne, listTwo);
    expect(zipReturn.value).toBe('one');
  });
  it('works if `linkedListTwo` is smaller than `linkedListOne`', () => {
    const listOne = new LinkedList();
    const listTwo = new LinkedList();
    listOne.append('one');
    listOne.append('three');
    listOne.append('five');

    listTwo.append('two');
    listTwo.append('four');
    //console.log('Test 07 - #3:', listOne.toString());
    const zipReturn = LinkedList.zipLists(listOne, listTwo);
    expect(zipReturn.value).toBe('one');
  })
})