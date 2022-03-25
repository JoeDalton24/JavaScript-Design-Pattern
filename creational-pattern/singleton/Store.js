const Logger = require("./Logger");

const logger = new Logger().getInstance();

class Store {
  constructor(name, inventory = []) {
    this.name = name;
    this.inventory = inventory;
    logger.log(
      `new arrival , name:${name} has ${this.inventory.length} in stock`
    );
  }
}

module.exports = Store;
