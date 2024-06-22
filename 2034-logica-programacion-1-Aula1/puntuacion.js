/*
Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra
"¡Felicidades, has ganado!". En caso contrario, muestra "Intentalo nuevamente para ganar.".
*/

let puntuación = prompt("Ingresa tu puntuación");

// Para asegurar que se ingrese solo numeros enteros positivos

let soloNumeros = /^[0-9]+$/;

let puntuación2 =parseInt(puntuación);

if(!soloNumeros.test(puntuación2)){
    alert("Ingresa el dato válida");
} else {
    if(puntuación2 >= 100){
        alert("¡Felicidades, has ganado!");
    } else{
        alert("Inténtalo nuevamente para ganar.");
    }
}
