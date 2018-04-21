window.onload = start;

function start(){
    var colors = ["white","green","yellow","red","blue","purple"];
    var fontsSize = ["10px","15px","20px","25px"];
    var divs = document.getElementsByTagName("div");
    divs[0].innerHTML = selectColors(colors);
    divs[1].innerHTML = radioFonts(fontsSize);
    document.getElementById("colors").onchange = zmiana;
    var inputs = document.getElementsByName("fonts");
    setOnclick(inputs);
}
function setOnclick(inputs){
    for(var i=0;i<inputs.length;i++){
        inputs[i].onclick = function (){
            document.body.style.fontSize = this.value;
        };
    }
}
function radioFonts(fonts){
    var html = "";
    for(var i=0;i<fonts.length;i++){
        html += 
  "<input style='margin-left:100px;' type='radio' name='fonts' value='"
        +fonts[i]+ "'>"+fonts[i]+"<br>";
    }
    return html;
}
function zmiana(){
    var color = this.value;
    document.body.style.backgroundColor = color;
   // document.body.style = "background-color: "+color;
}
function selectColors(colors){
    var html = "<select id='colors'>";
    for(var i=0;i<colors.length;i++){
        html += "<option value='"+colors[i]+"'>"+colors[i]+"</option>";
    }
    return html+"</select>";
}


