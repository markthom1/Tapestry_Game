var theArray = [1,0,1,0,1,0,1,0,3,0,3,0,3,0,3,0,2,0,2,0,3,0,3,0,1,0,2,0,3,0,13,0,
  12,0,23,0,12,0,23,0,13,0,3,0,13,0,3,0,1,0,12,0,23,0,2,0,13,0,2,3,2,1,23,0,13,23,
  1,0,1,23,23,0,3,2,12,0,1,2,3,2,12,0,0,0,0,0,2,1,23,0,0,0,0,0,0,0,23,12,3,0,1,23,
  23,0,13,13,2,0,1,2,3,2,3,0,0,0,0,1,1,2,23,0,0,0,0,0,0,0,23,0,1,0,23,0,1,0,23,0,
  1,0,2,2,3,3,1,0,23,0,12,0,2,0,1,0,3,2,12,0,2,0,1,0,23,0,1,0,23,0,1,0,23,0,2,1,
  2,1,13,0,13,0,3,2,1,0,13,0,23,0,1,2,3,0,1,3,1,0,2,0,2,0,3,1,3,0,23,0,12,0,2,2,
  3,0,3,3,1,0,2,1,3,0,2,0,13,0,23,0,1,0,23,0,1,0,23,0,1,0,2,2,3,3,1,0,23,0,12,0,
  2,0,1,0,3,2,12,0,2,0];

var totalPoints = 0;
var i = 0;
var button1 = false;
var button2 = false;
var button3 = false;

$('body').on("keypress", function(e){
  e.preventDefault();
  if (e.keyCode === 115) {
    button1 = true;
  } else if (e.keyCode === 102) {
    button2 = true;
  } else if (e.keyCode === 104) {
    button3 = true;
  }
});

var audioElement = document.createElement('audio');
audioElement.setAttribute('src', '/Users/akv083/7week/unit-1-project/music/Julian_Calor_-_Lose_Your_Mind.mp3');




var showBall1 = function(){
  var hitCheck = function() {
    var j = 310;
    var points = 0;


    var timer = function (){
      console.log(j);

      j--
      if (button1) {
        var critique = $('<div class="critique">')
        if (j<=300 && j>200) {
          points = 200;
          critique.text('good!')
          $('.path1').append(critique);
          critique.hide().fadeIn(110);
          setTimeout(function() {critique.fadeOut('fast');}, 700);
        } else if (j<=200 && j>100) {
          points = 300;
          critique.text('good!')
          $('.path1').append(critique);
          critique.hide().fadeIn(110);
          setTimeout(function() {critique.fadeOut('fast');}, 700);
        } else {
          points = (j<=100 && j>=0) ? 500: 0;
          critique.text('perfect!')
          $('.path1').append(critique);
          critique.hide().fadeIn(110);
          setTimeout(function() {critique.fadeOut('fast');}, 900);
        };
        button1 = false;
        console.log(button1);
        totalPoints += points;
      } else {
        if (j > 0) {
          setTimeout(timer, 1);
        } else {}
      }
    };
    timer();

  };
  setTimeout(hitCheck, 1200);
  var ball = $('<div class="contains-ball ball1">');
  ball.html(`
    <div class="ball">
      <div class="glass"></div>
    </div>
    `)
  $('.path1').append(ball);
  ball.attr('id',"active")
  setTimeout(function(){ball.fadeOut('fast').remove()}, 1500);
}

var showBall2 = function(){
  var hitCheck = function() {
    var j = 310;
    var points = 0;


    var timer = function (){
      console.log(j);

      j--
      if (button2) {
        if (j<=300 && j>200) {
          points = 200;
        } else if (j<=200 && j>100) {
          points = 300;
        } else {
          points = (j<=100 && j>=0) ? 500: 0;
        };
        button2 = false;
        console.log(button2);
        totalPoints += points;
        console.log(totalPoints);
      } else {
        if (j > 0) {
          setTimeout(timer, 1);
        } else {}
      }
    };
    timer();

  };
  setTimeout(hitCheck, 1200);

  var ball = $('<div class="contains-ball ball2">');
  ball.html(`
    <div class="ball">
      <div class="glass"></div>
    </div>
    `)
  $('.path2').append(ball);
  ball.attr('id',"active")
  setTimeout(function(){ball.fadeOut('fast').remove()}, 1500);
}

var showBall3 = function(){
  var hitCheck = function() {
    var j = 310;
    var points = 0;


    var timer = function (){
      console.log(j);

      j--
      if (button3) {
        if (j<=300 && j>200) {
          points = 200;
        } else if (j<=200 && j>100) {
          points = 300;
        } else {
          points = (j<=100 && j>=0) ? 500: 0;
        };
        button3 = false;
        console.log(button3);
        totalPoints += points;
        console.log(totalPoints);
      } else {
        if (j > 0) {
          setTimeout(timer, 1);
        } else {}
      }
    };
    timer();

  };

  setTimeout(hitCheck, 1200);
  var ball = $('<div class="contains-ball ball3">');
  ball.html(`
    <div class="ball">
      <div class="glass"></div>
    </div>
    `)
  $('.path3').append(ball);
  ball.attr('id',"active")
  setTimeout(function(){ball.fadeOut('fast').remove()}, 1500);
}

var showBallAll = function() {
  var whichBalls = theArray[i]

  switch(whichBalls){
    case 1:
        showBall1();
      break;
    case 12:
        showBall1();
        showBall2();
      break;
    case 13:
        showBall1();
        showBall3();
      break;
    case 2:
        showBall2();
      break;
    case 23:
        showBall2();
        showBall3();
      break;
    case 3:
        showBall3();
      break;
    case 4:
        showBall3();
        showBall2();
        showBall1();
      break;


    default:
  }
  $('#score-here').text(`${totalPoints}`);
  i++

};

$(function(){

  var gameStarted = false;

  $('body').on("keypress", function(e){
    if (!gameStarted) {
      if (e.keyCode === 32) {
        setTimeout(function(){audioElement.play()},400) ;
        setInterval(showBallAll, 400);
        $('.backshade').css("opacity","0.5");
        gameStarted = true;
        $('.play-guide').fadeOut('medium');
      }
    }
  });


});
