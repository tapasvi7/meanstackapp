//create mini express application to handle admin reqs
const exp= require("express");
const adminApp= exp.Router();
const dbo= require('../db');
dbo.initDb();

adminApp.get('/readprofile/:username',(req,resp)=>{
    resp.send({message: 'admin profile works'});
});

adminApp.post('/login',(req,resp)=>{
    resp.send({message: 'admin login works'});
});


//export adminApp

module.exports= adminApp;