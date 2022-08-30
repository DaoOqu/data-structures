/*
Binary Search Trees are comprised of nodes. With that being said, we can create a binary search tree
using similar properties as Linked Lists
*/

class Node {
  constructor() {
    this.left = null;
    this.right = null;
    this.value = this.value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  
  // This "insert" method lets us insert a node within the tree
  insert(value) {
    const newNode = new Node(value);
    
    if(this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while(true) {
        if(value < currentNode.value) {
          // Left Side
          if(!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          // Right Side
          if(!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
}

const tree = new BinarySearchTree();