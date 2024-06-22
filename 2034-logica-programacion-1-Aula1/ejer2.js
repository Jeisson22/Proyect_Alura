let numero = prompt("Ingresa un número entero");

// Modificar la expresión regular para aceptar números negativos también
let soloNumeros = /^-?[0-9]+$/;

if (!soloNumeros.test(numero)) {
    alert("Por favor, ingresa un número entero válido.");
} else {
    numero = parseInt(numero); // Convertir la entrada a un número entero
    if (numero < 0) {
        alert(`El número ${numero} que ingresaste es negativo.`);
    } else if (numero > 0) {
        alert(`El número ${numero} que ingresaste es positivo.`);
    } else {
        alert(`El número ${numero} que ingresaste es neutro.`);
    }
}
