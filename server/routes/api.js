const express= require('express');
const router = express.Router();
const Todo = require('../models/todo');

//get all
router.get('/todos', function(req, res, next){
  Todo.find({}).then(function(result){
    res.send(result);
  }).catch(next);
});

router.post('/todos', function(req, res, next){
  console.log(req.body)
  Todo.create(req.body).then(function(Product){
    res.send(Product);
  }).catch(next)
});

router.put('/todos/:id', function(req, res, next){
  console.log("todos init", req.body)
    Todo.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Todo.findOne({_id: req.params.id}).then(function(ninja){
            res.send(ninja);
        });
    }).catch(next);
});

router.delete('/todos/:id', function(req, res, next){
  Todo.findByIdAndRemove({_id: req.params.id}).then(function(del){
    res.send(del);
  }).catch(next);
})
module.exports = router;
