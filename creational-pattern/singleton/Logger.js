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
