const busquedaBinaria = require('./busquedaBinaria');

test('Encuentra un número existente en el centro del arreglo', () => {
    const arreglo = [1, 3, 5, 7, 9];
    expect(busquedaBinaria(arreglo, 5)).toBe(2);
});

test('Retorna -1 cuando el número no existe', () => {
    const arreglo = [1, 3, 5, 7, 9];
    expect(busquedaBinaria(arreglo, 10)).toBe(-1);
}); 