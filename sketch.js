var hr, mn, sc;
var hrAngle, mnAngle, scAngle; 

function setup(){
    createCanvas(400,400); 
   
    angleMode(DEGREES);   
}

function draw(){
    background(0);

    translate(200,200)
    rotate(-90)

    hr = hour();
    mn = minute();
    sc = second();

    scAngle = map(sc,0,60,0,360);
    mnAngle = map(mn,0,60,0,360);
    hrAngle = map(hr % 12,0,12,0,360);
    
    push();
    rotate(scAngle);
    stroke(237,185,244);
    strokeWeight(7);
    line(0,0,100,0);
    pop()
    drawSprites();

    push();
    rotate(mnAngle);
    stroke(208,242,187);
    strokeWeight(7);
    line(0,0,85,0);
    pop()
    drawSprites();

    push();
    rotate(hrAngle);
    stroke(254,156,175);
    strokeWeight(7);
    line(0,0,50,0);
    pop()

    stroke(255);
    strokeWeight(10);
    point(0,0)

    noFill();
    strokeWeight(5)

    stroke(237,185,244);
    arc(0,0,300,300,0,scAngle);

    stroke(208,242,187);
    arc(0,0,280,280,0,mnAngle);

    stroke(254,156,175);
    arc(0,0,260,260,0,hrAngle);
}