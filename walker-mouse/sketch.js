var w;
var xoff;

function setup() {
	createCanvas(windowWidth, windowHeight);
	w = new Walker();
}

function draw() {
	background(51);
	w.display();
	w.update();
}

function Walker() {
	this.pos = createVector(width / 2, height/2);
	this.vel = createVector(0,0);

	this.update = function () {
		var mouse = createVector(mouseX,mouseY);
		this.acc = p5.Vector.sub(mouse,this.pos);
		this.acc.normalize();
		this.acc.mult(0.05);
		this.vel.add(this.acc);
		this.pos.add(this.vel);
	}

	this.display = function () {
		fill(255);
		rect(this.pos.x, this.pos.y, 20, 20);
	}
}