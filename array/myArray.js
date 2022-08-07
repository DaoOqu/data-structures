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
}


const newArray = new MyArray();
newArray.push('hello');
newArray.push('world');
console.log(newArray);