const modulos = [
    {
        nombre: "Búsqueda Binaria",
        fallosHistoricos: 1,
        complejidad: 3,
        uso: 80
    },
    {
        nombre: "Framework Híbrido",
        fallosHistoricos: 2,
        complejidad: 5,
        uso: 65
    },
    {
        nombre: "Orquestador Combinatorio",
        fallosHistoricos: 3,
        complejidad: 6,
        uso: 70
    },
    {
        nombre: "Dashboard",
        fallosHistoricos: 1,
        complejidad: 2,
        uso: 50
    }
];

function modeloLogaritmico(modulo) {
    return 100 - (Math.log(modulo.fallosHistoricos + 1) * 10 + modulo.complejidad * 2);
}

function modeloEstocastico(modulo) {
    return 100 - ((modulo.fallosHistoricos * 5) + (modulo.complejidad * 3) + ((100 - modulo.uso) * 0.2));
}

function prediccionIntegrada(modulo) {
    const logaritmico = modeloLogaritmico(modulo);
    const estocastico = modeloEstocastico(modulo);

    return ((logaritmico + estocastico) / 2).toFixed(2);
}

function mostrarPredicciones() {
    console.log("===== MODELO PREDICTIVO DE CONFIABILIDAD =====");

    modulos.forEach(modulo => {
        console.log(`Módulo: ${modulo.nombre}`);
        console.log(`Fallos históricos: ${modulo.fallosHistoricos}`);
        console.log(`Complejidad: ${modulo.complejidad}`);
        console.log(`Uso: ${modulo.uso}%`);
        console.log(`Confiabilidad estimada: ${prediccionIntegrada(modulo)}%`);
        console.log("-------------------------------------");
    });
}

mostrarPredicciones();