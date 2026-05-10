function calcularTiempo() {
    const edad = parseInt(document.getElementById('edad').value);
    const display = document.getElementById('resultado');

    if (!isNaN(edad) && edad >= 0) {
        // Cálculos aproximados
        const meses = edad * 12;
        const semanas = edad * 52;
        const dias = edad * 365;
        const horas = dias * 24;

        display.style.color = "#333";
        display.innerHTML = `
            <p><strong>Para una edad de ${edad} años:</strong></p>
            <hr>
            <ul>
                <li>Meses: <strong>${meses.toLocaleString()}</strong></li>
                <li>Semanas: <strong>${semanas.toLocaleString()}</strong></li>
                <li>Días: <strong>${dias.toLocaleString()}</strong></li>
                <li>Horas: <strong>${horas.toLocaleString()}</strong></li>
            </ul>
            <p style="font-size: 0.8em; color: #666;">*Cálculo basado en años de 365 días.</p>
        `;
    } else {
        display.style.color = "#dc3545";
        display.innerHTML = "Por favor, ingrese una edad válida.";
    }
}