const casos = [
    { navegador: "Chrome", sistema: "Windows", riesgo: 5, ejecucionesFallidas: 2 },
    { navegador: "Firefox", sistema: "Linux", riesgo: 3, ejecucionesFallidas: 1 },
    { navegador: "Edge", sistema: "Windows", riesgo: 4, ejecucionesFallidas: 0 },
    { navegador: "Safari", sistema: "macOS", riesgo: 2, ejecucionesFallidas: 0 },
    { navegador: "Opera", sistema: "Android", riesgo: 1, ejecucionesFallidas: 0 }
];

function calcularPrioridad(caso) {
    return caso.riesgo + caso.ejecucionesFallidas;
}

function ordenarPorRiesgo(casos) {
    return casos.sort((a, b) => calcularPrioridad(b) - calcularPrioridad(a));
}

function ejecutarOrquestador() {
    console.log("===== ORQUESTACIÓN DE PRUEBAS COMBINATORIAS =====");

    const casosPriorizados = ordenarPorRiesgo(casos);

    casosPriorizados.forEach((caso, index) => {
        console.log(
            `Caso ${index + 1}: ${caso.navegador} - ${caso.sistema} | Riesgo: ${caso.riesgo} | Fallos previos: ${caso.ejecucionesFallidas} | Prioridad: ${calcularPrioridad(caso)}`
        );
    });
}

ejecutarOrquestador();