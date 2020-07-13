const jwt= require("jsonwebtoken");
let verifyToken=(req,res,next)=>{

    console.log("req obj=",req.headers["authorization"]);
    let tokenWithBearer=req.headers["authorization"];
    if(tokenWithBearer==undefined)
    {
        res.send({message:"please login to continue"});
    }
    else
    {
        //remove 1st 7 characters from token
        //using method split
        let token=tokenWithBearer.slice(7,tokenWithBearer.length);
        console.log("token is=",token);
        //verify the token
        jwt.verify(token,"ssshhh",(err,decodedToken)=>{
            if(err)
            {
                res.send({message:"please relogin to continue"});
            }
            else
            {
                //forward req obj to 
                console.log("decoded token=",decodedToken);
                next(req);
            }
        })
    }

}

//export
module.exports=verifyToken;