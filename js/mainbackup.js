if (!localStorage) {
  for (i=0; i<10; i++) {
    localStorage.setItem(`${i}`,0);
  };
};


//Setting links to various sound effects
blast.setAttribute('src', `/Users/akv083/7week/Tapestry_Game/music/151022__bubaproducer__laser-shot-silenced.wav`);
miss.setAttribute('src', `/Users/akv083/7week/Tapestry_Game/music/167328__willy-ineedthatapp-com__droplet-bad.mp3`);

//This loops through each object in the lanes array(in variables.js) and adds the following properties and methods.
lanes.forEach(function(lane) {
  lane.button = false;       //Boolean for whether the correct button has been pressed or not.

  lane.showBall = function(){    //This method releases an orb in the lane it corresponsed to.

    var hitCheck = function() {     //The bulk of this function is "timer" - overall this function checks if correct button is on time.
      var j = 50;
      var points = 0;
      var critiqueGen;

      var timer = function (){      //Checks to see when the button was hit in order to determine points given.

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

if ($(window).width() > 414){
  console.log('computer');
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
} else {
  console.log('mobile');
  $('.cpath1').on("tap", function(e){
    e.preventDefault();
    lanes[0].button = true;
  });
  $('.cpath2').on("tap", function(e){
    e.preventDefault();
    lanes[1].button = true;
  });
  $('.cpath3').on("tap", function(e){
    e.preventDefault();
    lanes[2].button = true;
  });
}



$(function(){

  backgroundMusic.setAttribute('src', `/Users/akv083/7week/Tapestry_Game/music/bensound-moose.mp3`);
  backgroundMusic.play();
  backgroundMusic.volume = 0.5;
  backgroundMusic.addEventListener('ended', function() {
      this.play();
  }, false);
  var webPages = hub.webPages();

  webPages.initializeLinks();

});
