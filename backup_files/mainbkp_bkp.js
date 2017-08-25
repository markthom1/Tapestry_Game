if (!localStorage) {
  for (i=0; i<10; i++) {
    localStorage.setItem(`${i}`,0);
  };
};


var songs = [
  {
    title: 'One Last Time',
    artist: 'Ariana Grande',
    beats: [1,0,1,0,1,0,1,0,3,0,3,0,3,0,3,0,2,0,2,0,3,0,3,0,1,0,2,0,3,0,13,0,12,
      0,23,0,12,0,23,0,13,0,3,0,13,0,3,0,1,0,12,0,23,0,2,0,13,0,2,3,2,1,23,0,13,
      23,1,0,1,23,23,0,3,2,12,0,1,2,3,2,12,0,13,0,0,0,2,1,23,0,12,0,23,0,12,0,23,
      12,3,0,1,23,23,0,13,13,2,0,1,2,3,2,3,0,2,0,0,13,1,2,23,23,0,13,23,13,2,2,
      23,0,1,0],
    interval: 481.5,
    src: '/Users/akv083/7week/unit-1-project/music/Ariana Grande - One Last Time Lyrics.mp3',
    timeout: 7202
  },
  {
    title: 'Lose Your Mind',
    artist: 'Julian Calor',
    beats: [1,0,1,0,1,0,1,0,3,0,3,0,3,0,3,0,2,0,2,0,3,0,3,0,1,0,2,0,3,0,13,0,
      12,0,23,0,12,0,23,0,13,0,3,0,13,0,3,0,1,0,12,0,23,0,2,0,13,0,2,3,2,1,23,0,13,23,
      1,0,1,23,23,0,3,2,12,0,1,2,3,2,12,0,0,0,0,0,2,1,23,0,0,0,0,0,0,0,23,12,3,0,1,23,
      23,0,13,13,2,0,1,2,3,2,3,0,0,0,0,1,1,2,23,0,0,0,0,0,0,0,23,0,1,0,23,0,1,0,23,0,
      1,0,2,2,3,3,1,0,23,0,12,0,2,0,1,0,3,2,12,0,2,0,1,0,23,0,1,0,23,0,1,0,23,0,2,1,
      2,1,13,0,13,0,3,2,1,0,13,0,23,0,1,2,3,0,1,3,1,0,2,0,2,0,3,1,3,0,23,0,12,0,2,2,
      3,0,3,3,1,0,2,1,3,0,2,0,13,0,23,0,1,0,23,0,1,0,23,0,1,0,2,2,3,3,1,0,23,0,12,0,
      2,0,1,0,3,2,12,0,2,0],
    interval: 400,
    src: '/Users/akv083/7week/unit-1-project/music/Julian_Calor_-_Lose_Your_Mind.mp3',
    timeout: 0,
  }
];

var gamePlay = hub.gamePlay();
var highScores = [];
var totalPoints = 0;
var i = 0;
var iCheckTime = 0;
var lanes = [{name: 'path1'}, {name: 'path2'}, {name: 'path3'}];
var allowPlay = true;
var unpauseSong = false;
var blast = document.createElement('audio');
blast.setAttribute('src', `/Users/akv083/7week/unit-1-project/music/151022__bubaproducer__laser-shot-silenced.wav`);
var miss = document.createElement('audio');
miss.setAttribute('src', `/Users/akv083/7week/unit-1-project/music/167328__willy-ineedthatapp-com__droplet-bad.mp3`);

