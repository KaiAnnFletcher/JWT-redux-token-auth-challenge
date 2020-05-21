const router = require("express").Router();
const users = require("./users");

//Routes
router.use("/users", users);
console.log("users routes hit in routes/api/index.js")

module.exports = router;