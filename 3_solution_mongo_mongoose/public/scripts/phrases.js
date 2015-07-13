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
      $.ajax({
        type: 'PUT',
        url: '/api/phrases/' + phraseId,
        data: {
          word: updatedWord,
          definition: updatedDefinition
        },
        success: function(data) {
          var updatedPhrase = data;

          // replace existing phrase in view with updated phrase
          var $phraseHtml = $(phrasesController.template(updatedPhrase));
          $('#phrase-' + phraseId).replaceWith($phraseHtml);
        }
      });
    },
    
    delete: function(phraseId) {
      // send DELETE request to server to delete phrase
      $.ajax({
        type: 'DELETE',
        url: '/api/phrases/' + phraseId,
        success: function(data) {
          
          // remove deleted phrase from view
          $('#phrase-' + phraseId).remove();
        }
      });
    },

    // add event-handlers to phrases for updating/deleting
    addEventHandlers: function() {
      $('#phrase-list')

        // for update: submit event on `.update-phrase` form
        .on('submit', '.update-phrase', function(event) {
          event.preventDefault();
          
          // find the phrase's id (stored in HTML as `data-id`)
          var phraseId = $(this).closest('.phrase').attr('data-id');
          
          // udpate the phrase with form data
          var updatedWord = $(this).find('.updated-word').val();
          var updatedDefinition = $(this).find('.updated-definition').val();
          phrasesController.update(phraseId, updatedWord, updatedDefinition);
        })
        
        // for delete: click event on `.delete-phrase` button
        .on('click', '.delete-phrase', function(event) {
          event.preventDefault();

          // find the phrase's id
          var phraseId = $(this).closest('.phrase').attr('data-id');
          
          // delete the phrase
          phrasesController.delete(phraseId);
        });
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