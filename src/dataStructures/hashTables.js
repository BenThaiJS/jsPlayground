/* What is a hash table?

Hash tables are used to store key-value pairs

They are like arrays, but the keys are not ordered
unlike arrays, hash tables are fast for all the following operations: 
finding values, adding new values, and removing values!

*/

// export class HashTable {
//     constructor(size = 4) {
//       this.keyMap = new Array(size);
//     }

//     _hash(key) {
//       let total = 0;
//       let WEIRD_PRIME = 31;
//       for (let i = 0; i < Math.min(key.length, 100); i++) {
//         let char = key[i];
//         let value = char.charCodeAt(0) - 96;
//         total = (total * WEIRD_PRIME + value) % this.keyMap.length;
//       }
//       return total;
//     }
//     set(key, value) {
//       let index = this._hash(key);
//       if (!this.keyMap[index]) {
//         this.keyMap[index] = [];
//       }
//       this.keyMap[index].push([key, value]);
//       return index;
//     }
//     get(key) {
//       let index = this._hash(key);
//       if (this.keyMap[index]) {
//         for (let i = 0; i < this.keyMap[index].length; i++) {
//           if (this.keyMap[index][i][0] === key) {
//             console.log(this.keyMap[index]);
//             return this.keyMap[index][i][1];
//           }
//         }
//       }
//       return undefined;
//     }
//     keys() {
//       let keysArr = [];
//       for (let i = 0; i < this.keyMap.length; i++) {
//         if (this.keyMap[i]) {
//           for (let j = 0; j < this.keyMap[i].length; j++) {
//             if (!keysArr.includes(this.keyMap[i][j][0])) {
//               keysArr.push(this.keyMap[i][j][0]);
//             }
//           }
//         }
//       }
//       return keysArr;
//     }
//     values() {
//       let valuesArr = [];
//       for (let i = 0; i < this.keyMap.length; i++) {
//         if (this.keyMap[i]) {
//           for (let j = 0; j < this.keyMap[i].length; j++) {
//             if (!valuesArr.includes(this.keyMap[i][j][1])) {
//               valuesArr.push(this.keyMap[i][j][1]);
//             }
//           }
//         }
//       }
//       return valuesArr;
//     }
//   }

export class HashTable {
  constructor(size) {
    this.table = new Array(size)
    this.size = size
  }
  hash(key) {
    let total = 0;
    for(let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i)
    }
    return total % this.size
  }
  set(key, value) {
    const index = this.hash(key)
    const bucket = this.table[index];
    if(!bucket) {
      this.table[index] = [[key, value]]
    } else {
      const sameKeyItem = bucket.find(item => item[0] === key)
      if(sameKeyItem) {
        sameKeyItem[1] = value
      } else {
        bucket.push([key, value])
      }
    }
  }
  get(key) {
    const index = this.hash(key)
    const bucket = this.table[index]
    if(bucket) {
      const sameKeyItem = bucket.find(item => item[0] === key)
      if(sameKeyItem) {
        return sameKeyItem[1]
      }
    }
    return undefined
  }
  remove(key) {
    const index = this.hash(key)
    const bucket = this.table[index]
    if(bucket) {
      const sameKeyItem = bucket.find(item => item[0] === key)
      if(sameKeyItem) {
        bucket.splice(bucket.indexOf(sameKeyItem, 1))
      }
    }
  }
  display() {
    for(let i = 0; i < this.table.length; i++) {
      if(this.table[i]) {
        console.log(i, this.table[i])
      }
    }
  }
}