const metrics = {
    complejidadCiclomatica: 3,
    flakyTestsDetectados: 0,
    tiempoPromedioMs: 1,
    cobertura: 100,
    defectosEncontrados: 3
};

function mostrarMetricas() {
    console.log("===== MÉTRICAS AVANZADAS DE CALIDAD =====");
    console.log("Complejidad ciclomática por prueba:", metrics.complejidadCiclomatica);
    console.log("Pruebas inestables detectadas:", metrics.flakyTestsDetectados);
    console.log("Tiempo promedio de ejecución:", metrics.tiempoPromedioMs + " ms");
    console.log("Cobertura obtenida:", metrics.cobertura + "%");
    console.log("Defectos detectados:", metrics.defectosEncontrados);

    const relacionCoberturaDefectos = metrics.defectosEncontrados / metrics.cobertura;

    console.log("Relación cobertura/defectos:", relacionCoberturaDefectos.toFixed(3));
}

mostrarMetricas();