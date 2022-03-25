const Store = require("./Store");
const Shopper = require("./Shopper");
const Logger = require("./Logger");

const logger = new Logger().getInstance();

logger.log("App start ...");

const newShopper = new Shopper("Laye", 1000);

const newShop = new Store("summer season", [
  {
    article: "T-Shirt",
    quantity: 10,
  },
  {
    article: "Short",
    quantity: 4,
  },
  {
    article: "cap",
    quantity: 12,
  },
]);

logger.log("finished config...");

console.log(`${logger.count()} logs total`);

logger.logs.map((log) => console.log(`${log.message}`));
