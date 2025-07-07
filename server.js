const express = require("express");
require("dotenv").config();
const authRouter = require("./Routes/authRoutes");
const queryRouter = require("./Routes/queryRoutes");
const connectDB = require("./Config/db");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("./Config/passport");
const passport = require("passport");

const app = express()
connectDB();

app.use(cors({
    origin: "https://mytho-mind-frontend.vercel.app",
    credentials: true
}))
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(passport.initialize());

app.get("/",(req,res)=>{
    res.send("hello world")
})

app.use("/api/auth/",authRouter);
app.use("/api/Query/", queryRouter)

app.listen(process.env.PORT, ()=>{
    console.log("server is listening to port: "+process.env.PORT)
})