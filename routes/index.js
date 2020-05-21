const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);
console.log("api routes hit in routes/index.js");
//  router.use(function(req, res) {
//  res.sendFile(path.join(__dirname, "../client/public/index.html"));
//   });

module.exports = router;