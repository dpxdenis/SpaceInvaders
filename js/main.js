var gameState = 0; //0 = MainMenu # 1 = Ingame
var mainMenu;
var game;
var bgMainMenu;
var spaceFont;
var ship;
var version = 'V0.2 - Build: 190519-alpha';

function preload(){
    bgMainMenu = loadImage('./img/bg-mainmenu.jpg');
    ship = loadImage('./img/cat.png');
    spaceFont = loadFont('./font/space.ttf');
}

function setup(){
    createCanvas(innerWidth,innerHeight);
    mainMenu = new MainMenu();
    game = new Game();
}

function draw(){
    document.documentElement.style.overflow = 'hidden';
    if(gameState == 0 ) {
        mainMenu.draw();
    } else {
        game.draw();
    }
}