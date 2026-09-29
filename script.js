var zdjecia = document.getElementsByClassName("zdjecie");
var numer = 0;

function nastepne() {
    zdjecia[numer].style.display = "none";
    numer++;
    if (numer == zdjecia.length) {
        numer = 0;
    }
    zdjecia[numer].style.display = "block";
}

for (var i = 0; i < zdjecia.length; i++) {
    zdjecia[i].onclick = nastepne;
}
