var database;
var playerCount;
var canvas, backgroundIMG;
var gameState = 0;
var form, player, game;
var allPlayers;
var distance = 0;
var car1, car2, car3, car4, cars;
var car1_img, car2_img, car3_img, car4_img, track, ground;
function preload(){
    car1_img = loadImage("images/car1.png");
    car2_img = loadImage("images/car2.png");
    car3_img = loadImage("images/car3.png");
    car4_img = loadImage("images/car4.png");

    track = loadImage("images/track.jpg");
    ground = loadImage("images/ground.png");
}
function setup(){
    database = firebase.database();
    canvas = createCanvas(displayWidth - 20,displayHeight-30);
    game = new Game();
    game.getState();
    game.start();

    
    
}

function draw(){
    if(playerCount === 4){
        game.update(1);

    }
    if(gameState ===1){
        clear();
        game.play();
    }

    if(gameState ===2){
        game.end();
    }
}


