var express = require('express');
var todocontroler = require('./controlers/todocontrolers');
var app= express();

//set template engine
app.set('view engine','ejs');

//static files
app.use(express.static('./public'));


//execute controlers
todocontroler(app);
console.log("Controlers excecuted");
// port listener
app.listen(3000);
console.log("Listening to port 3000");
