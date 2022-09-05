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

  // This "lookup" method lets us search for a specific item/node with in our BST
  lookup(value) {
    if(!this.root) return false;

    let currentNode = this.root;
    while(currentNode) {
      if(value < currentNode.value) {
        currentNode = currentNode.left;
      } else if(value > currentNode.value) {
        currentNode = currentNode.right;
      } else return currentNode;
    }
    return false;
  }

  // This "remove" method lets us remove a specific node from our BST
  remove(value) {
    if(!this.root) return false;

    let currentNode = this.root;
    let parentNode = null;
    while(currentNode) {
      if(value < currentNode.value) {
      // Left Side
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if(value > currentNode.value) {
      // Right Side
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if(currentNode.value === value) {
        // There is a match

        // Option 1: No right child
        if(currentNode.right === null) {
          if(parentNode === null) {
            this.root = currentNode.left;
          } else {
            // if parent > current value, make current left child a child of parent
            if(currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;
            } else if(currentNode.value > parentNode.value) {
              // if parent < current value, make left child a right child of parent
              parentNode.right = currentNode.left;
            }
          }

         // Option 2: Right child doesn't have a left child
        } else if(currentNode.right.left === null) {
          if(parentNode === null) {
            this.root = currentNode.left;
          } else {
            currentNode.right.left = currentNode.left;
            // if parent > current, make right child of the left the parent
            if(currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;

            // if parent < current, make right child a right child of parent
            } else if(currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }
        }
      }
    }
  }
}

const tree = new BinarySearchTree();
JSON.stringify(traverse(tree.root));

// This function helps test and display our BST
function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null :
  traverse(node.left);
  tree.right = node.right === null ? null :
  traverse(node.right);
  return tree;
}