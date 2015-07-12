var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PhraseSchema = new Schema({
  word: String,
  definition: String
});

var Phrase = mongoose.model('Phrase', PhraseSchema);

module.exports.Phrase = Phrase;