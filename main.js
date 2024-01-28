function identify(){
    navigator.mediaDevices.getUserMedia({audio: true})
    mymodle = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/tbjx02tM5/model.json",modelReady)
}
function modelReady(){
mymodle.classify(gotResults)
}

function gotResults(error,results){
if(error){console.log(error)}
else{
console.log(results)
document.getElementById("Sn").innerHTML= "I can Hear  "+results[0].label
document.getElementById("acc").innerHTML= "Accuracy  "+(results[0].confidence*100).toFixed(2)+" %"

backgroundimage =document.getElementById("a1")
alien1 = document.getElementById("a2")
alien2 = document.getElementById("a3")
alien3 = document.getElementById("a4")

if(results[0].label=="Clap"){
    alien1.src="aliens-02.gif"
backgroundimage.src="aliens-01.png"
alien2.src="aliens-03.png"
alien3.src="aliens-04.png"
}
else if(results[0].label=="Snap"){
    alien1.src="aliens-02.png"
backgroundimage.src="aliens-01.png"
alien2.src="aliens-03.gif"
alien3.src="aliens-04.png"
}
else if(results[0].label=="bell"){
    alien1.src="aliens-02.png"
backgroundimage.src="aliens-01.png"
alien2.src="aliens-03.png"
alien3.src="aliens-04.gif"
}
else{
    alien1.src="aliens-02.png"
backgroundimage.src="aliens-01.gif"
alien2.src="aliens-03.png"
alien3.src="aliens-04.png"
}
}
}



















