class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  findMiddleOptimal(){
    let slow = this.head;
    let fast = this.head;
    while (fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;
    };
    return slow.value;
  } 

  findMiddle() {
    let curr = this.head;
    let count = 0;
    if (curr === null) {
    //   count = 0;
      console.log("empty linked list");
    } else {
      while (curr !== null) {
        curr = curr.next;
        count++;
      }
      curr = this.head;
      let tempCount = 0;
      while (curr !== null && tempCount < count/2 -1){
        curr = curr.next;
        tempCount++
      }
      return curr.value
    }
  }

  reverse() {
    let temp = this.head;
    let prev = null;
    while (temp !== null) {
      let front = temp.next;
      temp.next = prev;
      prev = temp;
      temp = front;
    }
    this.head = prev;
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

  pop() {
    let curr = this.head;
    if (curr === null) {
      console.log("Nothing to pop");
    } else if (curr.next === null) {
      this.head = null;
    } else {
      while (curr.next.next !== null) {
        curr = curr.next;
      }
      curr.next = null;
    }
  }

  insertAtStart(value) {
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  //   1 -> 3 -> 1 -> 6 -> null
  deletenthNode(index) {
    if (!this.head) {
      console.log("list is empty");
    }
    if (index === 1) {
      this.head = this.head.next;
      return;
    }
    let curr = this.head;
    let count = 1;
    while (curr && count < index - 1) {
      curr = curr.next;
      count++;
    }
    if (!curr || !curr.next) {
      console.log("Index out of bounds");
      return;
    }
    curr.next = curr.next.next;
  }

  deleteNodeValue() {
    if (!this.head) {
      console.log("list is empty");
    }
    if (index === 1) {
      this.head = this.head.next;
      return;
    }
    let curr = this.head;
    let count = 0;
    while (curr && count !== curr.value) {
      curr = curr.next;
      count++;
    }
    if (!curr || !curr.next) {
      console.log("Index out of bounds");
      return;
    }
    curr.next = curr.next.next;
  }

  insertAfterNthNode() {}

  insertAtNodeValue() {}
}

const list = new SinglyLinkedList();
// list.deletenthNode();
list.append(1);
list.append(3);
list.append(1);
list.append(6);
list.append(9);
list.append(10);
list.append(20);
list.append(21);

// list.deletenthNode(2);
// list.append(10);
// list.print();
// // console.log("deleteeee");
// list.reverse();
// list.print();
// // list.pop();
// // list.print();
// list.insertAtStart(10)
// list.print();
console.log(list.findMiddleOptimal());

