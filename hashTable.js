// let user = {
//   age: 54,
//   name: "Kylie",
//   magic: true,
//   scream: function () {
//     console.log("ahhhhh!");
//   },
// };

// console.log(user.age); // O(1)
// console.log(user.scream()); // O(1)

// user.spell = "abra kadaborah!"; // O(1)

// console.log(user);

// // When there is collision it goes to O(n) for lookup.

// const a = new Map();
// const b = new Set();

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return console.log(this.data);
  } // O(1)

  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  } // O(1) when no collisions, O(n) if there are collisions

  keys() {
    const keysArray = [];
    for (const bucket of this.data) {
      if (bucket) {
        if (bucket.length > 1) {
          for (let i = 0; i < bucket.length; i++) {
            keysArray.push(bucket[i][0]);
          }
        } else {
          keysArray.push(bucket[0][0]);
        }
      }
    }
    return keysArray;
  } // O(n)
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
myHashTable.set("apples", 54);
myHashTable.set("oranges", 2);
console.log(myHashTable.get("grapes"));
console.log(myHashTable.keys());
