const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name : {type: String, required: true},
    email : {type: String, required: true},
    googleId: {type: String},
    profilePic: {type: String},
}, {timestamps: true});


const User = mongoose.model("user", userSchema);
module.exports = User