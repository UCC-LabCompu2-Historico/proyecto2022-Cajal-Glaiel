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
    if (VecesJugado==15){
        document.getElementById("MultiJuego").remove();
        alert("¡Se termino el juego! Felicitaciones")
    }
}

/**
 * Función para poder dibujar como si fuera un paint para el uso y ayuda de las multiplicaciones
 * @method Dibujar
 * la variable clik se utiliza para que nos retorne valor falso o verdadero a una función
 * que determina si esta haciendo click, y que si ese es el caso, que rellene en rectangulos pequeños
 * que simule dibujar como un lápiz
 */

var bandera;
function DibujarCanvas(event) {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var posX = event.clientX;
    var posY = event.clientY;
    console.log(posX, posY);
    canvas.onmousedown = function () {bandera=true};
    canvas.onmouseup = function () {bandera=false};
    if (bandera){
        ctx.fillRect(posX-359, posY-459, 5, 5);
        ctx.fill;
    }
}

/**
 * Función para borrar el canvas que se usa como pizarron
 * @method Limpiar
 */

function Limpiar(){
    var canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    canvas.width = canvas.width;
}
