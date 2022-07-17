function setup(){
canvas = createCanvas(600,400)
canvas.position(60,250);
camera = createCapture(VIDEO);
camera.hide();
tint_color ="";
}
function draw(){
    image(camera,0,0,600,400);
    rectangle();
    circle(0,0,100,100)
      fill("red")
    circle(600,0,100,100)
      fill("red")
      stroke("blue")
    circle(0,400,100,100)
      fill("red")
      stroke("blue")
    circle(600,400,100,100)
      fill("red")
      stroke("blue")
    line(0,50,0,350)
      strokeWeight(15)
    line(50,400,550,400)
    line(600,350,600,50)
    line(50,0,550,0)
    tint(tint_color);
}
function rectangle(){
    noFill()
    rect(0,0,600,400,20);
}
function apply_filter(){
    tint_color = document.getElementById("filter1").value;
}