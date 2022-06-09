function AbrirJuego(){
    let url;
    url = "Juego.html";
    window.open(url);
}

function DibujarCanvas() {
    var canvas = document.getElementById("Canvas");
    var ctx = canvas.getContext("2d");
}

function FunAyudas() {
    let num1, num2;
    num1 = Number(document.getElementById("multi1").value);
    num2 = document.getElementById("multi2").value;
    document.getElementById("resultadoAyudas").innerHTML = num1 * Number(num2);
}

function SumarPuntaje () {

}

function Segundero (){

}

function Juguemos(){

}
