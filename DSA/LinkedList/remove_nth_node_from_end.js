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

  removeNthNodeFromLast(n) {
    let mySets = [];
    let curr = this.head;
    if (curr === null) {
      console.log("empty linked list");
    } else {
      while (curr !== null) {
        console.log(curr.value);
        mySets.push(curr);
        curr = curr.next;
      }
    }
    let toRemove = mySets[mySets.length - n];
    curr = this.head;
    while (curr !== null) {
      if (curr.next === toRemove) {
        curr.next = curr.next.next;
        break;
      }
      curr = curr.next;
    }
  }

  removeNthNodeFromLastOptimal(n) {
    let slow = this.head;
    let fast = this.head;
    let i = 0;
    while (i <= 2) {
      fast = fast.next;
    }
    if (fast === null){
        this.head = this.head.next;
        return;
    }
    while (fast.next !== null){
        slow = slow.next;
        fast = fast.next;
    }
    slow.next = slow.next.next;
    return this.head;
  }
}

// TC = O(n)
// Sc = O(1)

const list1 = new SinglyLinkedList();
list.append(1);
list.append(3);
list.append(6);
list.append(9);
list.append(10);
list.append(20);
list.append(21);

const list2 = new SinglyLinkedList();
list.append(2);
list.append(4);
list.append(5);
list.append(7);
