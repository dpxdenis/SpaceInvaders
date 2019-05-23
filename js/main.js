var gameState = 0; //0 = MainMenu # 1 = Ingame
var devmode = false;//<---- SET THIS TO TRUE TO INIT AUTOMATICLY INGAME! DONT CHANGE ANYTHING OTHER SHIT!
var devvar = 0;

var mainMenu;
var game;

var bgMainMenu;
var spaceFont;
var ship;
var enemy;

let soundMainMenu;
let soundIngame;
let soundShoot;
let soundCat;
let soundPop;

var version = 'V1.0 - Build: 230519-release';

function preload(){
    bgMainMenu = loadImage('./img/bg-mainmenu.jpg');
    ship = loadImage('./img/cat.png');
    enemy = loadImage('./img/enemy.png')
    spaceFont = loadFont('./font/space.ttf');
    soundMainMenu = loadSound('./sounds/maintheme.mp3');
    soundIngame = loadSound('./sounds/ingame.mp3');
    soundShoot = loadSound('./sounds/shoot.mp3');
    soundCat = loadSound('./sounds/cat.mp3');
    soundPop = loadSound('./sounds/pop.mp3');
}

function setup(){
    createCanvas(innerWidth, innerHeight);
    mainMenu = new MainMenu();
    game = new Game();
}

function draw(){
    if(devmode) {
        if(devvar == 0) {
            document.documentElement.style.overflow = 'hidden';
            startGame();
            devvar = 1;
        }
        game.draw();
    } else {
        if(gameState == 0 ) {
            mainMenu.draw();
        } else {
            game.draw();
        }
    }
}
