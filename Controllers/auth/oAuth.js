exports.oAuth = async (req,res)=>{
    try{
        const { user, token } = req.user;
        res.redirect(`http://localhost:5173/OauthSuccess?token=${token}`)
    }
    catch(err){
        res.status(500).json({message: "server error"})
    }
}