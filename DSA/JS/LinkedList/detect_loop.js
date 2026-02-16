class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    let newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      return;
    } else {
      let curr = this.head;
      while (curr.next !== null) {
        curr = curr.next;
      }
      curr.next = newNode;
    }
  }

  print() {
    let curr = this.head;
    if (curr === null) {
      console.log("empty linked list");
    } else {
      while (curr !== null) {
        console.log(curr.value);
        curr = curr.next;
      }
    }
  }

  makeLoop() {
    if (!this.head || !this.head.next) {
      return;
    }

    let secondNode = this.head.next;
    let curr = this.head;

    while (curr.next !== null) {
      curr = curr.next;
    }

    curr.next = secondNode;
  }

  detectCycle() {
    let curr = this.head;
    let mySet = new Set();
    while (curr.next !== null) {
        if (mySet.has(curr)){
            console.log("Loop Detected");
            return;
        } else {
            mySet.add(curr);
            curr = curr.next;
        }
    }
  }
  detectCycle2() {
    let fast = this.head;
    let slow = this.head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next
        fast = fast.next.next;
        if (fast === slow){
            console.log("cycle Detected");
            return;
        }
    }
    console.log("Cycle Not Detected");
    
  }
}

const list = new SinglyLinkedList();
list.append(1);
list.append(3);
list.append(1);
list.append(6);
list.append(9);
list.append(10);
list.append(20);
list.append(21);
// list.makeLoop();
// list.print();
list.detectCycle2();
