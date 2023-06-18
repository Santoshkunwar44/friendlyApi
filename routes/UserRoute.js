const { addUser, deleteUser, getUser, getAllUsers, updateUser } = require("../controller/UserController");

const router = require("express").Router();

router.post("/adduser",addUser);
router.get("/allusers",getAllUsers)
router.get("/:userId",getUser);
router.delete("/:userId",deleteUser);
router.put("/:userId",updateUser);
module.exports = router;



