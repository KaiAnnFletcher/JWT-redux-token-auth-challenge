require("dotenv").config();

var express = require("express");
var cors = require('cors');
var bodyParser = require('body-parser');
const passport = require("passport");
const routes = require("./routes");
var db = require("./models")

var app = express();
var PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static("client/build"));
}
app.use(cors());

//Passport middleware
app.use(passport.initialize());

//Passport config
require("./config/passport")(passport);

app.use(routes);
console.log("routes hit in server.js")
var syncOptions = { force: false };
// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
    syncOptions.force = true;
};

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
    app.listen(PORT, function() {
      console.log(
        "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
        PORT,
        PORT
      );
    });
  });
