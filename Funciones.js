/**
 * Esta función abre la ventana del juego de la multiplicación
 * @method AbrirJuego
 * @param {string} url - archivo html del juego
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
 * @param {number} num1 - Guarda el primer numero que se selecciona para la multiplicación
 * @param {number} num2 - Guarda el segundo numero que se selecciona para la multiplicación
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
 * @param {number} s - almacena el primer valor de los segundos que es 0
 * @param {number} m - almacena el primer valor de los minutos que es 0
 * @param {number} segundos - contador para que aumenten los segundos
 * @param {number} minutos - contador para que aumenten los minutos
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
 * Esta función nos da dos numeros randoms entre 1 y 10 y elimina los decimales y toma los dos valores randoms que da
 * para verificar que este bien la multiplicación
 * @method Juguemos
 * @param {number} min - establece el numero mas chico que puede salir al azar
 * @param {number} max - establece el numero mas alto que puede salir al azar
 * @param {number} numero1 - da el primer numero random entre 1 y 10
 * @param {number} numero1 - da el segundo numero random entre 1 y 10
 * @param {number} n1 - redonde el primer numero para que sea un entero
 * @param {number} n2 - redondea el segundo numero para que sea un entero
 * @param {number} correcto - devuelve el numero correcto
 * @return los dos numeros randoms para el juego y el valor correcto de la multiplicacion
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
 * @param {number} puntaje - establece el puntaje
 * @param {number} n1 - toma el primer valor random que nos da la funcion anterior
 * @param {number} n2 - toma el segundo valor random que nos da la funcion anterior
 * @param {number} correcto - almacena cual es el valor correcto de la multiplicacion
 * @param {number} respuesta - toma la respuesta que ingresa la persona
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
 * Funcion para Contar las veces jugadas
 * @method Cantidad
 * @param {number} VecesJugado - cuenta las veces jugadas
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
 * Funcion para poder dibujar como si fuera un paint para el uso y ayuda de las multiplicaciones
 * @method Dibujar
 * @param {canvas} canvas - el canvas en el juego
 * @param {number} posX - posicion en el eje X donde se posiciona el mouse
 * @param {number} posY - posicion en el eje Y donde se posiciona el mouse
 * la variable clik se utiliza para que nos retorne valor falso o verdadero a una funcion
 * que determina si esta haciendo click, y que si ese es el caso, que rellene en rectangulos pequeños
 * que simule dibujar como un lapiz
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
 * Funcion para borrar el canvas que se usa como pizarron
 * @method Limpiar
 */

function Limpiar(){
    var canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    canvas.width = canvas.width;
}
