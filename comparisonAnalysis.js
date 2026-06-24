const herramientas = [
    {
        nombre: "TestCraft",
        tipo: "Codeless",
        tiempoDesarrolloHoras: 4,
        mantenibilidad: 9,
        defectosDetectados: 6,
        roiSeisMeses: 75
    },
    {
        nombre: "Jasmine",
        tipo: "Traditional",
        tiempoDesarrolloHoras: 7,
        mantenibilidad: 7,
        defectosDetectados: 8,
        roiSeisMeses: 65
    },
    {
        nombre: "Selenium WebDriver",
        tipo: "Hybrid",
        tiempoDesarrolloHoras: 9,
        mantenibilidad: 6,
        defectosDetectados: 9,
        roiSeisMeses: 60
    }
];

function promedio(datos, campo) {
    const total = datos.reduce((suma, item) => suma + item[campo], 0);
    return total / datos.length;
}

function varianza(datos, campo) {
    const media = promedio(datos, campo);
    const total = datos.reduce((suma, item) => suma + Math.pow(item[campo] - media, 2), 0);
    return total / datos.length;
}

function mostrarAnalisis() {
    console.log("===== COMPARACIÓN CODELESS VS TRADITIONAL =====");

    herramientas.forEach(h => {
        console.log(`${h.nombre} (${h.tipo})`);
        console.log(`Tiempo de desarrollo: ${h.tiempoDesarrolloHoras} horas`);
        console.log(`Mantenibilidad: ${h.mantenibilidad}/10`);
        console.log(`Defectos detectados: ${h.defectosDetectados}`);
        console.log(`ROI a 6 meses: ${h.roiSeisMeses}%`);
        console.log("-------------------------------------");
    });

    console.log("Promedio de tiempo de desarrollo:", promedio(herramientas, "tiempoDesarrolloHoras").toFixed(2));
    console.log("Varianza del tiempo de desarrollo:", varianza(herramientas, "tiempoDesarrolloHoras").toFixed(2));
    console.log("Promedio de defectos detectados:", promedio(herramientas, "defectosDetectados").toFixed(2));

    console.log("Hipótesis: Las herramientas codeless reducen el tiempo de desarrollo, pero las tradicionales e híbridas pueden detectar más defectos técnicos.");
}

mostrarAnalisis();