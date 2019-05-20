var gameState = 0; //0 = MainMenu # 1 = Ingame
var devmode = true; //<---- SET THIS TO TRUE TO INIT AUTOMATICLY INGAME! DONT CHANGE ANYTHING OTHER SHIT!
var devvar = 0;
var mainMenu;
var game;
var bgMainMenu;
var spaceFont;
var ship;
var enemy;
var version = 'V0.4 - Build: 200519-alpha';

function preload(){
    bgMainMenu = loadImage('./img/bg-mainmenu.jpg');
    ship = loadImage('./img/cat.png');
    enemy = loadImage('./img/enemy.png')
    spaceFont = loadFont('./font/space.ttf');
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