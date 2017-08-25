//This contains all the variables that need to be initialized before the game starts.

//The "songs" array contains objects that hold information needed to run each  song as desired.
var songs = [
  {
    title: 'One Last Time',
    artist: 'Ariana Grande',
    beats: [1,0,1,0,1,0,1,0,3,0,3,0,3,0,3,0,2,0,2,0,3,0,3,0,1,0,2,0,3,0,13,0,12, //Each number represents a particular orb pattern.
      0,23,0,12,0,23,0,13,0,3,0,13,0,3,0,1,0,12,0,23,0,2,0,13,0,2,3,2,1,23,0,13, // example: 12 - orb in first and second lane.
      23,1,0,1,23,23,0,3,2,12,0,1,2,3,2,12,0,13,0,0,0,2,1,23,0,12,0,23,0,12,0,23, // example: 23 - orb in second and third lane.
      12,3,0,1,23,23,0,13,13,2,0,1,2,3,2,3,0,2,0,0,13,1,2,23,23,0,13,23,13,2,2, // example: 2 - orb in only second lane.
      23,0,1,0],
    interval: 481.5, // How often orb(s) is(are) released.
    src: 'music/Ariana Grande - One Last Time Lyrics.mp3',
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
    src: 'music/Julian_Calor_-_Lose_Your_Mind.mp3',
    timeout: 0,
  }
];

var gamePlay = hub.gamePlay();
var highScores = [];
var totalPoints = 0;
var i = 0;
var iCheckTime = 0;
var lanes = [{name: 'path1'}, {name: 'path2'}, {name: 'path3'}];
var gameStarted = false;
var allowPlay = true;
var unpauseSong = false;
var blast = document.createElement('audio');
var miss = document.createElement('audio');

var playSong = songs[0];
var audioElement = document.createElement('audio');
var theArray = [];
var songInt = 0;
var songTO = 0;

var linkSound = document.createElement('audio');
linkSound.setAttribute('src', `music/290507__littlerobotsoundfactory__mouth-47.wav`);
var backgroundMusic = document.createElement('audio');
