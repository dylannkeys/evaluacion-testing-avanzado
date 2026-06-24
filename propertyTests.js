const busquedaBinaria = require('./busquedaBinaria');

function propertyTest() {

    const arreglo = [1, 3, 5, 7, 9];

    for (let numero of arreglo) {

        let posicion = busquedaBinaria(arreglo, numero);

        if (posicion === -1) {

            console.log("Error encontrado");
            return;
        }
    }

    console.log("Property-Based Testing completado correctamente");
}

propertyTest();