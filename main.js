var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition;

function start(){
document.getElementById("txt").innerHTML="";
recognition.start(); 
}

recognition.onresult=function(event){
console.log(event);
var content=event.results[0][0].transcript;
document.getElementById("txt").innerHTML=content;
console.log(content);

if (content=="take my selfie") {
console.log("Taking your selfie in 5 seconds--");  
speak();
}
}
  
function speak()
{
var synth=window.speechSynthesis;
Webcam.attach(camera);
speak_data="Taking your selfie in 5 seconds";
var UtterThis=SpeechSynthesisUtterance(speak_data);
synth.speak(UtterThis);
setTimeout(function()
{
take_snapshot();

},5000
);
}

Webcam.set({
    width: 320,
    height: 240,
    image_format: 'png',
    jpeg_quality: 90
  });
  camera=document.getElementById("camera");
  
  function snapshot(){
  Webcam.snap(function(data_uri){
  document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri+'">';

  });
}
function STOB(){
setTimeout();
}
