img = "";
Status="";

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector("COCOSSD", modelLoaded);
    document.getElementById("status").innerHTML = "status = detecting object";
}
function modelLoaded(){
    console.log("model is loaded");
    Status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, result){
    if(error){
        console.log("Error");
    }
    else{
        console.log(result);
    }
}

function preload(){
    img = loadImage("balcony.jpg");
}

function draw(){
    image(img, 0, 0, 640, 420);
}