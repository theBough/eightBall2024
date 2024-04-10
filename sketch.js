let myFont;
let myInput;

function setup() {
  createCanvas(400, 400);
  myFont = loadFont("tilt.ttf");
  myInput =createInput();
  myInput.position(110,75)
}
function draw() {
  background("#C1121F");
  textFont(myFont);
  textSize(25);
  fill("#FDF0D5");
  text("Eight Ball", 150, 20);
  textSize(15);
  text("Ask Me a Question", 137, 50);
}
