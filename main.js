let points = 0;
let nummer1;
//---------------här får du endast deklarera/initiera variabler-------------
let nummer2;
let dittSvar;
let rättSvar;
let difficulty = 1;
let level = "addition";
let elDifficulty = document.getElementById("difficulty");
elDifficulty.innerHTML = "svårighets grad: " + difficulty;

// --------------------------Bestämmer lvl---------------------------------
if (level = "addition") {

    rättSvar = problemObject.createQuestion(" + ", difficulty);

}
console.log(rättSvar);
//----Knappen som genererar frågor och tar emot svar-------------------------
function answer() {



    let elSvar = document.getElementById("svar");
    let dittSvar = elSvar.value;
    elTextRuta = document.getElementById("textRuta");
    if (dittSvar == rättSvar) {
        points++;
        difficulty++;
        elTextRuta.innerHTML = "BRA JOBBAT FORSÄTT KÄMPA!!!<br> du har: " + points + "poäng.";

    } else {
        points--;
        difficulty--;
        elTextRuta.innerHTML = "FEL SVAR IDIOT!!! <br> du har: " + points + "poäng.";
    }
    elDifficulty.innerHTML = "svårighets grad: " + difficulty;
    elSvar.value = "";
    //ändrar nivå på spelet
    //level = levelHanteraren.choseLevel(points);
    levelHanteraren.choseLevel(points);

    if (level == "addition") {

        rättSvar = problemObject.createQuestion(" + ", difficulty);
    } else if (level == "substraktion") {
        rättSvar = problemObject.createQuestion(" - ", difficulty);
    } else if (level == "multi") {
        rättSvar = problemObject.createQuestion(" * ", difficulty);
    } else if (level == "div") {
        rättSvar = problemObject.createQuestion(" / ", difficulty);
    }
}

//------------------------gör så att man kan använda enter knappen---------------------------------------------------
window.addEventListener('keyup', function(e) {
    if (e.keyCode === 13) {
        answer();
    }
});