const busquedaBinaria = require('./busquedaBinaria');

function contractTest() {

    const arreglo = [1, 3, 5, 7, 9];

    let resultado = busquedaBinaria(arreglo, 7);

    if (typeof resultado !== "number") {

        console.log("Contrato incumplido");
        return;
    }

    console.log("Contract Testing correcto");
}

contractTest();