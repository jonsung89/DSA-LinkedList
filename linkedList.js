'use strict';

class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  find(item) {
    // start at the head
    let currentNode = this.head;

    if (!this.head) {
      return null;
    }
    while (currentNode.value !== item) {
      if (currentNode.next === null) {
        return null; // return null if the current node is the last node in the list && the item was not found
      }
      else {
        currentNode = currentNode.next; // otherwise, keep looking through the list
      }
    }
    // if found,
    return currentNode;
  }

  remove(item) {
    if (!this.head) { // if the list is empty
      return null;
    }
    if (this.head.value === item) { // if the node to be removed is the head, make the next node the head
      this.head = this.head.next;
      return;
    }
    
    // start at the head & keep track of the previous node during while loop
    let currentNode = this.head;
    let previousNode = this.head;

    while ((currentNode !== null) && (currentNode.value !== item)) {
      // save the previous node
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    if (currentNode === null) {
      console.log('Item not found');
      return;
    }
    // if the current node value is the item, set the previous node's next pointer to current node's next pointer
    previousNode.next = currentNode.next;
  }
}