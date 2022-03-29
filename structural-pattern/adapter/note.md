# Why Adaoter Pattern

Adapter allow iteraction two class with incompatible interface.

# Example

In this example we build a localstorage for the node js environnement

```javascript
const fs = require("fs");

class LocalStorage {
  constructor() {
    if (fs.existsSync("localStorage.json")) {
      this.items = JSON.parse(fs.readFileSync("localStorage.json"));
    } else {
      this.items = {};
    }
  }
  getLength() {
    return Object.keys(this.items).length;
  }
  getItem(key) {
    return this.items[key];
  }

  setItem(key, value) {
    this.items[key] = value;
    fs.writeFileSync("localStorage.json", JSON.stringify(this.items, null, 2));
  }

  clear() {
    this.items = {};
    fs.unlinkSync("localStorage.json");
  }
}

module.exports = new LocalStorage();
```
