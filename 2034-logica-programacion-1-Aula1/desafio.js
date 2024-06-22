// let bienvenida = prompt("¡Bienvenida y bienvenido a nuestro sitio web!");

// Para verificar si la entrada contiene letras
let edad = 25, numeroVentas = 50, saldoDisponible = 1000;
let bienvenida;
let soloLetras = /^[A-Za-z]+$/ ;
let nombre = bienvenida, mensajeDeError = "¡Error! Completa todos los campos";

do {
    let bienvenida = prompt("¡Bienvenida y bienvenido a nuestro sitio web!");
    if(soloLetras.test(bienvenida)){
    } else {
        alert("Ingresa un nombre valido");
    }
    alert(`Mi nombre es : ${bienvenida} \n Tengo : ${edad} años. \n  Mi número de ventas : ${numeroVentas} \n  Mi saldo es : ${saldoDisponible} `);
} while (soloLetras.test == bienvenida);

// let nombre = bienvenida, mensajeDeError = "¡Error! Completa todos los campos";



// alert("Mi nombre es : " + nombre + " \n" + "Mi edad : " + edad + " años.");
// alert(`Mi nombre es : ${nombre} \n Tengo : ${edad} años. \n  Mi número de ventas : ${numeroVentas} \n  Mi saldo es : ${saldoDisponible} `);

// alert(mensajeDeError);

// let validad = typeof(bienvenida);


