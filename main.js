Webcam.set({
    width:360,
    height:310,
    image_format: 'png',
    png_quality: 100
});

  camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML =  '<img id="camera_image" src="'+data_uri+'"/>';
    });
}
 
   console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/2qJRKQA9_/model.json',modelLoaded);

function modelLoaded() {
    console.log('Model Loaded!');
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The First Prediction is" + prediction_1;
    speak_data_2 = "The Second Predicton is" + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2)
    synth.speak(utterThis);
}