class Node {
   constructor(value) {
      this.value = value;
      this.next = null
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
         curr.next = newNode
      }
   }

   print() {
      let curr = this.head;
      if (curr === null) {
         console.log("empty linked list");
      } else {
         while (curr.next !== null) {
            console.log(curr.value);
            curr = curr.next;
         }
         if (curr.next === null) {
            console.log(curr.value);
         }
      }
   }
}

let list = new SinglyLinkedList();

list.append(10)
list.append(20)
list.append(30)
list.append(40)
list.append(50)
list.append(60)

list.print()