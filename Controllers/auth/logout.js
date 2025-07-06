exports.logout = async (req, res) => {
    try {
        res.clearCookie("MythoMind", {
            httpOnly: true,
            secure: true,
            sameSite: "None",
            path: "/",
        });

        res.status(200).json({ message: "Logged out successfully." });
    } catch (err) {
        res.status(500).json({ message: "Server error." });
    }
};
