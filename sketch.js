let myFont;
let myInput;
let myButton;
let answer;
let rndNum

function setup() {
  createCanvas(400, 400);
  myFont = loadFont("tilt.ttf");
  myInput =createInput();
  myInput.position(110,75);
  myButton = createButton("press me")
  myButton.position(110,100)
  myButton.style("cursor","pointer");
  myButton.style("background-color","#003049")
  myButton.mousePressed(askQuestion);
  answer = "My Answer will Show here."
}//end Setup
function draw() {
  background("#C1121F");
  textFont(myFont);
  textSize(25);
  fill("#FDF0D5");
  text("Eight Ball", 150, 20);
  textSize(15);
  text("Ask Me a Question", 137, 50);
  text(answer, 110, 150)
}//end Draw

function askQuestion(){
  makeRandomNumber();
  if(rndNum == 1){
    answer = "That's a Hard No!!!"
  }//end if
  if(rndNum == 2){
    answer = "Hmmmm Maybe"
  }//end if
  if(rndNum == 3){
    answer = "Heck Ya"
  }//end if
}//end Ask Question
function makeRandomNumber(){
  rndNum = Math.random();
  //The number 3 is the biggest number
  rndNum  = rndNum * 3
  rndNum = Math.ceil(rndNum)
  answer = rndNum
}
