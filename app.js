const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/views/date.js")
const app = express();
// app.use(express.static(__dirname + "/public"));
var items = ["Buy Food"];
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');
workItems = [];
app.use(express.static("public"));

let options = {
    weekday: "long",
    day : "numeric",
    month:"long"
}


app.get("/",function(req,res){
 let day = date.getDate();
  res.render("list", {listTitle : day, newListItems : items});
});

app.get("/work",function(req,res){

    res.render("list", {listTitle : "Work List", newListItems : workItems});
  });

app.post("/",function(req,res){
    let item = req.body.newItem;
    console.log(req.body);
   if( req.body.list==='Work')
   {
    workItems.push(req.body.newItem);
    res.redirect("/work");
   }
   else
    {items.push(req.body.newItem);
    res.redirect("/");}
  });


  

app.listen(3000, function(){
 console.log("Listen on port 3000");
 console.log(__dirname);
});