lanes.forEach(function(lane) {
  lane.button = false;

  lane.showBall = function(){
    var hitCheck = function() {
      var j = 50;
      var points = 0;
      var critiqueGen;


      var timer = function (){

        if (allowPlay) {j--}

        if (lane.button) {
          audioElement.volume = 1;
          var critique = $('<div class="critique">')
          critiqueGen = function(string) {
            $(`.c${lane.name}`).removeClass("caught");
            critique.html(string)
            $(`.${lane.name}`).append(critique);
            critique.hide().fadeIn(110);
            setTimeout(function() {critique.fadeOut('fast');}, 700);
            $(`.c${lane.name}`).addClass("caught");
          };

          if (j<=50 && j>30) {
            points = 200;
            critiqueGen('<i class="fa fa-star-o" aria-hidden="true"></i>')
          } else if (j<=30 && j>10) {
            points = 300;
            critiqueGen('good! <i class="fa fa-star-o" aria-hidden="true"></i>')
          } else {
            points = (j<=10 && j>=-5) ? 500: 0;
            critiqueGen('perfect! <i class="fa fa-star-o" aria-hidden="true"></i>')
          };
          lane.button = false;
          totalPoints += points;
        } else {
          if (j > -5) {
            setTimeout(timer, 1);
          } else {miss.play(); audioElement.volume = 0.5;}
        }
      };
      timer();
    };

    setTimeout(hitCheck, 1240);
    var ball = $('<div class="contains-ball ball1">');
    ball.html(`
      <div class="ball">
        <div class="glass"></div>
      </div>
      `)
    $(`.${lane.name}`).append(ball);
  }
});

$('body').on("keypress", function(e){
  e.preventDefault();
  if (e.keyCode === 115) {
    lanes[0].button = true;
  } else if (e.keyCode === 102) {
    lanes[1].button = true;
  } else if (e.keyCode === 104) {
    lanes[2].button = true;
  }
});

/*var showBallAll = function() {
  if (allowPlay) {
    if (unpauseSong) {
      audioElement.play();
      unpauseSong = false;
    };
    var whichBalls = theArray[i]

    switch(whichBalls){
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

    i++

    if (i === theArray.length) {
      setTimeout(function(){
      $('.backshade').css("opacity","0.0");
      $('.play-guide').text(`Complete! You scored: ${totalPoints}`);
      $('.play-guide').slideDown('fast');
      audioElement.pause();
      audioElement.currentTime = 0;}, 3000);

      setTimeout(function(){
        for (score in localStorage){
          highScores.push(parseInt(localStorage.getItem(score)));
        };
        highScores.push(totalPoints);
        highScores.sort(function(a, b){return b-a});
        highScores.pop();
        console.log(localStorage);
        for (score in localStorage) {
          localStorage.setItem(score, highScores[parseInt(score)]);
        };


        totalPoints = 0;

        window.location.href = "/Users/akv083/7week/unit-1-project/index.html";
      },8000)

    }
  }
};*/

var playSong = songs[0];
var audioElement = document.createElement('audio');
var theArray = [];
var songInt = 0;
var songTO = 0;

$(function(){
  var backgroundMusic = document.createElement('audio');
  backgroundMusic.setAttribute('src', `/Users/akv083/7week/unit-1-project/music/bensound-moose.mp3`);
  //backgroundMusic.play();
  backgroundMusic.volume = 0.5;
  backgroundMusic.addEventListener('ended', function() {
      this.play();
  }, false);
  var webPages = hub.webPages();

  var linkSound = document.createElement('audio');
  linkSound.setAttribute('src', `/Users/akv083/7week/unit-1-project/music/290507__littlerobotsoundfactory__mouth-47.wav`);


  var gameStarted = false;
  $('body').on("keypress", function(e){
    if (!gameStarted) {
      if (e.keyCode === 32) {
        backgroundMusic.pause();
        setInterval(function(){iCheckTime++},1)
        setTimeout(function() {setInterval(function() {gamePlay.showBallAll()}, songInt);}, songTO);
        setTimeout(function(){audioElement.play(); console.log('song', iCheckTime);},100);
        $('.backshade').css("opacity","0.5");
        gameStarted = true;
        $('.play-guide').fadeOut('medium');
      };
    } else {
      if (e.keyCode === 32) {
        if (allowPlay) {
          allowPlay = false;
          $('.backshade').css("opacity","0.0");
          $('.play-guide').text('Paused.')
          $('.play-guide').fadeIn('medium');
          audioElement.pause();
          unpauseSong = true;
          $('.contains-ball').css("animation-play-state","paused");
        } else {
          allowPlay = true;
          $('.backshade').css("opacity","0.5");
          $('.play-guide').fadeOut('medium');
          $('.contains-ball').css("animation-play-state","running");
        }
      };
    }
  });

  var initializeLinks = function() {
    $('.link').on("mouseover", function(){
      linkSound.play();
    });

    $('.song-button').on("mouseover", function(){
      linkSound.play();
    });

    webPages.getPages();
  };
  initializeLinks();

});
