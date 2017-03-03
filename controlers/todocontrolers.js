var bodyParser = require('body-parser');
var mongoose = require('mongoose');


mongoose.Promise = global.Promise;
//conect to data bodyParser
mongoose.connect('mongodb://todo:todo@ds161099.mlab.com:61099/todolistfrank');

//create schema
var todoSchema = new mongoose.Schema({
  item: String,
  check: Boolean
});

var Todo = mongoose.model('Todo',todoSchema);

/*var itemOne = Todo({item: 'Buy something'}).save(function(err){
  if (err) throw err;
  console.log('Item saved');
});*/

//var data = [{item:'do'},{item:'done'}, {item: 'cool'}];

var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){

  app.get('/todo',function(req,res){
    //get data from mongodb
    Todo.find({}, function(err,data){
      if(err) throw err;
      res.render('todo',{todos:data});
      console.log("rendered");
    });


  });

  app.post('/todo',urlencodedParser,  function(req,res){
    //get data from UI into db
    var newTodo = Todo(req.body).save(function(err,data){
      if (err) throw err;
      res.json(data);
    });


      //data.push();
    //  res.json(data);
  });

  app.delete('/todo/:item',function(req,res){
    //delete from db
    Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function(err,data){
      if (err) throw err;
      res.json(data);
    });
    /*
    data = data.filter(function(todo){
      return todo.item.replace(/ /g,'-')!== req.params.item;
    });
    res.json(data);*/
  });


};
