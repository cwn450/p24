function setup(){
    video = createCapture(VIDEO);
    video.size(400,300);
    video.position(20,150)

    canvas = createCanvas(450, 450);
    canvas.position(800, 120); 
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw(){
    background("#FFFFFF");
}
function modelLoaded(){
    console.log("Pose Is Initialized!");
}

function gotPoses(results){
    if(results.length >0){
        console.log(results);
    }
}