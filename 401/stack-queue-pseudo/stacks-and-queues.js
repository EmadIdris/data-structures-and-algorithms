'use strict';
//---------------------------------------------------------------------------------------------
const Node = require('./node');
//---------------------------------------------------------------------------------------------
class Stack { // Create a stack class
  constructor(){
    this.top = null; // Set the initial top to null.
  }
//---------------------------------------------------------------------------------------------
  push(value) { // O(1)
    let node = new Node(value); // Create a new node with the value passed in.
    node.next = this.top; // Set the node's next to the current top.
    this.top = node; // Make it the new top.
  }
//---------------------------------------------------------------------------------------------
  pop() {
    if (!this.top) { // If there is no top then the stack is empty.
      throw 'Can not remove from an empty stack!'; // Throw an error
    }
    let poppedVal = this.top; // Store the thing at the top of the stack in a variable.
    this.top = this.top.next; // Make it the new top.
    return poppedVal.value; // Return the popped value
  }
//---------------------------------------------------------------------------------------------
  peek() {
    if (!this.top) { // If there is no top then the stack is empty.
      throw 'Stack is empty, nothing to show.'; // Throw an error
    }
    return this.top.value; // Return the top value
  }
//---------------------------------------------------------------------------------------------
  isEmpty() {
    // Return boolean if stack is empty
    return (!this.top) ? true : false;
  }
}
//---------------------------------------------------------------------------------------------
class Queue { // Create a queue class
  constructor(){
    this.front = null; // Set the initial front to null.
    this.end = null; // Set the initial end to null.
  }
//---------------------------------------------------------------------------------------------
  enqueue(value) {//Add to the end of the queue
    // Create a new node
    let node = new Node(value);
    if (!this.front) { // The queue is empty
      this.front = node; // So, set the queue front to the node...
      this.end = node; /// ...and set the queue end to the node.
      return;
    } else { // If the queue has something in it...
      this.end.next = node; // Set the current end's next to our new node.
      this.end = node; // Set the queue's new end to the node.
    }
  }
//---------------------------------------------------------------------------------------------
  dequeue() {// Remove from the front of the queue
    if (!this.front) { // If there is no front then the queue is empty.
      throw 'Can not remove from an empty queue!'; // Throw an error.
    }
    if (this.front === this.end) {
      // The queue will be empty after this is removed.
      let dequeuedVal = this.front; // Store the thing at the top of the stack in a variable.
      this.front = null; // Set the front of the node to null.
      this.end = null; // Set the end of the node to null.
      return dequeuedVal.value; // Return the value that we dequeued.
    } else { // There is still going to be something left.
      let dequeuedVal = this.front; // Store the thing at the top of the stack in a variable.
      this.front = this.front.next; // So, the queue front becomes whatever was the queue's front.next
      return dequeuedVal.value; // Return the value that we dequeued.
    }
  }
//---------------------------------------------------------------------------------------------
  peek() {
    if (!this.front) {
      throw 'Can not peek at an empty queue!'; // Throw an error.
    } else {
      return this.front.value; // Return the value of the front.
    }
  }
//---------------------------------------------------------------------------------------------
  isEmpty() {
    // Return boolean if queue is empty
    return (!this.front) ? true : false;
  }
}
//---------------------------------------------------------------------------------------------
class PseudoQueue extends Stack {
    constructor() {
      super();
      this.stackTwo = new Stack();
      this.top = null;
      this.end = null;
    }
//---------------------------------------------------------------------------------------------
    enqueue(value) { 
      this.stackTwo.push(value); 
      if (!this.top) { 
        this.top = this.stackTwo.top; 
        this.end = this.stackTwo.top; 
        this.stackTwo.top = null; 
        return;
      } else { 
        this.end.next = this.stackTwo.top; 
        this.end = this.stackTwo.top; 
        this.stackTwo.top = null; 
      }
      return;
    }
//---------------------------------------------------------------------------------------------
    dequeue() { 
      if (!this.top) { 
        throw 'Can not remove from an empty pseudostack!'; 
      }
      if (this.top === this.end) { 
        let dequeuedVal = this.top.value; 
        this.top = null; 
        this.end = null; 
        return dequeuedVal;
      } else { 
        let dequeuedVal = this.top.value; 
        this.top = this.top.next; 
        return dequeuedVal; 
      }
    }
//---------------------------------------------------------------------------------------------
    peek() { 
      if (!this.top) { 
        throw 'Can not peek at an empty pseudoqueue!'; 
      } else { 
        return this.top.value; 
      }
    }
  }
//---------------------------------------------------------------------------------------------
  module.exports = { Stack, Queue, PseudoQueue };
