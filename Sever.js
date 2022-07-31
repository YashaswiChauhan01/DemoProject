var express=require('express');
var app=express();

app.get("/",(req,res)=> {
  res.send (
    "<h1> MY CHOICE</h1>"
    +"<hr/>"
    +"<h3>Healthy Stressfree Life</h3>"
    +"<br/>"
    +"<ol>"
    +"<li>Choco lava cake</li>"
    +"<li>Crunchy Cookies</li>"
    +"</ol>"
  );
});

app.get("/aboutus",(req,res)=> {
    res.send (
      "<h1> MY Choice</h1>"
      +"<hr/>"
      +"<h3>Owner : Yashaswi Chauhan</h3>"
      +"<br/>"
     
    );
  });
  
var server=app.listen(9000);
console.log(" MY Choice ice-cream parlour Online Shopping app running on port 9000");
