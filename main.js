function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.3.1/dist/tf.min.js', modelLoaded);
}

function draw(){
    image(video, 0, 0, 300, 300);
    classifier.classify(video, gotResults);
 }

 function modelLoaded(){
    console.log('model is ready :D !!!!!!!!!!!!!!!!!!!!!!!');

 function gotResults(error, results){
    if(error){
        console.error(error)
    }
  else{
      console.log(results);
      document.getElementById("result_object_name").innerHTML = results[0].label;
      document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
  }}