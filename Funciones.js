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

function Segundero(){
    let hora=0, minuto=0, segundo=0;
    segundo++;
    if(segundo>=60){
        minuto++;
        segundo=0;
        if (minuto>=60){
            hora++;
            minuto=0;
        }
    }

    strSegundo = new String(segundo)
    if (strSegundo.length == 1){
        segundo = "0" + segundo;
    }

    strMinuto = new String(minuto)
    if (strMinuto.length == 1){
        minuto = "0" + minuto;
    }

    strHora = new String(hora)
    if (strHora.length == 1){
        hora = "0" + hora;
    }

    let impresion = hora + ":" + minuto + ":" + segundo;
    document.getElementById("tiempero").innerHTML = impresion;
}

setInterval(function (){
    Segundero();
}, 1000)

function Juguemos(){
    let numero1 = Math.round(Math.random() * 100);
    let numero2 = Math.round(Math.random() * 100);

    if ((numero1 || numero2)>10){
        numero1 = Math.round(Math.random() * 100);
        numero2 = Math.round(Math.random() * 100);
    }
    document.getElementById("num1").innerHTML = numero1;
    document.getElementById("num2").innerHTML = numero2;

    let correcto = numero1 * numero2;
    let respuesta = document.getElementById("num3").value;
    console.log(respuesta);
    if (correcto === respuesta){

    }
}

