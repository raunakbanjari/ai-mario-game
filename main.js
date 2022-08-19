
 
function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump = loadSound("jump.wav");
	coin_collect = loadSound("coin.wav");
	mario_kick = loadSound("kick.wav");
	game_over = loadSound("gameover.wav");
    mario_die = loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');

	video = createCapture(VIDEO);
	video.size(800,400);
    video.parent('game_console');

	posenet = ml5.poseNet(video , modelLoaded);
	posenet.on('pose' , gotPoses);
	instializeInSetup(mario);
}

function modelLoaded(){
	console.log("model loaded");
}

function gotPoses(results){

	if(results.length > 0){
		console.log(results);
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y; 
	}
}

function draw() {
	game()
}







