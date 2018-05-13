window.onload = start;

function start() {
    var liczby = [23, 7, 89.9, 45, 123, 56, 11];
    document.write(liczby);
    document.write("<p>Ilość elementów tablicy: "
            + liczby.length + "</p>");
    liczby.push(999);
    liczby[5] = "tu była 123";
    document.write(liczby+"<br>");
    var zabrana = liczby.pop();
    document.write(liczby+"<br>");
    alert(zabrana);
    liczby.shift();
    document.write(liczby+"<br>");
    liczby.unshift("pierwszy element");
    document.write(liczby+"<br>");
    
}


