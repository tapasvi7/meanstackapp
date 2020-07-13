//create mini express application to handle admin reqs
const exp= require("express");
const userApp= exp.Router();
const bcrypt= require("bcrypt");
const jwt= require("jsonwebtoken");
userApp.use(exp.json());
const dbo= require('../db');
dbo.initDb();

userApp.get('/readprofile/:username',(req,resp)=>{
    resp.send({message: 'user profile works'});
});

/*userApp.post('/login',(req,resp)=>{
    resp.send({message: 'user login works'});
});*/



userApp.post('/register',(req,resp)=>{
    //resp.send({message: 'user register works'});
    var userCollectionObj= dbo.getDb().usercollectionobj;
    userCollectionObj.findOne({username: req.body.username}, (err,userObjFromDb)=>{
        if(err)
        {
            console.log("error occured",err);
        }
        else if(userObjFromDb != null)
        {
            resp.send({message:"username already existed"});
        }
        else
        {
            var hashedPassword=bcrypt.hashSync(req.body.password,7);
            req.body.password=hashedPassword;
            userCollectionObj.insertOne(req.body,(err,succ)=>{
                if(err)
                {
                    console.log("error in insertion",err);
                }
                else
                {
                    resp.send({message:"insertion success"});
                }
            });

        }
    });
});


//login register handler

userApp.post('/login',(req,resp)=>{

   var userCollectionObj=dbo.getDb().usercollectionobj;
   userCollectionObj.findOne({username:req.body.username},(err,userObj)=>{
       if(err)
       {
           console.log("error occured",err);
       }
       else if(userObj==null)
       {
           resp.send({message:"invalid username"});
       }
       else
       {
           bcrypt.compare(req.body.password,userObj.password,(err,result)=>{
               if(err)
               {
                   console.log("some error occured",err);
               }
               else if(result==false)
               {
                   resp.send({message:"invalid password"});
               }
               else
               {
                   console.log("entered into jwt sign");
                   jwt.sign({username:userObj.username},'ssshhh',{expiresIn:60},(err,signedToken)=>{
                       if(err)
                       {
                           console.log("err in sign",err);
                       }
                       else
                       {
                           console.log("response sent");
                           resp.send({message:signedToken,username:userObj.username});
                           console.log("response sent2");
                       }
                   })
               }
           });
       }
   });
});

//export userApp

const verifyToken=require("../middlewares/verifyToken");

userApp.get('/test',verifyToken,(req,res)=>{
    res.send({message:"test working"});
})

module.exports= userApp;