const Node=require('./Node');
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  Reverse(){
    let temp= new LinkedList();
    let current=this.head;
    temp.insert(current.value);
    while (current.next!==null) {
      temp.insertBefore(current.value,current.next.value);
      current=current.next;
    }
    return temp;
  }
  insert(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail = newNode;
      this.tail.next = newNode;
    }
    this.length++;
    return this.head;
  }
  insertAfter(value,newValue){
    let newNode=new Node(newValue);
    let current=this.head;
    while (current) {
      if(current.value===value){
        newNode.next=current.next;
        current.next=newNode;
        break;
      }
      current=current.next;
    }
    this.length++;
  }}
module.exports=LinkedList;