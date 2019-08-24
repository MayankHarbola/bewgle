var express = require('express');
var app = express();

app.use(express.static(__dirname));

app.get("/",function(req,res){
    res.render("index");
})

app.listen(process.env.PORT||1234,()=>{
    console.log("server started");
})
