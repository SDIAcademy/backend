const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/api");
const mongoose = require("mongoose");
const User = require("./model/user");

const app = express();

mongoose.connect("mongodb://localhost/test");
mongoose.Promise = global.Promise;
var db = mongoose.connection;
//DEBUG STATEMENT: console.log('this is your db\n'+db.collectionNames);
db.on("error connecting to mongoDB: ", console.log);
db.once("open", () => console.log("Successfully connected to mongoDB"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", routes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("listen on port " + port));
