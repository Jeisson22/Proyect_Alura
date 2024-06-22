let numeroSecreto = [0].map(() => Math.floor(Math.random() * 10) + 1)[0];
let numeroUsuario;
let soloNumeros = /^-?[0-9]+$/;
let intentos = 1;
let palabraVeces = "vez";
do {
    numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor:");

    // Verificar si la entrada es un número válido entre 1 y 10
    if (!soloNumeros.test(numeroUsuario) || numeroUsuario.length < 1 || numeroUsuario < 1 || numeroUsuario > 10) {
        alert("Por favor, ingresa un número válido entre 1 y 10.");
    } else {
        numeroUsuario = parseInt(numeroUsuario); // Convertir la entrada a número entero

        if (numeroUsuario === numeroSecreto) {
            alert(`¡Acertaste el número es ${numeroSecreto}! \n El número de intentos es : ${intentos} ${palabraVeces}`);
        } else {
            if (numeroUsuario < numeroSecreto) {
                alert(`El número ${numeroUsuario} es menor que el número secreto.`);
            } else {
                alert(`El número ${numeroUsuario} es mayor que el número secreto.`);
            }
        }
        intentos ++;
        palabraVeces = " veces";
    }
} while (numeroUsuario !== numeroSecreto);
