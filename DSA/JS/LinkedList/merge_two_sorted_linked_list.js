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

  mergeSortedLists(list1, list2) {
    let dummy = new Node(0);
    let tail = dummy;
    let head1 = list1.head;
    let head2 = list2.head;

    while (head1 !== null && head2 !== null) {
      if (head1.value < head2.value) {
        tail.next = head1;
        head1 = head1.next;
      } else {
        tail.next = head2;
        head2 = head2.next;
      }
      tail = tail.next;
    }

    if (head1 !== null) {
      tail.next = head1;
    } else if (head2 !== null) {
      tail.next = head2;
    }
  }
}

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
