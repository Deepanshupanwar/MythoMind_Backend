const jwt = require("jsonwebtoken");

exports.Verify = async (req,res,next)=>{
    try{
        const token = req.cookies["MythoMind"] ||  req.headers.authorization?.split(" ")[1];
        if(!token) return res.status(401).json({message: "Unauthorized"});
        jwt.verify(token,process.env.JWT_SECRET,async function(err, decoded){
            if(err){
                return res.status(401).json({message: "Unauthorized"});
            }
            req.user = decoded.id;
            next();
        }) 
    }
    catch(e){
        res.status(500).json({message: "server error"});
    }
}