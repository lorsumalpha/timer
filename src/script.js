// Rufe die Elemente aus HTML in JS auf
const monateE = document.getElementById("months");
const tageE = document.getElementById("days");
const stundenE = document.getElementById("hours");
const minutenE = document.getElementById("minutes");
const sekundenE = document.getElementById("seconds");

let adventD;

// Zeitenwähler, um den Countdown zu ändern
function timeselector(){
    let input = prompt ("Welches Datum möchtest du als Countdown", "11 Nov 2021");
    if (input == null || input == ""){
        input = "11 Nov 2021";
    }
    adventD = input;
}

// Erstellung der Funktion "Countdown" - Berechnung des Countdowns
function countdown(){
    const adventDatum = new Date(adventD);
    const currentD = new Date();
    const totaleSekunden = (adventDatum - currentD) / 1000;
    
    const monate = Math.floor(totaleSekunden / 3600 / 24 / 30);
    const totaleT = totaleSekunden - (monate * 3600 * 24 * 30); 

    const tage = Math.floor(totaleT / 3600 / 24);
    const stunden = Math.floor(totaleSekunden / 3600) % 24 - 1;
    const minuten = Math.floor(totaleSekunden / 60) % 60;
    const sekunden = Math.floor(totaleSekunden % 60);

    monateE.innerHTML = monate;
    tageE.innerHTML = tage;
    stundenE.innerHTML = stunden;
    minutenE.innerHTML = minuten;
    sekundenE.innerHTML = sekunden;

}
// Aufrufen der Funktionen
timeselector();
countdown();

// Jede Sekunde den Output geben
setInterval(countdown, 1000);