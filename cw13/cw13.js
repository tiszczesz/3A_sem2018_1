window.onload = start;

function start(){
    document.querySelector("#zatwierdz").onclick = zatwierdz;
}
function zatwierdz(){
    var imie = document.querySelector("#imie");
    var nazwisko = document.querySelector("#nazwisko");    
    console.log(nazwisko);
    var imOK = Validate(imie);
    var nazOK = Validate(nazwisko);
    if(imOK && nazOK){
        var ocena = Math.floor(Math.random()*6+1);
        document.querySelector("#wynik").innerHTML = imie.value+
                " "+nazwisko.value+" Twoja ocena: "+ocena;
    }
}
function Validate(elem){
    var value = elem.value;
    var next = elem.nextElementSibling;
    if(value.trim()!=''){
        next.innerHTML = "";
        return true;
    }else{
         next.innerHTML = "Błędne dane";
        return false;
    }
}

