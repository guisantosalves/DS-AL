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
    let adrr = this._hash(key);
    // avoiding hash collision
    if (!this.data[adrr]) {
      this.data[adrr] = [];
    }
    this.data[adrr].push([key, value]);
    return this.data;
  }

  get(key) {
    let addr = this._hash(key);
    const currentBucket = this.data[addr];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    const keysArr = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        console.log(this.data[i]);
        if (this.data[i].length > 1) {
          for (let j = 0; j < this.data[i].length; j++) {
            const element = this.data[i][j][0];
            keysArr.push(element);
          }
        } else {
          keysArr.push(this.data[i][0][0]);
        }
      }
    }
    return keysArr;
  }
}

const myhashtable = new HashTable(50);
myhashtable.set("grapes", 10000);
myhashtable.set("apples", 500);
myhashtable.set("bananas", 700);
console.log(myhashtable.get("grapes"));
console.log(myhashtable.keys());
