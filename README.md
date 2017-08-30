Public GitHub (https://markthom1.github.io/Tapestry_Game/);


## 1. Technologies used:

The main technologies used for this project was html, css and javascript (including use of jQuery). The local storage is also used for high scores. 

## 2. Your process/approach:

At first I created each page in html. Once I was finish with the bulk of the html, I decided to do convert the game to a single-page app. For the JS/jQuery, everything was done in one .js file at first. Again, once the bulk of the js was completed, the JS/jQuery code was refactored into different .js files. This was done in order to make the code more readable, especially since a lot of the html was put into the JS code.

## 3. Future features: 

Ideally one will have the options to change game-board background as well as the orb color. Also, one would be able to choose to play an easy, medium or hard mode. The game-board border will pulse in time to the music. A future version will also include more songs.

## 4. Any bugs: 

Right now the hitCheck function (which checks to see when/if a button is pressed in time), seems to have a bit of a timing issue. It works for the most part but sometimes it seems to shoot off animations slightly late.

## 5. Your biggest wins and challenges: 

-Biggest Wins: 
Making the single-page application and refactoring code into different .js files.
Getting the timing of the game to work for the most part.
Using css to do animations and set animation duration.
Figuring out a means to determine which orbs are released at a given point.
Adding background music and sound effects.
Using local storage for high scores.
Implementing the pause and game-end reset. 

-Biggest Challenges: 
Getting the timing of the game to be perfect.
Implementing the pause and game-end reset.


## 6. The game you chose: 

I did a version of Tap Tap (https://www.youtube.com/watch?v=zmBLol5HCko). It's like a simplified version of Guitar Hero.

## 7. The rules of the game: 

Tap the keys on the keyboard in time to the music. Must tap one of three keys: S, F and H. Orbs will fall down the screen in one of three lanes - they will do so in time music. When the orb is at the bottom, in the catcher (which looks like a hole), one must press the key correspond to that lane (S for the first, F for the second, H for the third). The more precise you are with the timing, the higher you'd score.

## 8. Your process for turning that game into a web application: 

Having a wireframe proved useful in setting up basic of the web app will look (https://wireframe.cc/Cyh7Xk). A trello board was then used to plan and keep track of the execution of the app building (https://trello.com/b/kb5fQ3wf/tap-game). Most of blocks encountered were related to the functionality of the program - as stated above, the issues were generally related to timing. However, the scope of variables also caused some issues in the correct execution of the game. Google and trial&error helped a lot in coming to solutions for the problems that were encountered.
