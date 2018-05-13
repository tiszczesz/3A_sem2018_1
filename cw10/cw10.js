window.onload = start;
function start() {
    document.getElementById("redRange").oninput = zmien;
    document.getElementById("greenRange").oninput = zmien;
    document.getElementById("blueRange").oninput = zmien;
    document.body.style.backgroundColor = "rgb(100,100,100)";
}
function zmien() {
    console.log("ddd");
    var red = document.getElementById("redRange").value;
    var green = document.getElementById("greenRange").value;
    var blue = document.getElementById("blueRange").value;
    document.getElementById("red").innerHTML = red;
    document.getElementById("green").innerHTML = green;
    document.getElementById("blue").innerHTML = blue;
    document.body.style.backgroundColor = "rgb(" + red + "," 
              + green+","+blue+")";
}

