window.onload = start;

function start(){
    var dane = [
        ["Adam","Nowak",2700,"sprzedawca"],
        ["Monika","Turek",3700,"asystent"],
        ["Lucyna","Tymek",4200,"kierownik"],
        ["Tomasz","Fran",2100,"sprzedawca"],
        ["Grażyna","Kowalska",4200,"kierowca"],
        ["Malwina","Rygek",1200,"portier"]
    ];
    document.getElementById("data").valueAsDate  = new Date();
    document.getElementById("getDate").onclick = function (){
        console.log(document.getElementById("data").value);
    };
    document.getElementById("wykonaj").onclick = generuj;
    document.getElementById("zmien").onclick = zmien;
    function zmien(){
        var color = document.getElementById("color").value;
        document.body.style.backgroundColor = color;
    }
    function generuj(){
        var html = "<table>";
        html += "<tr><th>Lp</th><th>Imię</th><th>Nazwisko</th><th>Pensja</th><th>Stanowisko</th></tr>";
        for(var i=0;i<dane.length;i++){
            html += "<tr><td>"+(i+1)+"</td>";
            for(var j=0;j<dane[i].length;j++){
                html += "<td>"+dane[i][j]+"</td>";
            }
            html += "</tr>";
        }
        var suma = getInfo();
        document.getElementById("wynik").innerHTML = html+"</table><div>Suma pensji: "
               +suma+" Średnia pensja: "+(suma/dane.length).toFixed(2)+"</div>";
       var index = getMin();
       document.getElementById("info").innerHTML = dane[index];
    }
    function getInfo(){
        var suma = 0;
        for(var i=0;i<dane.length;i++){
            suma += dane[i][2];
        }
        return suma;
    }
    function getMin(){
        var min = 99999999;
        var minIndex = -1;
        for(var i=0;i<dane.length;i++){
            if(dane[i][2]<min){
                minIndex = i;
                min = dane[i][2];
            }
        }
        return minIndex;
    }
}


