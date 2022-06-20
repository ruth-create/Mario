img="";
noseX=0;
noseY=0;
marioX=325;
marioY=325;

function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump=loadSound("jump.wav");
	mario_coin=loadSound("coin.wav");
	mario_gameover=loadSound("gameover.wav");
	mario_die=loadSound("mariodie.wav");
	mario_kick=loadSound("kick.wav");
	setSprites();
	MarioAnimation();
	img=loadImage("/imgs/mario/mario05.png");
}

function setup() {
	canvas = createCanvas(850,500); //previous dimension 1240x336
	canvas.parent("canvas");
	instializeInSetup(mario);

	video=createCapture(VIDEO);
	video.size(800,400);
	video.parent("game_console");
	poseNet=ml5.poseNet(video,modelLoaded);
	poseNet.on("pose", gotPoses);
}


function modelLoaded(){
	console.log(" Model Loaded! ")
}

function gotPoses(results){
if(results.length > 0){
	console.log(results);
	noseX=results[0].pose.nose.x;
	noseY=results[0].pose.nose.y;
	console.log("noseX = " + noseX + " noseY = " + noseY)
}
}

function draw() {
	game();
	if(noseX < 300){
		marioX=marioX-1;
	}
	if(noseX > 300){
		marioX=marioX+1;
	}
	if(noseY < 150){
		marioY=marioY-1;
	}
	if(noseY > 150){
		marioY=marioY+1;
	}
}






