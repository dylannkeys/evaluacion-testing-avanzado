const busquedaBinaria = require('./busquedaBinaria');

test('Encuentra un número existente en el centro del arreglo', () => {
    const arreglo = [1, 3, 5, 7, 9];
    expect(busquedaBinaria(arreglo, 5)).toBe(2);
});

test('Encuentra el primer elemento del arreglo', () => {
    const arreglo = [2, 4, 6, 8, 10];
    expect(busquedaBinaria(arreglo, 2)).toBe(0);
});

test('Encuentra el último elemento del arreglo', () => {
    const arreglo = [2, 4, 6, 8, 10];
    expect(busquedaBinaria(arreglo, 10)).toBe(4);
});

test('Retorna -1 cuando el número buscado es menor que todos', () => {
    const arreglo = [10, 20, 30, 40, 50];
    expect(busquedaBinaria(arreglo, 5)).toBe(-1);
});

test('Retorna -1 cuando el número buscado es mayor que todos', () => {
    const arreglo = [10, 20, 30, 40, 50];
    expect(busquedaBinaria(arreglo, 60)).toBe(-1);
});

test('Retorna -1 cuando el arreglo está vacío', () => {
    const arreglo = [];
    expect(busquedaBinaria(arreglo, 10)).toBe(-1);
});