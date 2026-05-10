function calcularArea() {
    const lado = parseFloat(document.getElementById('lado').value);
    const display = document.getElementById('resultado');

    if (!isNaN(lado) && lado > 0) {
        // Fórmula: Área = Lado * Lado
        const area = lado * lado;

        display.style.color = "#333";
        display.innerHTML = `
            <p>Si el lado mide: <strong>${lado}</strong></p>
            <hr>
            <p style="color: #6f42c1; font-size: 1.2em;">
                <strong>El Área es: ${area.toFixed(2)} u²</strong>
            </p>
        `;
    } else {
        display.style.color = "#dc3545";
        display.innerHTML = "Por favor, ingrese un valor de lado válido.";
    }
}