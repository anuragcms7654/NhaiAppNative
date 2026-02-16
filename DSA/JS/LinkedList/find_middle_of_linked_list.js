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
      }
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

  }
  