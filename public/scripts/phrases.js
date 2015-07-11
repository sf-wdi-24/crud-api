// CLIENT-SIDE JAVASCRIPT

$(function() {

  // `phrasesController` holds all our phrase funtionality
  var phrasesController = {
    
    // compile phrase template
    template: _.template($('#phrase-template').html()),

    // pass each phrase object through template and append to view
    render: function(phraseObj) {
      var $phraseHtml = $(phrasesController.template(phraseObj));
      $('#phrase-list').append($phraseHtml);
    },

    all: function() {
      // send GET request to server to get all phrases
      $.get('/api/phrases', function(data) {
        var allPhrases = data;
        
        // iterate through each phrase
        _.each(allPhrases, function(phrase) {
          phrasesController.render(phrase);
        });
        
        // add event-handers for updating/deleting
        phrasesController.addEventHandlers();
      });
    },

    create: function(newWord, newDefinition) {
      var phraseData = {word: newWord, definition: newDefinition};
      
      // send POST request to server to create new phrase
      $.post('/api/phrases', phraseData, function(data) {
        var newPhrase = data;
        phrasesController.render(newPhrase);
      });
    },

    update: function(phraseId, updatedWord, updatedDefinition) {
      // send PUT request to server to update phrase

      // replace existing phrase in view with updated phrase
    },
    
    delete: function(phraseId) {
      // send DELETE request to server to delete phrase

      // remove deleted phrase from view
    },

    // add event-handlers to phrases for updating/deleting
    addEventHandlers: function() {
      // for update: submit event on `.update-phrase` form

      // for delete: click event on `.delete-phrase` button
    },

    setupView: function() {
      // append existing phrases to view
      phrasesController.all();
      
      // add event-handler to new-phrase form
      $('#new-phrase').on('submit', function(event) {
        event.preventDefault();
        
        // create new phrase with form data
        var newWord = $('#new-word').val();
        var newDefinition = $('#new-definition').val();
        phrasesController.create(newWord, newDefinition);
        
        // reset the form
        $(this)[0].reset();
        $('#new-word').focus();
      });
    }
  };

  phrasesController.setupView();

});