const authResolver = require("./auth");
const stockResolver = require("./stock");
const sellingStockResolver = require("./sellingStock");
const officerResolver = require("./officer");
const farmResolver = require("./Farm");
const shareResolver = require("./share")
const wageResolver = require("./wage")
const rootResolver = {
  ...authResolver,
  ...stockResolver,
  ...sellingStockResolver,
  ...officerResolver,
  ...farmResolver,
  ...shareResolver,
  ...wageResolver
};

module.exports = rootResolver;
