/**
 * Esta función abre la ventana del juego de la multiplicación
 * @method AbrirJuego
 * @return ventana de juego
 */
function AbrirJuego(){
    let url;
    url = "Juego.html";
    window.open(url);
}


/**
 * Permite seleccionar dos números para que la ayuda de la respuesta de la multiplicación
 * @method FunAyudas
 * @return resultado de la multiplicación
 */

function FunAyudas() {
    let num1, num2;
    num1 = Number(document.getElementById("multi1").value);
    num2 = document.getElementById("multi2").value;
    document.getElementById("resultadoAyudas").innerHTML = num1 * Number(num2);
}

/**
 * Esta función es el segundero en la ventana del juego, para que vaya sumando en segundos y minutos
 * @method Segundero
 * @return el print del tiempo corriendo
 */

function Segundero(){
    segundos=0;
    minutos=0
    s= document.getElementById("segundos");
    m=document.getElementById("minutos")

    tiempero=setInterval(
        function(){
            if(segundos==60){
                segundos=0;
                minutos++;
                m.innerHTML=minutos;
                if(minutos==60){
                    minutos=0;
                }
            }
            s.innerHTML=segundos;
            segundos++
        },1000 );
    console.log(tiempero)
}

/**
 * Esta función nos dá dos números randoms entre 1 y 10 y elimina los decimales y toma los dos valores randoms que da
 * para verificar que este bien la multiplicación
 * @method Juguemos
 * @return los dos números randoms para el juego y el valor correcto de la multiplicación
 */

function Juguemos(){
    let min =1;
    let max=10;
    let numero1=Math.random()*(max-min)+min; //nos da el random entre 1 y 10
    let numero2=Math.random()*(max-min)+min; //nos da el random entre 1 y 10
    let n1=Math.trunc(numero1) //redondeamos el random
    let n2=Math.trunc(numero2) //redondeamos el random
    document.getElementById("num1").innerHTML = n1;
    document.getElementById("num2").innerHTML = n2;
    let correcto = numero1 * numero2;
    return correcto;
}

/**
 * Función para sumar el puntaje en caso de que la respuesta que ingrese la persona sea la correcta
 * @method SumarPuntaje
 * @return suma del puntaje en el juego
 */

function SumarPuntaje () {
    let puntaje = document.getElementById("puntaje").innerHTML;
    let n1 = document.getElementById("num1").innerHTML;
    let n2 = document.getElementById("num2").innerHTML;
    let correcto = n1 * n2;
    console.log(correcto)
    let respuesta = document.getElementById("num3").value;
    if (correcto == respuesta) {
        puntaje = Number(puntaje) + 10;
    }
    else {
        alert("Respuesta incorrecta")
    }
    document.getElementById("puntaje").innerHTML = puntaje;
    Juguemos()
    document.getElementById("num3").value = "";
}

/**
 * Función para contar las veces jugadas
 * @method Cantidad
 * @return número de pregunta actual del total
 */

function Cantidad() {
    let VecesJugado = document.getElementById("Jugados").innerHTML;
    VecesJugado++;
    document.getElementById("Jugados").innerHTML = VecesJugado;
    if (VecesJugado==1){
        document.getElementById("MultiJuego").remove();
        document.getElementById("pizarron").remove();
        document.getElementById("BotonLimpia").remove();
        document.getElementById("ConsignaJuego").innerHTML = "Su resultado es el siguiente:";
        alert("¡Se termino el juego! Felicitaciones")
        clearInterval(tiempero);
    }
}

function Animar(){
    var Canvas = document.getElementById("canvas");
    var ctx = Canvas.getContext("2d");
    canvas.width = canvas.width;
    var fotos = new Array()
    for (var i=0; i<=9; i++){
        fotos[i] = new Image()
    }

    fotos[0].src = "Imagenes/tabla1.png"
    fotos[1].src = "Imagenes/tabla2.png"
    fotos[2].src = "Imagenes/tabla3.png"
    fotos[3].src = "Imagenes/tabla3.png"
    fotos[4].src = "Imagenes/tabla3.png"
    fotos[5].src = "Imagenes/tabla3.png"
    fotos[6].src = "Imagenes/tabla3.png"
    fotos[7].src = "Imagenes/tabla3.png"
    fotos[8].src = "Imagenes/tabla3.png"

    fotos[0].onload = function (){
        ctx.drawImage(fotos[0], 210, 50)
    }
    fotos[1].onload = function (){
        ctx.drawImage(fotos[1], 210, 50)
    }
    fotos[2].onload = function (){
        ctx.drawImage(fotos[3], 220, 65)
    }
    fotos[3].onload = function (){
        ctx.drawImage(fotos[3], 220, 65)
    }
    fotos[4].onload = function (){
        ctx.drawImage(fotos[3], 220, 65)
    }
    fotos[5].onload = function (){
        ctx.drawImage(fotos[3], 220, 65)
    }
    fotos[6].onload = function (){
        ctx.drawImage(fotos[3], 220, 65)
    }
    fotos[7].onload = function (){
        ctx.drawImage(fotos[3], 220, 65)
    }
    fotos[8].onload = function (){
        ctx.drawImage(fotos[3], 220, 65)
    }
}

