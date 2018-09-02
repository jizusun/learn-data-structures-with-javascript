/*
  LinkedList
  
  Name your class / constructor (something you can call new on) LinkedList
  
  LinkedList is made by making nodes that have two properties, the value that's being stored and a pointer to
  the next node in the list. The LinkedList then keep track of the head and usually the tail (I would suggest
  keeping track of the tail because it makes pop really easy.) As you may have notice, the unit tests are the
  same as the ArrayList; the interface of the two are exactly the same and should make no difference to the
  consumer of the data structure.
  
  I would suggest making a second class, a Node class. However that's up to you how you implement it. A Node
  has two properties, value and next.
  
  length - integer  - How many elements in the list
  push   - function - accepts a value and adds to the end of the list
  pop    - function - removes the last value in the list and returns it
  get    - function - accepts an index and returns the value at that position
  delete - function - accepts an index, removes value from list, collapses, 
                      and returns removed value
  
  As always, you can change describe to xdescribe to prevent the unit tests from running while
  you work
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.tail = null;
    this.head = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value)
    this.length++
    if (!this.head) {
      this.head = node
    } else {
      this.tail.next = node
    }
    this.tail = node
  }

  pop() {
    var lastNodeValue = this.delete(this.length-1);
    return lastNodeValue;

    // var poppedValue = this.tail.value;
    // this.length --;
    // var lastNode = this._find(this.length-1, this._testIndex)
    // this.tail = lastNode;
    // return poppedValue;

  }

  _find(value, test=this._test) {
    var currentNode = this.head,
        index = 0;
    while (currentNode) {
      if (test(value, currentNode.value, index, currentNode)) {
        return currentNode;
      }
      currentNode = currentNode.next;
      index++;
    }
    return null;
  }

  _test(a, b) {
    return a === b;
  }

  _testIndex(search, __, i) {
    return search === i;
  }

  get(index) {
    const node = this._find(index, this._testIndex)
    if (!node) {
      return null
    } else {
      return node.value
    }
  }

  delete(index) {
    if (index === 0) {
      let deletedValue;
      if (this.head) {
        deletedValue = this.head.value
        this.head = this.head.next; 
        this.length--;
      }  else {
        deletedValue = null;
      }
      return deletedValue;
    } 
    
    const previousNode = this._find(index-1, this._testIndex),
          deletedNode = previousNode ? previousNode.next : null;
    if (!deletedNode) {
      return null
    } 
    previousNode.next = deletedNode.next;
    if (deletedNode && !deletedNode.next) {
      this.tail = previousNode
    }
      
    this.length--;
    return deletedNode.value;
  }
}

module.exports = LinkedList