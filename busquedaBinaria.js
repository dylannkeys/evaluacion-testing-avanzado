function busquedaBinaria(arreglo, objetivo) {
    let izquierda = 0;
    let derecha = arreglo.length - 1;

    while (izquierda <= derecha) {
        let medio = Math.floor((izquierda + derecha) / 2);

        if (arreglo[medio] === objetivo) {
            return medio;
        }

        if (arreglo[medio] < objetivo) {
            izquierda = medio + 1;
        } else {
            derecha = medio - 1;
        }
    }

    return -1;
}

module.exports = busquedaBinaria;