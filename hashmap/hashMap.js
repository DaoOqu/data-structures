/*
Hashmaps in JavaScript are just objects that have a key-value pair
Most languages have built in hashmap/tables that work in a similar fashion

In this implementation, we'll use arrays instead of objects but they work similarly
*/

 class HashMap {
  // This is the initial function that will be run to initialize a hashmap using arrays
  constructor(size) {
    this.data = new Array(size);
  }

  // This method creates a hash for the given key
  _hash(key) {
    let hash = 0;
    for(let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  // This "set" method is used to store a key/value pair to the respective hashmap by creating a hash
  set(key, value) {
    let address = this._hash(key);
    if(!this.data[address]) {
      this.data[address] = [];
    } 
    this.data[address].push([key, value]);
  }

  // This "get" method is used to retrieve the value from a given key
  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    if(currentBucket) {
      for(let i = 0; i < currentBucket.length; i++) {
        if(currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }

  // This "keys" method allows us to iterate through all the keys of our hashmap with collision prevention
  keys() {
    if(!this.data.length) return undefined;

    const keysArray = [];
    for(let i = 0; i < this.data.length; i++) {
      if(this.data[i] && this.data[i].length) {
        if(this.data.length > 1) {
          for(let j = 0; j < this.data[i].length; j++) {
            keysArray.push(this.data[i][j][0]);
          }
        } else keysArray.push(this.data[i][0][0]);
      }
    }
    return keysArray;
  }
 }