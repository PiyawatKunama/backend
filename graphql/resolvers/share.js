const Share = require("../../models/share");
const User = require("../../models/user");

const { showShareInfo } = require("./merge");

module.exports = {
  shares: async () => {
    try {
      const shares = await Share.find();
      return shares.map((share) => {
        return showShareInfo(share);
      });
    } catch (err) {
      throw err;
    }
  },
  createShare: async (args, req) => {
    const share = new Share({
      Value: +args.shareInput.Value,
      Count: +args.shareInput.Count,
      Num_start: +args.shareInput.Num_start,
      Status: args.shareInput.Status,
      Date: new Date(args.shareInput.Date),
      Share_owner: args.shareInput.Share_owner,
    });
    let createdShare;
    try {
      const result = await share.save();
      createdShare = showShareInfo(result);
      const Share_owner = await User.findById(args.shareInput.Share_owner);

      if (!Share_owner) {
        throw new Error("User not found.");
      }
      Share_owner.Own_Share.push(share);
      await Share_owner.save();

      return createdShare;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  updateShare: async (args, { shareId }) => {
    console.log(args);
    console.log(args.shareId);
    console.log(args.shareInput.Status);
    Share.findByIdAndUpdate(
      args.shareId,
      {
        $set: {
          Status: args.shareInput.Status,
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
  }, oneshare: async ({ Status}) => {
    const share = await Share.findOne({ Status: Status });
    console.log(Status);

    if (!share) {
      throw new Error("Share does not exist!");
    }
    
    return showShareInfo(share);
  },
  
};
