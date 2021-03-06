var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.render(); 
    this.collection.on('add', this.render, this)
    this.collection.on('remove', this.render, this)
  },

  tagName: "table",

  render: function() {
    
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }
});
