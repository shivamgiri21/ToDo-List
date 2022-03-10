const express =require("express");
const { log } = require("console");
const https =require("https");
const bodyParser = require("body-parser");

const app =express();
let port =5050;

let items = ["Wake up :)"];
let works =["Gym"];




app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res){

//date part
     
var today = new Date();

var options ={
    weekday:"long",
    month:"long",
    day : "numeric",
    time: "numeric"
};

var time= today.getHours();
if(time>0&&time<12)
{
   var times ="GOOD MORNING";

}

else if(time>12&&time<16)
{
   var times ="GOOD AFTERNOON";
   
}
else if(time>16&&time<20)
{
   
    var times ="GOOD EVENING";
}
else{
    var times ="GOOD NIGHT";
}

var wish = times.substring(5);

var day = today.toLocaleDateString("en-US", options);
 res.render("list", {listTitle: day ,itemList: items ,time:times,wishes:wish});
console.log(day);






});





app.post("/",function(req,res){
   
   console.log(req.body);
    let item =req.body.additem;
    

   if (req.body.listName === "Work List") 
   {
        console.log("true") ;
        works.push(item);
        res.redirect("/work");
        
   } 

else {
    console.log("false") ;
 items.push(item);
    res.redirect("/");
   }

});


app.get("/work",function(req,res){
  
    res.render("list", {listTitle: "Work List" ,itemList: works });
  
  
  });

app.get("/",function(req,res){


})

app.listen(port,function(){
    console.log("server is running" + port);
});
















