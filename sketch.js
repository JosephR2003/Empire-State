var diam1 = 0; //declared and initialized the custom variable.
var r = 0;
var g = 0;
var b = 0;

function setup() {
  // put setup code here
    createCanvas(500,500);
}

function draw() {
  // put drawing code here
    background("#38477E");
    fill("#EDEEF1"); //hex light pink
    stroke("#D3D3D6");
    strokeWeight(2);
    ellipse(mouseX,mouseY,5,5);
    fill("#EDEEF1");
    ellipse(random(width),random(height),7,7);
    fill("#716460");
    stroke("#3D3D3D");
    rectMode(CENTER); //sets the anchor point at the center
    rect(250,450,200,200);
    triangle(width/2,height/2,350,350,150,350);
    noStroke();
    fill("#EDEEF1");
    stroke("#D3D3D6");
    ellipse(390,100,diam1,diam1);
    //diam1 = diam1+1;
    stroke("#716460");
    strokeWeight(3);
    line(249,130,250,260);
    point(width/2, height/2);
    noStroke();
    fill("#EDEEF1");
    textSize(20);
    textStyle(ITALIC);
    textFont('Courier New');
    text("Empire State", 10, 30);
    fill(r,g,b);
    ellipse(width/2, height/4, 17, 17);
    console.log(diam1, mouseX);
}
function mousePressed(){
  if (diam1 >= 140){
      diam1=0;
  }else{
      diam1 = diam1+5
  }
}
function keyTyped(){
    if (key === 'c'){
    r = random(0,255);
    g = random(0,255);
    b = random(0,255);
    }
}
    