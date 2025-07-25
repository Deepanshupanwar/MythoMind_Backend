const User = require("../../Models/userModel")
exports.sendUser = async (req, res) => {
    const user = await User.findById(req.user);

    const authHeader = req.headers.authorization;

    if (authHeader && authHeader.startsWith("Bearer ")) {
      res.cookie("MythoMind", authHeader.split(" ")[1], {
        httpOnly: true,
        secure: true,
        sameSite: "None",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });
    }

    res.status(200).json(user)
    
};