/*
Arrays in JavaScript are just objects with integer-based keys that act like indexes
Regardless, this implementation is still applicable to how arrays work in other languages
*/

class MyArray {
  // This is the inital function that will be run to create the "array" and its two properties
  constructor() {
    this.length = 0;
    this.data = {};
  }

  // This is the "access" method that takes an index to grab the data from memory
  get(index) {
    return this.data[index];
  }

  // This is the "push" method that adds an item to the end of the array
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  // This is the "pop" methods that removes an item from the end of the array
  pop() {
    const lastItem = this.data[this.length -1 ];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  // This is the "delete" method that deletes an item from anywhere in the array
  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return lastItem;
  }

  // This is the "shift" method that moves all items over to replace the index that was deleted
  shiftItems(index) {
    for(let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}


const newArray = new MyArray();
newArray.push('hello');
newArray.push('world');
newArray.push('!');
newArray.delete(1);
newArray.push('this');
newArray.push('cool');
newArray.delete(1);
console.log(newArray);