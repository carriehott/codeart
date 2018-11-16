var img1;
var img2;
var img3;
var img4;
var img5;
var xspeed = 10;
var xpos = 0;


function preload() {
img1 = loadImage("images/static.jpg");
img2 = loadImage("images/eye_1.png");
img3 = loadImage("images/eye_2.png");
img4 = loadImage("images/computer3.png");
img5 = loadImage("images/mouth.png");
}

function setup() {
  createCanvas(2000, 1500);
}
function draw() {
  var x = mouseX;
  var y = mouseY;
  var ix = width - mouseX;  // Inverse X
  var iy = height - mouseY; // Inverse Y

  tint(0, 153, 204, 126);
  image(img1, 0, 0);

  image(img2, x, 200);

  image(img3, 800, 200, iy);

  image(img5, x, iy, iy);

  image(img4, xpos, 600);
if (xpos > width) {
  xspeed = -10;
}
if (xpos < 0) {
  xspeed = 4;
}
xpos += xspeed;
}
