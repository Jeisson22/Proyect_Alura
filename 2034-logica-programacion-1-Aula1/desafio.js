let edad = 25, numeroVentas = 50, saldoDisponible = 1000;
let soloLetras = /^[A-Za-z]+$/;
let bienvenida;
let nombre;

do {
    bienvenida = prompt("¡Bienvenida y bienvenido a nuestro sitio web! Ingresa tu nombre:");

    if (soloLetras.test(bienvenida)) {
        nombre = bienvenida; // Almacenamos el nombre válido
    } else {
        alert("Por favor, ingresa un nombre válido (solo letras).");
    }

} while (!nombre); // Repetir hasta que se haya ingresado un nombre válido

// Una vez que se tiene un nombre válido, mostrar los datos
alert(`Bienvenido ${nombre}!\n\nMi nombre es: ${nombre}\nTengo: ${edad} años.\nMi número de ventas: ${numeroVentas}\nMi saldo es: $${saldoDisponible}`);



