'use strict';

// Require our linked list class
const LinkedList = require('../linked-list');

describe('Linked List', () => {
// Write tests to prove the following functionality:

  //  X  Where k is greater than the length of the linked list
  //  X  Where k and the length of the list are the same
  //  X  Where k is not a positive integer
  //  X  Where the linked list is of a size 1
  //  X  “Happy Path” where k is not at the end, but somewhere in the middle of the linked list

  it('throws an error if k is greater than the length of the linked list', () => {
    const list = new LinkedList();
    list.append('one');
    list.append('two');
    list.append('three');
    list.append('four');
    const errorMessage = list.kthFromEnd(6);
    expect(errorMessage.message).toBe('Search is beyond length of linked list');
  });
  it('finds a value where k and the linked list length are the same', () => {
    const list = new LinkedList();
    list.append('one');
    list.append('two');
    list.append('three');
    list.append('four');
    expect(list.kthFromEnd(4)).toBe('one');
  });
  it('throws an error if k is not a positive integer', () => {
    const list = new LinkedList();
    list.append('one');
    list.append('two');
    list.append('three');
    list.append('four');
    const errorMessage = list.kthFromEnd(-1);
    expect(errorMessage.message).toBe('Passed argument must be a positive integer');
  });
  it('finds a value at the k-th place where k=1 and the linked list has 1 node', () => {
    const list = new LinkedList();
    list.append('one');
    expect(list.kthFromEnd(1)).toBe('one');
  });
  it('finds a value at the k-th place in the middle of the linked list', () => {
    const list = new LinkedList();
    list.append('one');
    list.append('two');
    list.append('three');
    list.append('four');
    list.append('five');
    list.append('six');
    list.append('seven');
    list.append('eight');
    list.append('nine');
    expect(list.kthFromEnd(4)).toBe('five');
    expect(list.kthFromEnd(3)).toBe('six');
    expect(list.kthFromEnd(5)).toBe('four');
  });
})
  