# Why Singleton Pattern

-it ensures that a class has only one instance which is useful if you want to control access to a resource (database file)

-it provide a global acces point to that instance.

# Example 1

```javascript
class Logger {
  constructor() {
    this.logs = [];
  }

  count() {
    return this.logs.length;
  }

  log(message) {
    const date = new Date();
    this.logs.push({ date: date.toString(), message });
    console.log(`${date.toISOString()} ====> ${message}`);
  }
}

class Singleton {
  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = new Logger();
    }
  }

  getInstance() {
    return Singleton.instance;
  }
}

module.exports = Singleton;
```

# Example 2

In nodejs you can export a single instance and thus take advantage of the module caching system.

```javascript
class Logger {
  constructor() {
    this.logs = [];
  }

  count() {
    return this.logs.length;
  }

  log(message) {
    const date = new Date();
    this.logs.push({ date: date.toString(), message });
    console.log(`${date.toISOString()} ====> ${message}`);
  }
}

module.exports = new Logger();
```
