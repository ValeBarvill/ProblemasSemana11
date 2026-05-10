function calcularPotencia() {
    const r = parseFloat(document.getElementById('resistencia').value);
    const i = parseFloat(document.getElementById('intensidad').value);
    const display = document.getElementById('resultado');

    if (!isNaN(r) && !isNaN(i)) {
        // 1. Calcular Voltaje (V = R * I)
        const v = r * i;
        
        // 2. Calcular Potencia (P = V * I)
        const p = v * i;

        display.style.color = "#333";
        display.innerHTML = `
            <p><strong>Resultados:</strong></p>
            <p>Voltaje calculado (V): ${v.toFixed(2)} V</p>
            <hr>
            <p style="color: #007bff; font-size: 1.2em;">
                <strong>Potencia Eléctrica (P): ${p.toFixed(2)} W</strong>
            </p>
        `;
    } else {
        display.style.color = "#dc3545";
        display.innerHTML = "Por favor, ingrese valores numéricos válidos.";
    }
}