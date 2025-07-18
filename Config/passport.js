const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../Models/userModel");
const jwt = require("jsonwebtoken");

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "https://mythomind-backend.onrender.com/api/auth/google/callback"
}, async (accessToken, refreshToken, profile, done) => {
    try {
        let user = await User.findOne({ googleId: profile.id });
        if (!user) {
            user = await User.create({
                googleId: profile.id,
                name: profile.displayName,
                email: profile.emails[0].value,
                profilePic: profile.photos[0].value
            });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

        return done(null, { user, token });
    } catch (error) {
        return done(error, null);
    }
}));

passport.serializeUser((userData, done) => done(null, userData));
passport.deserializeUser((userData, done) => done(null, userData));