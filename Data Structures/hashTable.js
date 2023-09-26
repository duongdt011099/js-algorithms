class HashTable {
  constructor(size = 4) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    const WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let idx = this._hash(key);
    if (!this.keyMap[idx]) this.keyMap[idx] = [];
    this.keyMap[idx].push([key, value]);
  }

  get(key) {
    let idx = this._hash(key);
    const currentKey = this.keyMap[idx];
    let found = null;
    if (currentKey) {
      for (let i = 0; i < currentKey.length; i++) {
        if (currentKey[i][0] === key) {
          found = currentKey[i][1];
          break;
        }
      }
    }
    return found;
  }

  keys() {
    var results = [];
    for(let i = 0; i < this.keyMap.length; i++) {
      for (let j = 0; j < this.keyMap[i].length; j++) {
        const item = this.keyMap[i][j][0];
        if (!results.includes(item)) results.push(item);
      }
    }
    return results;
  }

  values() {
    var results = [];
    for(let i = 0; i < this.keyMap.length; i++) {
      for (let j = 0; j < this.keyMap[i].length; j++) {
        const item = this.keyMap[i][j][1];
        if (!results.includes(item)) results.push(item);
      }
    }
    return results;
  }
}

var ht = new HashTable();
ht.set("hello", "byebye");
ht.set("dalat", "???");
ht.set("hanoi", "29-30");
ht.set("danang", "43");
ht.set("quangnam", "92");
ht.set("quangnam", "92");
console.log(ht.get("dalat"));
console.log(ht.keys());
console.log(ht.values());
