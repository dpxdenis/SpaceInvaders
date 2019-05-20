var playButton;

class MainMenu{
    constructor() {
        playButton = createButton("►");
        playButton.elt.setAttribute('id', 'playButton')
        playButton.mousePressed(startGame)
    } 
    
    draw(){
        image(bgMainMenu,0,0)
        drawTitle()
        drawFooter();
        drawMeme();
        drawVersion();
        drawAuthor();
        drawPlayButton();
        //console.log('Notice me senpai.')
    }
}

function drawTitle(){
    push();
    textSize(72)
    fill(255)
    textFont(spaceFont)
    textAlign(CENTER, CENTER)
    text('spacefxckers', width / 2, (height / 2) - 100)
    pop();
    //console.log('CYKA TITLE LOAD')
}

function drawFooter(){
    push();
    textSize(32)
    fill(150)
    textFont(spaceFont)
    textAlign(CENTER, CENTER)
    text('cats vs. cucumbers', width / 2, (height / 2) - 50)
    pop();
    //console.log('Funny awesome ultimate fun footer was loaded!')
}

function drawVersion() {
    push();
    textSize(16)
    fill(255)
    text(version, 0, height - 10)
    pop();
    //console.log('Nerd Coding Hero Info loaded :^)')
}

function drawPlayButton(){
    push();
    playButton.position(width / 2 - playButton.width / 2, (height / 2))
    pop();
}

function drawMeme(){
    push();
    textSize(32)
    fill(200)
    textAlign(CENTER, CENTER)
    text('CLICK TO DESTAROI THA CUCUM!!!', width / 2, height - 25)
    pop();
    //console.log('Funny awesome ultimate fun footer was loaded!')
}

function drawAuthor(){
    push();
    textSize(16)
    fill(255)
    text('Authors: \n CyberHawk aka. Patrick \n DevDenis aka. Denis', 0, 15)
    pop();

}

function startGame(){
    clear();
    
    resizeCanvas(ingameCanvas.x, ingameCanvas.y);
    
    playButton.elt.removeAttribute('id', 'playButton')
    playButton.elt.setAttribute('style', '    position: relative; display: none;')

    let bg = document.getElementById('bg');
    bg.setAttribute('style', 'visibility: visible')

    let sheet = document.getElementById('style');
    sheet.setAttribute("href", "./css/ingame.css");
    
    gameState = 1;
}