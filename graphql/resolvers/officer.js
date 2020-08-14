const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Officer = require("../../models/officer");
const { showOfficerInfo } = require("./merge");

module.exports = {
  officers: async () => {
    try {
      const officers = await Officer.find();
      return officers.map((officer) => {
        return showOfficerInfo(officer);
      });
    } catch (err) {
      throw err;
    }
  },
  createOfficer: async (args) => {
    try {
      const existingOfficer = await Officer.findOne({
        _id: args.officerInput._id,
      });
      if (existingOfficer) {
        throw new Error("officer exists already.");
      }
      const hashedPassword = await bcrypt.hash(
        args.officerInput.password_office,
        12
      );
      const officer = new Officer({
        id: +args.officerInput.id,
        name_office: args.officerInput.name_office,
        lastname_office: args.officerInput.lastname_office,
        birthday_office: args.officerInput.birthday_office,
        idcard_office: args.officerInput.idcard_office,
        email_office: args.officerInput.email_office,
        username_office: args.officerInput.username_office,
        password_office: hashedPassword,
        tellnumber_office: args.officerInput.tellnumber_office,
        tellnumber_office2: args.officerInput.tellnumber_office2,
        facebook_office: args.officerInput.facebook_office,
        line_office: args.officerInput.line_office,
        position: args.officerInput.position,
        type_wage: args.officerInput.type_wage,
        bank: args.officerInput.bank,
        bankId: args.officerInput.bankId,
        banktype: args.officerInput.banktype,
        wage: +args.officerInput.wage,
        socialsecurity: args.officerInput.socialsecurity,
        sspersen: +args.officerInput.sspersen,
        taxnum: args.officerInput.taxnum,
        texpersen: +args.officerInput.texpersen,
      });
      const result = await officer.save();
      return { ...result._doc, password: null, _id: result._id };
    } catch (err) {
      throw err;
    }
  },
  login_off: async ({ username_office, password_office }) => {
    const officer = await Officer.findOne({ username_office: username_office });
    if (!officer) {
      throw new Error("Officer does not exist!");
    }
    const isEqual = await bcrypt.compare(
      password_office,
      officer.password_office
    );
    if (!isEqual) {
      throw new Error("Password is incorrect!");
    }
    const token = jwt.sign(
      {
        userId: officer.username_office,
        positionId: officer.position,
        username_office: officer.username_office,
      },
      "somesupersecretkey",
      {
        expiresIn: "1h",
      }
    );
    return {
      userId: officer.username_office,
      positionId: officer.position,
      token: token,
      tokenExpiration: 1,
    };
  },
  updateOfficer: async (args, { OfficerId }) => {
    console.log(args);
    console.log(args.OfficerId);
    console.log(args.OfficerInput.socialsecurity);

    Officer.findByIdAndUpdate(
      args.OfficerId,
      {
        $set: {
          socialsecurity: args.OfficerInput.socialsecurity,
          sspersen: args.OfficerInput.sspersen,
          taxnum: args.OfficerInput.taxnum,
          texpersen: args.OfficerInput.texpersen,
        },
      },
      { new: true },
      (err, doc) => {
        if (err) {
          console.log("Something wrong when updating data!");
        }
        console.log(doc);
      }
    );
  },
  oneofficer: async ({ name_office }) => {
    const officer = await Officer.findOne({ name_office: name_office });
    console.log(name_office);

    if (!officer) {
      throw new Error("Officer does not exist!");
    }

    return showOfficerInfo(officer);
  },
};
