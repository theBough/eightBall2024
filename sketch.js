let myFont;
let myInput;
let myButton;
let answer;
let rndNum;
let theirQuestion;
let img;
let imgW;
let imgH;

function setup() {
  //The setup is similar to:
  //"when Green Flag is clicked in Scratch"
  createCanvas(400, 400);
  myFont = loadFont("tilt.ttf");
  
  img = loadImage("eightBallGood.png")
  myInput =createInput();
  myInput.position(110,75);
  myButton = createButton("press me")
  myButton.position(110,100)
  myButton.style("cursor","pointer");
  myButton.style("background-color","#003049")
  myButton.mousePressed(thinking);
  answer = "My Answer will Show here."
  theirQuestion = ">> "
  imgH = 100;
  imgW = 100;
}//end Setup
function draw() {
  //THis is similar to a Forever loop
  //on the backdrop in scratch
  background("#C1121F");
  textFont(myFont);
  textSize(25);
  fill("#FDF0D5");
  text("Eight Ball", 150, 20);
  textSize(15);
  text("Ask Me a Question", 137, 50);
  text(answer, 110,180)
  text(theirQuestion, 110, 150)
  img.resize(imgW,imgH)
  image(img , 110 , 190)
 
}//end Draw
function thinking(){
  img = loadImage("thinking.jpg")
  setTimeout(askQuestion, 5000)
}
function askQuestion(){
  theirQuestion  = ">> " + myInput.value()
  makeRandomNumber();
  if(rndNum == 1){
    answer = "That's a Hard No!!!"
    imgW = 150;
    imgH = 150;
    img = loadImage("hardNo.jpg")
   
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
  rndNum  = rndNum * 1
  rndNum = Math.ceil(rndNum)
  answer = rndNum
}
