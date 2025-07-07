exports.oAuth = async (req,res)=>{
    try{
        const { user, token } = req.user;
        res.redirect(`https://mytho-mind-frontend.vercel.app/OauthSuccess?token=${token}`)
    }
    catch(err){
        res.status(500).json({message: "server error"})
    }
}