const pipeline = [
    {
        etapa: "Análisis estático",
        herramienta: "ESLint / SonarQube",
        objetivo: "Detectar errores, malas prácticas y problemas de mantenibilidad"
    },
    {
        etapa: "Pruebas unitarias",
        herramienta: "Jest / Jasmine",
        objetivo: "Validar funciones individuales del sistema"
    },
    {
        etapa: "Cobertura",
        herramienta: "Istanbul / Jest Coverage",
        objetivo: "Medir sentencias, líneas, funciones y ramas ejecutadas"
    },
    {
        etapa: "Mutation Testing",
        herramienta: "Stryker",
        objetivo: "Evaluar si las pruebas detectan cambios defectuosos en el código"
    },
    {
        etapa: "Pruebas combinatorias",
        herramienta: "ACTS / Pairwise",
        objetivo: "Generar combinaciones eficientes de casos de prueba"
    },
    {
        etapa: "Automatización sin código",
        herramienta: "TestCraft",
        objetivo: "Permitir pruebas automatizadas mediante interfaz visual"
    },
    {
        etapa: "Predicción de confiabilidad",
        herramienta: "SMERFS / Frestimate",
        objetivo: "Estimar confiabilidad futura del software"
    }
];

function ejecutarPipeline() {
    console.log("===== PIPELINE DE TESTING INTEGRAL =====");

    pipeline.forEach((fase, index) => {
        console.log(`${index + 1}. ${fase.etapa}`);
        console.log(`   Herramienta: ${fase.herramienta}`);
        console.log(`   Objetivo: ${fase.objetivo}`);
    });
}

ejecutarPipeline();