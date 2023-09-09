let myCanvas;
let r, g, b;
function setup() {
    myCanvas = createCanvas(0.9*windowWidth, 0.75*windowHeight);
    myCanvas.parent('myCanvas');
} 

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function draw() {
    r=getRndInteger(0, 255);
    g=getRndInteger(0, 255);
    b=getRndInteger(0, 255);
    fill(r, g, b);
    ellipse(mouseX, mouseY, 0.15*windowHeight, 0.15*windowHeight);
}

function windowResized() {
  resizeCanvas(0.9*windowWidth, 0.75*windowHeight);
}

function resetCanvas() {
    clear();
}

function saveToFile() {
    saveCanvas('mycanvas', 'png')
}