const Logger = require("./Logger");

const logger = new Logger().getInstance();

class Shopper {
  constructor(name, money = 0) {
    this.name = name;
    this.money = money;
    logger.log(`new Shopper is created,name:${name} has money:${money}`);
  }
}

module.exports = Shopper;
