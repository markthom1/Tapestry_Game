var webPages = (function() {
  return {
    initializeLinks: function(){
      $('.link').on("mouseover", function(){
        linkSound.play();
      });

      $('.song-button').on("mouseover", function(){
        linkSound.play();
      });

      this.getPages();
    },

    getPages: function() {
      $('.link').on("click", function(){
        var idCheck = this.id; //Needed in order to compare ID in if statement

        //Loads the Play page. Contains the hard coded html.
        if (idCheck === 'play') {
          $('.background').empty();
          $('.background').append(`
            <div class="backshade">
            </div>
            <h2>Play</h2>
            <div class="score">
              Score:<br><span id="score-here">0</span>
            </div>
            <div class="container">
              <div class="game-board">
                <div class="play-guide">
                  Press the space-bar to begin!
                </div>
                <div class="holds-paths">
                  <div class="paths path1">
                  </div>
                  <div class="paths path2">
                  </div>
                  <div class="paths path3">
                  </div>
                </div>
                <div class="touch-line">
                  <div class="catcher cpath1">
                  </div>
                  <div class="catcher cpath2">
                  </div>
                  <div class="catcher cpath3">
                  </div>
                </div>
              </div>
              <div class="select-song">
                <div class="navi">
                <h3>- Select a Song -</h3>
                </div>
              </div>
            </div>
            `);
          $('.game-board').hide();
          $('.score').hide();
          $('.container').append(`<div class="hold-button"><button id="back"><a href="index.html">Back</button></a></div>`)
          if ($('nav').length === 0){     //Adds navigations bar on top if one is not already present.
            $('header').append(`
              <nav>
                <ul>
                  <li class="link" id="play">Play</li>
                  <li class="link" id="instructions">Instructions</li>
                  <li class="link" id="settings">Settings</li>
                  <li class="link" id="highscores">High Scores</li>
                </ul>
              </nav>
              `);
          };


                                        //Creates buttons for each song.
          songs.forEach(function(song){
            var songCard = $('<div class="song-card">');
            var songButton = $(`<button class="song-button">`);
            songButton.attr("data-id", `${songs.indexOf(song)}`)
            songButton.html(`<strong>${song.title}</strong> <br> by: ${song.artist}`);
            songCard.append(songButton);
            $('.navi').append(songCard);
          });

                                        //This allows one to click a song and have all the info for that song populate.
          $('.song-button').on("click", function(e){
            e.preventDefault();
            $('.navi').slideToggle();
            $('.game-board').slideToggle();
            $('.score').slideToggle();
            $(this)[0].attributes[1].nodeValue;
            audioElement.setAttribute('src', `${songs[$(this)[0].attributes[1].nodeValue].src}`);
            theArray = songs[$(this)[0].attributes[1].nodeValue].beats;
            songInt = songs[$(this)[0].attributes[1].nodeValue].interval;
            songTO = songs[$(this)[0].attributes[1].nodeValue].timeout;
            $('#back').remove();
            $('.container').append(`<div class="hold-button"><button id="back">Back</button></div>`)
            $('#back').on("click", function(){   //Once the song is selected, page switches to gameboard.
              $('.game-board').slideToggle();
              $('.score').slideToggle();
              $('.navi').slideToggle();
              $('#back').fadeOut().remove();
              $('.container').append(`<div class="hold-button"><button id="back"><a href="index.html">Back</button></a></div>`);
            });


            if ($(window).width() > 414) {    //Allows for one to start and Pause the game desired.
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
            } else {
              $('body').on("tap", function(){
                if (!gameStarted) {
                  backgroundMusic.pause();
                  setInterval(function(){iCheckTime++},1)
                  setTimeout(function() {setInterval(function() {gamePlay.showBallAll()}, songInt);}, songTO);
                  setTimeout(function(){audioElement.play(); console.log('song', iCheckTime);},100);
                  $('.backshade').css("opacity","0.5");
                  gameStarted = true;
                  $('.play-guide').fadeOut('medium');
                }
              });
            }

          });
          webPages.initializeLinks(); //Needed so that links will work on newly loaded page

        } else if (idCheck === 'instructions') {   //Loads the Intructions page. Contains the hard coded html.
          $('.background').empty();
          $('.background').append(`
            <div class="backshade">
            </div>
            <h2>Instructions</h2>
            <div class="container">
              <div class="navi how-to">
                <h3>- Tapestry Rules -</h3>
                <img src="images/Instructions.png" alt="Player Guide">
                <p>Use the S, F and H keys to tap the orbs in time to music. The more timing you have, the higher you'll score! Simple!</p>
              </div>
            </div>
            `);
          $('.container').append(`<div class="hold-button"><button id="back"><a href="index.html">Back</button></a></div>`);
          if ($('nav').length === 0){     //Adds navigations bar on top if one is not already present (it's the same for the other pages).
            $('header').append(`
              <nav>
                <ul>
                  <li class="link" id="play">Play</li>
                  <li class="link" id="instructions">Instructions</li>
                  <li class="link" id="settings">Settings</li>
                  <li class="link" id="highscores">High Scores</li>
                </ul>
              </nav>
              `);
            };
          webPages.initializeLinks(); //Needed so that links will work on newly loaded page (it's the same for the other pages).

        } else if (idCheck === 'settings') {    //Loads the Settings page. Contains the hard coded html.
          $('.background').empty();
          $('.background').append(`
            <div class="backshade">
            </div>
            <h2>Settings</h2>
            <div class="container">
              <div class="navi">
              <h3>- Tapestry Settings -</h3>
              <div class="setting-holder">
                <p>Background Music:</p> <i class="fa fa-volume-up${(backgroundMusic.volume === 0)?" off":""}" id="bgmusic" aria-hidden="true"></i>
              </div>
              <div class="setting-holder">
                <p>Sound Effects:</p> <i class="fa fa-music${(miss.volume === 0)?" off":""}" id="sfx" aria-hidden="true"></i>
              </div>
              </div>
            </div>
            `);
          $('.container').append(`<div class="hold-button"><button id="back"><a href="index.html">Back</button></a></div>`)
          if ($('nav').length === 0){
            $('header').append(`
              <nav>
                <ul>
                  <li class="link" id="play">Play</li>
                  <li class="link" id="instructions">Instructions</li>
                  <li class="link" id="settings">Settings</li>
                  <li class="link" id="highscores">High Scores</li>
                </ul>
              </nav>
              `);
            };

            $('.setting-holder .fa').on("click", function(){    //Event listeners that controls the settings.
              linkSound.play();
              var whatsId = this.id
              if (whatsId === "bgmusic") {
                if (backgroundMusic.volume === 0.5){backgroundMusic.volume = 0; $(this).addClass("off");}
                else {backgroundMusic.volume = 0.5; $(this).removeClass("off");}
              } else if (whatsId === "sfx") {
                if (miss.volume === 1){miss.volume = 0; linkSound.volume = 0;
                  $(this).addClass("off");}
                else {miss.volume = 1; linkSound.volume = 1;
                  $(this).removeClass("off");}
              }
            })
          webPages.initializeLinks();
        } else if (idCheck === 'highscores') {      //Loads the High Scores page. Contains the hard coded html.
        $('.background').empty();
        $('.background').append(`
          <div class="backshade">
          </div>
          <h2>High Scores</h2>
          <div class="container ">
            <div class="navi">
            <h3>- Top 10 -</h3>
            </div>
          </div>
          `);
        $('.container').append(`<div class="hold-button"><button id="back"><a href="index.html">Back</button></a></div>`)

        for (score in localStorage){    //Gets high scores from local storage and loads it into page.
          var line = $('<p>')
          line.html(`${parseInt(score) + 1}. ${localStorage.getItem(score)} pts`);
          $('.navi').append(line);
        };

        if ($('nav').length === 0){
          $('header').append(`
            <nav>
              <ul>
                <li class="link" id="play">Play</li>
                <li class="link" id="instructions">Instructions</li>
                <li class="link" id="settings">Settings</li>
                <li class="link" id="highscores">High Scores</li>
              </ul>
            </nav>
            `);
          };
        webPages.initializeLinks();
        };
      });
    }
  }
})()
