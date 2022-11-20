g="";
v="";
function preload(){
m=loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}
function setup(){

    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose', gotPoses);
}
function draw(){
image(video,0,0,300,300);
//fill(255,79,197);
//stroke(66, 245, 161);
//circle(g,v,20);
image(m,g,v,50,30);
}
function pri(){

    save('filterimage.png');

    
}
function modelLoaded(){

   console.log('your model has loaded !#%&(@$^*)'); 
}
function gotPoses(results){
    if(results.length>0){
         //console.log("g="+results[0].pose.nose.x);
         //console.log("v="+results[0].pose.nose.y);
         g=results[0].pose.nose.x-25;
         v=results[0].pose.nose.y-3;                       }
}