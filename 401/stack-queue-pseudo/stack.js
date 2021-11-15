'use strict';
//------------------------------------------------------------------------
const Node = require('./node');
//------------------------------------------------------------------------
class Stack{
  constructor(){
    this.top = null;
    this.length = 0;
  }

//------------------------------------------------------------------------
  push(value){
    let newNode = new Node(value);
    if(this.isEmpty()){
      console.log('initiating new stack');
      this.top = newNode;
      this.length = this.length + 1;
    } else {
      newNode.next = this.top;
      this.top = newNode;
      this.length = this.length + 1;
    }
    return this.top.value;
  }
//------------------------------------------------------------------------
  pop(){
    if(this.isEmpty()){
      console.log('empty stack! you can\'t pop');
      return false;
    }
    let temp = this.top;
    this.top = this.top.next;
    temp.next = null;
    this.length = this.length - 1;
    return temp.value;
  }
//------------------------------------------------------------------------
  peek(){
    if(this.isEmpty()){
      console.log('empty stack');
      return false;
    }
    return this.top.value;
  }
//------------------------------------------------------------------------
  isEmpty(){
    return this.top === null;
  }
}

module.exports = Stack;