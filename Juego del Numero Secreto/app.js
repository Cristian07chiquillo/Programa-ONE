// Variables
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

// Funciones
function asignarTextoElemento(etiqueta, texto){
    let elementoHTML = document.querySelector(etiqueta);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
   
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`!Felicitaciones¡ Acertaste el número en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    
    } else{
        //El usuario no acertó.
        if(numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p',`El número secreto es menor`);
        } else {
            asignarTextoElemento('p',`El número secreto es mayor`);
        }
        intentos++;
        limpiarCampo();
    }
    return;
}

function limpiarCampo(){
    document.getElementById('valorUsuario').value = '';
}

function pedirNumeroMax() {
    numeroMaximo = parseInt(prompt('¿Te gustaría adivinar un número entre el 1 y que otro número?'))
    return numeroMaximo
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','ya se sortearon todos los números posibles');
    } else{
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    pedirNumeroMax()
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar campo
    limpiarCampo();
    //indicar mensaje de intervalo de números
    //Generar el número aleatorio 
    //Inicializar el número de intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled','true');
}

// Llamado de funciones

condicionesIniciales()
