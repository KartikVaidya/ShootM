var canvas, backgroundImage;

var players =[]

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var Adam,Chrono,Jota,Kartik,Shafer

var Kelly,Ellina

var AWM,Deagle,Buster

var Plyr,Plyr2,Plyr3,Plyr4

var levelUp,levelImg

var bulletR,bulletRImg,bulletL,bulletLImg

var bg,bgImg,wall,wallImg

var edgeT,edgeB,edgeL,edgeR

var shootBut,shootButImg

var life,lifeImg;
var playerLife=150;

var FormBg
var count=0;
function preload(){
  Adam =loadImage("Adam.png")
Chrono =loadImage("Chrono.png")
Jota=loadImage("Jota.png")
Kartik =loadImage("Kartik.png")
Shafer =loadImage("Shafer.png")

Kelly =loadImage("Kelly.png")
Ellina =loadImage("Ellina.png")

AWM =loadImage("Sks.png")
Deagle =loadImage("Deagle.png")
Buster =loadImage("Buster.png")

bulletRImg =loadImage("bulletRight.png")
bulletLImg =loadImage("bulletLeft.png")

bgImg =loadImage("bg1.png")

shootButImg =loadImage("shootbutton.png")

lifeImg=loadImage("life.png")

FormBg =loadImage("FormP.jpeg")
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){

background(FormBg)

  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
