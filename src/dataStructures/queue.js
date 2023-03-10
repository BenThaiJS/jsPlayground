/* What is a queue?

A FIFO data structure
(First In First Out)
*/ 


export class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  export class Queue {
    constructor() {
      this.first = null;
      this.last = null;
      this.size = 0;
    }
    enqueue(val) {
      let newNode = new Node(val) 
      if(!this.first) {
        this.first = newNode
        this.last = newNode
      } else {
        this.last.next = newNode
        this.last = newNode
      }
      return ++this.size
    }
    dequeue(val){
      if(!this.first) return null
      let temp = this.first
      if(this.first === this.last) {
        this.last = null
      }
      this.first = this.first.next
      this.size--
      return temp.value
    }
}