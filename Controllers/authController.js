const oAuth = require("./auth/oAuth");
const logout = require("./auth/logout");
const sendUser = require("./auth/sendUser");

module.exports = {
    googleCallback : oAuth.oAuth,
    logout: logout.logout,
    sendUser: sendUser.sendUser
}