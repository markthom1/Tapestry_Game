                      //The file acts as the hub through which mainbackup.js access the gamePlay and webPages functions
var hub = (function(){
  return {
    webPages: function(){
      return webPages
    },

    gamePlay: function() {
      return gamePlay
    }
  }
})();
