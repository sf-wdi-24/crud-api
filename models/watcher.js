var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var actions = ['INDEX', 'SHOW', 'CREATE', 'UPDATE', 'DESTROY'];
var models = ['Wine', 'Book', 'Pokemon', 'Todo'];

var TodoSchema = new Schema({
  action: { type: String, enum: actions }},
  model: { type: String, enum: models }},
});

var Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;
