function setup() {
  createCanvas(1800, 800);
  noStroke();
}
function draw() {
  var x = mouseX;
  var y = mouseY;
  var ix = width - mouseX;  // Inverse X
  var iy = height - mouseY; // Inverse Y
  background(126, 30, 20);
  fill(255, 150, 200);
  ellipse(x, height/2, y, y);
  fill(0, 159, 30);
  ellipse(ix, height/2, iy, iy);
}
