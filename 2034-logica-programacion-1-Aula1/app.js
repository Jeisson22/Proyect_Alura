let numeroSecreto = 6;
let numeroUsuario;

do {
    numeroUsuario = prompt("Me indicas un número por favor:");
    console.log(numeroUsuario);
    
    if (numeroUsuario == numeroSecreto) {
        alert('¡Acertaste el número!');
    } else {
        alert('Intenta de nuevo.');
    }
} while (numeroUsuario != numeroSecreto); //Se va repetir si es verdadera la condicion en el while por eso comienza de nuevo cada rato