'use strict';

const LinkedList = require('./LinkedList');

function main() {
  // ----- #1 -----
  // Write a function main. Within the function, using the linked list class above, 
  // create a linked list called SLL and add the following items in your linked list: 
  // Apollo, Boomer, Helo, Husker, Starbuck

  const SLL = new LinkedList();
  const items = ['Apollo', 'Boomer', 'Helo', 'Husker', 'Starbuck'];

  // traverse the items and insert each item in a SLL using insertLast()
  for (let i=0; i < items.length; i++) {
    SLL.insertLast(items[i]);
  }
  // console.log('1: ', SLL);
  // console.log('2: ', JSON.stringify(SLL, null, 2));


  // ----- #2 -----
  // Add Tauhida to the list
  SLL.insertLast('Tauhida');
  // console.log('2: ', JSON.stringify(SLL, null, 2));


  // ----- #3 -----
  // Remove Starbuck from the list
  SLL.remove('Starbuck');
  // console.log(JSON.stringify(SLL, null, 2));


  // ----- #4 -----
  // Implement a function called insertBefore() in the class that inserts a new node before a given node containing a key
  
  // traverse the linked list to search for the currentItem, starting from the head
  // keep track of the current node and the previous node
  // error check: if the head is null, return null
  // if current node's value matches currentItem,
  // change previous node's next pointer to newItem and set its next pointer to the currentItem
  
  // function insertBefore(newItem, currentItem) {
    
  //   let prevNode = this.head;
  //   let currentNode = this.head;

  //   if (this.head === null) {
  //     return null;
  //   }

  //   while (currentNode.value !== currentItem) {
  //     prevNode = currentNode;
  //     currentNode = currentNode.next;
  //   }
  //   prevNode.next = new _Node(newItem, currentNode);
  // }
  // moved the function to LinkedList class


  // ----- #5 -----
  // Implement a function called insertAfter() in the class that inserts a new node after a node containing the key

  // function insertAfter(newItem, currentItem) {
  //   let prevNode = this.head;
  //   let currentNode = this.head;

  //   if (!this.head) {
  //     return null;
  //   }
  //   while (currentNode.value !== currentItem) {
  //     prevNode = currentNode;
  //     currentNode = currentNode.next;
  //   }
  //   const nextNode = currentNode.next;
  //   currentNode.next = new _Node(newItem, nextNode);
  // }
  // moved to the class


  // ----- #6 -----
  // Implement a function called insertAt() that inserts an item at a specific position in the linked list
  // added to the class


  // ----- #7 -----
  // Add Athena before Boomer using your insertBefore() function
  SLL.insertBefore('Athena', 'Boomer');
  // console.log(JSON.stringify(SLL, null, 2));


  // ----- #8 -----
  // Add Hotdog after Helo using the insertAfter() method
  SLL.insertAfter('Hotdog', 'Helo');
  // console.log(JSON.stringify(SLL, null, 2));


  // ----- #9 -----
  // Using the insertAt() method insert Kat in the 3rd position of the list
  SLL.insertAt('Kat', 3);
  // console.log(JSON.stringify(SLL, null, 2));


  // ----- #10 -----
  // Remove Tauhida from the list
  SLL.remove('Tauhida');
  // console.log(JSON.stringify(SLL, null, 2));

}

main();