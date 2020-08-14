const Wage = require("../../models/wage");
const User = require("../../models/user");

const { showWageInfo } = require("./merge");

module.exports = {
  wages: async () => {
    try {
      const wages = await Wage.find();
      return wages.map((wage) => {
        return showWageInfo(wage);
      });
    } catch (err) {
      throw err;
    }
  },
  createWage: async (args, req) => {
    const wage = new Wage({
    Total_Value: +args.wageInput.Total_Value,
    Wage_owner: args.wageInput.Wage_owner,
    });
    let createdWage;
    try {
      const result = await wage.save();
      createdWage = showWageInfo(result);
      const Wage_owner = await User.findById(args.wageInput.Wage_owner);

      if (!Wage_owner) {
        throw new Error("User not found.");
      }
      Wage_owner.Own_Wage.push(wage);
      await Wage_owner.save();

      return createdWage;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },

};
