var mc= require("mongodb").MongoClient;
var dbo;
var usercollectionobj;
var admincollectionobj;
var dburl="mongodb+srv://meanstack:meanstack@cluster0-ujtc6.mongodb.net/test?retryWrites=true&w=majority";

function initDb()
{
    mc.connect(dburl,{useNewUrlParser: true, useUnifiedTopology: true}, (err,client)=>{
        if(err)
            console.log("Error in connecting db", err);
        else
            {
                console.log("connected to database");
                dbo=client.db("mydb");
                usercollectionobj= dbo.collection("usercollection");
                admincollectionobj= dbo.collection("admincollection");
            }
    });
}

function getDb()
{
    //console.log(dbo,"Db has not been intiliazed. Please call initDb function first");
   return{
       usercollectionobj: usercollectionobj,
       admincollectionobj:admincollectionobj
   }
}
module.exports={
    getDb,
    initDb
}