const UserModel = require("../model/UserModel")


class UserController {
  async addUser(req, res) {
    const { email } = req.body;

    try {
      const userExist = await UserModel.findOne({ email });
      if (userExist) {
        throw Error("This email is  already used");
      }
      const savedUser = await UserModel.create(req.body);
      return res.json({ message: savedUser, success: true });
    } catch (error) {
      return res.json({ message: error.message, success: false });
    }
  }
  async updateUser(req, res) {
    const { userId } = req.params;
    try {
      const updatedUser = await UserModel.findByIdAndUpdate(
        userId,
        {
          $set: req.body,
        },
        {
          new: true,
          returnDocument:true,
          returnOriginal:false
        }
      );
      const {password,...others} = updatedUser;
      res.status(200).json({ message: others, success: true });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error, success: false });
    }
  }

  async getUser(req,res){
    try {

      const user = await UserModel.findById(req.params.userId);
      res.status(200).json({message:user,success:false})
      
    } catch (error) {
      res.status(500).json({message:error.message,success:false});
    }
  }
   async getAllUsers(req,res){
    try {

      const user = await UserModel.find({});
      res.status(200).json({message:user,success:false});
      
    } catch (error) {
      res.status(500).json({message:error.message,success:false});
    }
  }
  async deleteUser(req, res) {
    const { userId } = req.params;
    try {
      await UserModel.findByIdAndDelete(userId);
      res
        .status(200)
        .json({ message: "User deleted successfully", success: true });
    } catch (error) {
      res.status(500).json({ message: error, success: false });
    }
  }

  
}
module.exports = new UserController();
