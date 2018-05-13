window.onload = start;

function start() {
    document.getElementById("zatwierdz").onclick = function () {
        var imOk = ValidateText(document.getElementById("imie"));
        var nazOk = ValidateText(document.getElementById("nazwisko"));
        var wiekOk = ValidateWiek(document.getElementById("wiek"));
        if (imOk && nazOk && wiekOk) {
            var imie = document.getElementById("imie").value;
            var nazwisko = document.getElementById("nazwisko").value;
            var wiek = parseInt(document.getElementById("wiek").value);
            var semestr = document.getElementById("semestr").value;
            var radios = document.getElementsByName("plec");
            var checkboxes = document.getElementsByName("zaint");
            var zaint = getZaint(checkboxes);
            var plec = radios[0].checked ? "Kobieta" : "Mężczyna";
            console.log(semestr);
            console.log(plec);
            console.log(zaint);
        } else {
            //dane bledne
        }
    };
}
function getZaint(elems){
    var zaint = "Wybrane zainteresowania: ";
    for(var i=0;i<elems.length;i++){
        if(elems[i].checked){
            zaint += elems[i].value+","
        }
    }
    return zaint;
}
function ValidateText(elem) {
    var value = elem.value;
    var next = elem.nextElementSibling;
    if (value.trim() != "") {
        next.innerHTML = "";
        elem.style.border = "solid 1px grey";
        return true;
    } else {
        next.innerHTML = "Podaj swoje dane!!";
        elem.style.border = "solid 1px red";
        return false;
    }
}
function ValidateWiek(elem) {
    var value = parseInt(elem.value);
    var next = elem.nextElementSibling;
    if (!isNaN(value) && value > 0 && value < 200) {
        next.innerHTML = "";
        return true;
    }else {
        next.innerHTML = "Podano błędny wiek";
        return false;
    }
}
