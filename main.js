song1=""
song2=""
lwx=0;
lwy=0;
rwx=0;
rwy=0;
slw=0;
srw=0;
song1_status="";
song2_status="";

function preload(){
song1= loadSound("music.mp3");
song2= loadSound("music2.mp3");
}

function setup(){
canvas=createCanvas(620,520)
canvas.center()

video= createCapture(VIDEO);
video.hide();

poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log("PoseNet Is Initialized")
}

function gotPoses(results){
if(results.length>0){
console.log(results);
slw=results[0].pose.keypoints[9].score;
srw=results[0].pose.keypoints[9].score;
console.log("slw = "+slw+"srw = "+srw);

lwx=results[0].pose.leftWrist.x;
lwy=results[0].pose.leftWrist.y;
console.log("lwx="+lwx+"lwy="+lwy);

rwx=results[0].pose.rightWrist.x;
rwy=results[0].pose.rightWrist.y;
console.log("rwx="+rwx+"rwy="+rwy);
}
}

function draw(){
    image(video, 0, 0, 620, 520);

    song1_status = song1.isplaying();

    song2_status = song2.isplaying();

    fill("#0000ff");
    stroke("#0000ff");

    if(slw>0.2){
    circle(lwx,lwy,20);
    song1.stop
    document.getElementById("Song").innerHTML="Song 2 is playing"
    song2.play

    if (song1.isPlaying=false) {
        document.getElementById("Song").innerHTML="Song 2 is playing"
        song2.play  
    }
    }

    if(srw>0.2){
        circle(rwx,rwy,20);
        song2.stop
        document.getElementById("Song").innerHTML="Song 1 is playing"
        song1.play

        if (song2.isPlaying=false) {
            document.getElementById("Song").innerHTML="Song 1 is playing"
            song1.play  
        }
        }
}

function play(){
   song.play() 
   song.setVolume(1);
   song.rate(1);
}