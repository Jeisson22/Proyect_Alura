/* 1)
Pregunta al usuario qué día de la semana es.
Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!".
De lo contrario, muestra "¡Buena semana!".
*/
let dia6 = "Sabado", dia7 ="Domingo";
let diaSemana;
// Para validar si los datos ingresado en el promt sea letras y no otro tipo de dato
let soloLetras = /^[A-Za-z]+$/;
// Voy a utilizar do while hay otras formas de realizarlo pero para mi es factible por el momento

do {
    diaSemana = prompt("¿Qué día de la semana te encuentras?")
    if(diaSemana == dia6 || diaSemana == dia7){
        alert("¡Buen fin de semana");
    }else{
        alert("¡Buena semana!")
    }
} while(dia6 == dia6);