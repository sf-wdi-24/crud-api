var db = require('../models');
var Pokemon = db.Pokemon;
var util = require('./utils');
var seedPokemon = require('../seeds/pokemon');


module.exports = {
  index: (req,res) => {
    Pokemon.find(function (err, allPokemons) {
      err ? res.status(500).json({ error: err.message }) :
        res.json({ pokemons: allPokemons });
    });
  },

  create: (req,res) => {
    var newPokemon = req.body;
    newPokemon.create(newPokemon, function (err, savedPokemon) {
      err ? res.status(500).json({ error: err.message }) :
        res.status(201).json(savedPokemon);
    });
  },

  nuke: (req,res) => {
    Pokmemon.remove({}, function (err, removedPokemons) {
      err ? res.status(500).json({ error: err.message }) :
        Pokemon.create(seedPokemons, function (err, createdPokemons) {
          err ? res.status(500).json({ error: err.message }) :
            res.redirect('/pokemon');
        });
      });
  },

  show: (req,res) => {
      var pokemonId = req.params.pokemonId;
      Pokemon.findOne({ _id: pokemonId }, util.getSingularResponse.bind(res));
  },

  destroy: (req,res) => {
    var pokemonId = req.params.id;
    Pokemon.findOneAndRemove({ _id: pokemonId }, util.getSingularResponse.bind(res));
  } ,

  update: (req,res) => {
    var pokemonId = req.params.pokemonId;
    var updatePokemon = req.body;
    Pokemon.findOneAndUpdate({ _id: pokemonId }, req.body, util.getSingularResponse.bind(res));
  }
};
