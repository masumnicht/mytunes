// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    this.on('add', this.playFirst, this);
    this.on('remove', this.playInLine, this);
    this.on('dequeue', this.removeFromQueue, this);

  },

  playFirst: function(song) {
    if (this.length === 1){
      song.play();
    }
  },
  playInLine: function() {
    if(this.length> 1){
      this[0].play();
    }
  },
  dequeue: function() {
    this.shift();
    this.playInLine();
  },
  removeFromQueue: function(song) {
    this.remove(song);
  }

});