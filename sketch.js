let myFont

function setup() {
  createCanvas(400, 400);
  myFont = loadFont("tilt.ttf")
  
}

function draw() {
  background(225);
  textFont(myFont);
  textSize(25)
  text("Eight Ball", 150, 20)
}
