

const express = require("express");
const app = express();

app.use(express.static('public'))
let path = require("path");


app.get("/", function(req, res){
   res.sendFile(path.join(__dirname + "/public/index.html"));
});



const port = process.env.PORT || 3000;
const ip = process.env.IP || "127.0.0.1";
app.listen(port,function(){
    
});
