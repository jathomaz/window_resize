//CP1:Drawing Basics in P5JS - Width/Height Variables
//Jeff Thompson


function setup() {
  createCanvas(windowWidth,windowHeight);
  
  colorMode(HSB);
 
}

function draw() {
  background(120,100,100);
  fill(0,100,100);
  noStroke();
  ellipse(width/2,height/2,width/4); //middle
  ellipse(width/4,height/4,width/16); //LU
  ellipse(width-width/4,height-height/4,width/16); //RU
  ellipse(width-width/4,height/4,width/16);  //RU
  ellipse(width/4,height-height/4,width/16);  //LL
 // ellipse(oneQuartW,height-oneQuartH,smallR);
 }
function windowResized() {
  resizeCanvas(windowWidth,windowHeight);
}