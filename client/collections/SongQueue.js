// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    this.on('add', this.playFirst, this);
    this.on('remove', this.playInLine, this);
    this.on('dequeue', this.removeFromQueue, this);

  },

  playInLine: function() {
    if(this.length > 0){
      console.log(this);
      console.log(this.models[0])
      this.models[0].play();
    }
  },
  playFirst: function(song) {
    if (this.length === 1){
      song.play();
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