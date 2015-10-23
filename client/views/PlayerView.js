var PlayerView = Backbone.View.extend({

  el: '<audio controls autoplay />',

  events: {
    'ended': function() {
      this.model.dequeue();
    }
  },

  setSong: function(song) {
    this.model = song;
    this.render();
  },
  endSong: function(song) {
    this.model.ended();
  },

  render: function() {
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
