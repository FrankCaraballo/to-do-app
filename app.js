var express = require('express');
var todocontroler = require(__dirname +'./controlers/todocontrolers');
var app= express();

app.set('port', (process.env.PORT || 5000));

//set template engine
app.set('view engine','ejs');

//static files
app.use(express.static(__dirname +'./public'));


//execute controlers
todocontroler(app);
console.log("Controlers excecuted");
// port listener

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

console.log("Listening to port 3000");
