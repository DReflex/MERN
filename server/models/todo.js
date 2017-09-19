const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema ({
    data:[
      {text:String}
    ]

});
const Todo = mongoose.model('todo', TodoSchema);

module.exports = Todo;
