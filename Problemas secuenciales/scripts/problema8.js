function calcularPromedio() {
    // Obtener valores de los exámenes
    const examen1 = parseFloat(document.getElementById('ex1').value);
    const examen2 = parseFloat(document.getElementById('ex2').value);
    const examen3 = parseFloat(document.getElementById('ex3').value);
    const display = document.getElementById('resultado');

    // Validación de datos
    if (!isNaN(examen1) && !isNaN(examen2) && !isNaN(examen3)) {
        
        // Cálculo ponderado
        // Examen 1 * 0.25 + Examen 2 * 0.25 + Examen 3 * 0.50
        const promedioFinal = (examen1 * 0.25) + (examen2 * 0.25) + (examen3 * 0.50);

        display.style.color = "#333";
        display.innerHTML = `
            <p><strong>Desglose:</strong></p>
            <p>Puntos E1 y E2: ${(examen1 * 0.25 + examen2 * 0.25).toFixed(2)}</p>
            <p>Puntos E3: ${(examen3 * 0.50).toFixed(2)}</p>
            <hr>
            <p style="color: #fd7e14; font-size: 1.3em;">
                <strong>Promedio Final: ${promedioFinal.toFixed(2)}</strong>
            </p>
        `;
    } else {
        display.style.color = "#dc3545";
        display.innerHTML = "Por favor, ingrese todas las calificaciones.";
    }
}