var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Note = require('./note');

var PhraseSchema = new Schema({
  word: String,
  definition: String,
  notes: [Note.schema]
});

var Phrase = mongoose.model('Phrase', PhraseSchema);
module.exports = Phrase;