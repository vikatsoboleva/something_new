

function setup() {
    createCanvas(1000, 700);
	background(255, 250, 205);
}


function draw() {

	strokeWeight(2);
	stroke(0, 0, 0);
	// Треугольник
	fill(219, 112, 147)
	rect(100,100,700,100)
	fill(205, 133, 63);
	ellipse(500, 400, 500, 500);
	fill(218, 165, 32);
	ellipse(600, 400, 500, 500);

	fill(255, 69, 0);
	triangle(700, 100, 650, 700, 150, 600);

	


	line(100, 300, 700, 600);
	line(200, 700, 800, 500);
	line(500, 300, 700, 100);
	line(100, 400, 900, 400);
  
	// Точка
	fill(255, 255, 0);
	ellipse(300, 500,50, 50);
	fill(47, 79, 79);
	ellipse(600, 300, 50, 50);
	fill(128, 0, 0);
	ellipse(300, 600, 50, 50);
	fill(0, 128, 128);
	ellipse(500, 300, 50, 50);
  }
