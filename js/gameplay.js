var gamePlay = (function(){
  return {
    showBallAll: function() {     //Controls the game.
      if (allowPlay) {
        if (unpauseSong) {
          audioElement.play();
          unpauseSong = false;
        };
        var whichOrbs = theArray[i] //theArray is determined by the song (songs[i].beats properties) that is selected on the Play page.

        switch(whichOrbs){  //Switch statement that checks the element of theArray (whichOrbs) to determine which orbs to release.
          case 1:
              lanes[0].showBall();
            break;
          case 12:
              lanes[0].showBall();
              lanes[1].showBall();
            break;
          case 13:
              lanes[0].showBall();
              lanes[2].showBall();
            break;
          case 2:
              lanes[1].showBall();
            break;
          case 23:
              lanes[1].showBall();
              lanes[2].showBall();
            break;
          case 3:
              lanes[2].showBall();
            break;
          case 4:
              lanes[0].showBall();
              lanes[1].showBall();
              lanes[2].showBall();
            break;


          default:
        }
        $('#score-here').text(`${totalPoints}`);

        i++           //Iterating "i".

        if (i === theArray.length) {      //When theArray is done, the following code is run. This is end of game code.
          setTimeout(function(){
          $('.backshade').css("opacity","0.0");
          $('.play-guide').text(`Complete! You scored: ${totalPoints}`);
          $('.play-guide').slideDown('fast');
          audioElement.pause();
          audioElement.currentTime = 0;}, 3000);

          setTimeout(function(){
            for (score in localStorage){
              highScores.push(parseInt(localStorage.getItem(score)));  //These lines looks for and sets a new high score.
            };
            highScores.push(totalPoints);
            highScores.sort(function(a, b){return b-a});
            highScores.pop();
            console.log(localStorage);
            for (score in localStorage) {
              localStorage.setItem(score, highScores[parseInt(score)]);
            };


            totalPoints = 0;        //Reset points.

            window.location.href = "/Users/akv083/7week/Tapestry_Game/index.html";   //Reset game.
          },8000)

        }
      }
    }
  }
})();
