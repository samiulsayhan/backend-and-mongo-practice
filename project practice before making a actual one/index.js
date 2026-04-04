const express = require("express");
const app = express();
const path = require("path")    ;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine','ejs');

app.get('/',function(req,res){
    res.render("index")
})
// dynamic routing 
// aekhane username ar age : disi mane profile ar por jae asbe ta dynamic hobe ar username a aeshe joma hobe, then username a jae data asche oita abar frontend a pathae dea hobe ae vabe --- req.params.username---
app.get('/profile/:usename',function(req,res){ 
    res.send(`wellcome , ${req.params.usename}`)
})
app.get('/author/:username/:age',function(req,res){
    res.send(`welcome , ${req.params.username} you are ${req.params.age} years old`) 
    // this params is actualy an object , which storing the dynamic data that we have serched for, in here it is storing the name and age ..
})

app.listen(3000, function(){
    console.log("its running")
})