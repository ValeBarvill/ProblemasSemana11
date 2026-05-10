function calcularAhorro() {
    const sueldo = parseFloat(document.getElementById('sueldoSemanal').value);
    const display = document.getElementById('resultado');

    if (!isNaN(sueldo) && sueldo > 0) {
        // Cálculo de ahorro semanal (15%)
        const ahorroSemanal = sueldo * 0.15;
        
        // Cálculo mensual (4 semanas por mes)
        const ahorroMensual = ahorroSemanal * 4;
        
        // Cálculo anual (12 meses)
        const ahorroAnual = ahorroMensual * 12;

        display.style.color = "#333";
        display.innerHTML = `
            <p>Ahorro por semana: <strong>$${ahorroSemanal.toFixed(2)}</strong></p>
            <p>Ahorro por mes: <strong>$${ahorroMensual.toFixed(2)}</strong></p>
            <hr>
            <p style="color: #28a745; font-size: 1.2em;">
                Ahorro Total al Año: <br>
                <strong>$${ahorroAnual.toFixed(2)}</strong>
            </p>
        `;
    } else {
        display.style.color = "#dc3545";
        display.innerHTML = "Por favor, ingrese un sueldo válido.";
    }
}