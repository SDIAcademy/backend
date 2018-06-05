const mongoose = require("mongoose");

//Saif: changed to consts because these should not be reassigned
const userSchema = mongoose.Schema({
	name: String,
	email: String,
	interests: [String],
	organizations: [String],
	courses: [String]
});

const User = mongoose.model("users", userSchema);

module.exports = User;
