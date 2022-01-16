song=""
song2=""
lwx=0;
lwy=0;
rwx=0;
rwy=0;

function preload(){
song= loadSound("music.mp3")
song2= loadSound("music2.mp3")
}

function setup(){
    canvas=createCanvas(600,500)
    canvas.center()

    video= createCapture(VIDEO);
    video.hide();
    
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    }
    function modelLoaded(){
        console.log("PoseNet Is Initialized")
    
}
function modelLoaded(){
    console.log("PoseNet Is Initialized")
}

function gotPoses(results){
if(results.length>0){
console.log(results);

lwx=results[0].pose.leftWrist.x;
lwy=results[0].pose.leftWrist.y;
console.log("lwx="+lwx+"lwy="+lwy);

rwx=results[0].pose.rightWrist.x;
rwy=results[0].pose.rightWrist.y;
console.log("rwx="+rwx+"rwy="+rwy);
}
}

function draw(){
    image(video, 0, 0, 600, 500)
}

function play(){
   song.play() 
   song.setVolume(1);
   song.rate(1);
}