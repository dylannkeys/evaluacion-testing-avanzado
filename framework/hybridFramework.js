class HybridFramework {

    runIntegrationTest(nombre, prueba) {
        console.log("Ejecutando prueba de integración:", nombre);
        prueba();
    }

    createSpy(nombreFuncion) {
        return {
            nombre: nombreFuncion,
            llamadas: 0,

            ejecutar() {
                this.llamadas++;
            }
        };
    }

    generateTestFromType(tipo) {

        if (tipo === "number") {
            return [1, 3, 5, 7, 9];
        }

        if (tipo === "string") {
            return ["a", "b", "c"];
        }

        return [];
    }
}

module.exports = HybridFramework;