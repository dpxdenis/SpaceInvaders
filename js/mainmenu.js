class MainMenu{
    constructor() {

    }

    draw(){
        image(bgMainMenu,0,0)
        drawTitle()
        drawFooter();
        drawVersion();
        drawPlayButton();
        console.log('Notice me senpai.')
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
    console.log('CYKA TITLE LOAD')
}

function drawFooter(){
    push();
    textSize(32)
    fill(150)
    textFont(spaceFont)
    textAlign(CENTER, CENTER)
    text('cats vs. cucumbers', width / 2, (height / 2) - 60)
    pop();
    console.log('Funny awesome ultimate fun footer was loaded!')
}

function drawVersion() {
    push();
    textSize(16)
    fill(255)
    text(version, 0, height - 10)
    pop();
    console.log('Nerd Coding Hero Info loaded :^)')
}

function drawPlayButton(){
    push();
    playButton = createButton('Play!');
    playButton.position(width / 2, (height / 2) - 40)
    playButton.style('background-color', color(32,32,32,100))
    playButton.style('color', color(255,255,255,100))
    playButton.style('border', 'none')
    playButton.style('font-size', 24)
 //   playButton.style('display', 'block')
  //  playButton.style('height', 64)
   // playButton.style('width', 100)
    playButton.mousePressed(console.log('luuuuuuuuuuuuuuul'))
    pop();
}