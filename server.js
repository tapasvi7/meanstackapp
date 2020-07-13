const exp= require("express");
const app= exp();
const port= 3000;

//importing adminApp & userApp

const adminApp= require("./apis/adminApi");
const userApp= require("./apis/userApi");

// forwarding req object to api's

app.use("/admin",adminApp);
app.use("/user",userApp);

const path = require("path");
app.use(exp.static(path.join(__dirname,'./dist/meanstackapp')));



app.listen(port,(err,resp)=>
{
    if(err)
    {
        console.log("some error has occured",err);
    }
    else
    {
        console.log("server listening on port no:",port);
    }
});