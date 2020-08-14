const Stock = require("../../models/stock");
const User = require("../../models/user");
const Officer = require("../../models/officer");
const Farm = require("../../models/farm");

const { dateToString } = require("../../helper/date");

const user = async (userId) => {
  try {
    const user = await User.findById(userId);
    return {
      ...user._doc,
      _id: user._id,
      stock_holdings: stocks.bind(this, user._doc.stock_holdings),
      Own_farm: farms.bind(this, user._doc.Own_farm),
      Own_stock: shares.bind(this, user._doc.Own_stock),
      Own_wage: wages.bind(this, user._doc.Own_wage),
    };
  } catch (err) {
    throw err;
  }
};

const farms = async (farmIds) => {
  try {
    const farms = await Farm.find({ _id: { $in: farmIds } });
    return farms.map((farm) => {
      return showFarmInfo(farm);
    });
  } catch (err) {
    throw err;
  }
};

const shares = async (shareIds) => {
  try {
    const shares = await Share.find({ _id: { $in: shareIds } });
    return shares.map((share) => {
      return showShareInfo(share);
    });
  } catch (err) {
    throw err;
  }
};
const wages = async (wageIds) => {
  try {
    const wages = await Wage.find({ _id: { $in: wageIds } });
    return wages.map((wage) => {
      return showWageInfo(wage);
    });
  } catch (err) {
    throw err;
  }
};

const officer = async (officerId) => {
  try {
    const officer = await Officer.findById(officerId);
    return {
      ...officer._doc,
      _id: officer._id,
      privilege: officer.privilege,
    };
  } catch (err) {
    throw err;
  }
};

const stocks = async (stockIds) => {
  try {
    const stocks = await Stock.find({ _id: { $in: stockIds } });
    return stocks.map((stock) => {
      return showStockInfo(stock);
    });
  } catch (err) {
    throw err;
  }
};

const singleStock = async (stockId) => {
  try {
    const stock = await Stock.findById(stockId);
    return showStockInfo(stock);
  } catch (err) {
    throw err;
  }
};

const showUserInfo = (user) => {
  return {
    ...user._doc,
    _id: user._id,
    stock_holdings: stocks.bind(this, user._doc.stock_holdings),
    Own_farm: farms.bind(this, user._doc.Own_farm),
    Own_stock: shares.bind(this, user._doc.Own_stock),
    Own_wage: wages.bind(this, user._doc.Own_wage),
  };
};

const showFarmInfo = (farm) => {
  return {
    ...farm._doc,
    _id: farm._id,
    Farm_owner: stocks.bind(this, farm._doc.Farm_owner),
  };
};

const showShareInfo = (share) => {
  return {
    ...share._doc,
    _id: share._id,
    Share_owner: user.bind(this, share.Share_owner),
  };
};
const showWageInfo = (wage) => {
  return {
    ...wage._doc,
    _id: wage._id,
    Wage_owner: user.bind(this, wage.Wage_owner),
  };
};

const showStockInfo = (stock) => {
  return {
    ...stock._doc,
    _id: stock.id,
    date: dateToString(stock._doc.date),
  };
};

const showOfficerInfo = (officer) => {
  return {
    ...officer._doc,
    _id: officer.id,
  };
};

const showSellingStockInfo = (sellingStock) => {
  return {
    ...sellingStock._doc,
    _id: sellingStock.id,
    user: user.bind(this, sellingStock._doc.user),
    stock: singleStock.bind(this, sellingStock._doc.stock),
    createdAt: dateToString(sellingStock._doc.createdAt),
    updatedAt: dateToString(sellingStock._doc.updatedAt),
  };
};
exports.showOfficerInfo = showFarmInfo;
exports.showFarmInfo = showFarmInfo;
exports.showWageInfo = showWageInfo;
exports.showShareInfo = showShareInfo;
exports.showStockInfo = showStockInfo;
exports.showUserInfo = showUserInfo;
exports.showSellingStockInfo = showSellingStockInfo;
//exports.user = user;
//exports.stocks = stocks;
//exports.singleStock = singleStock;
