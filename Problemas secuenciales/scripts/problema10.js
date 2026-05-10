function calcularLlamada() {
    const tiempo = parseFloat(document.getElementById('minutos').value);
    const costo = parseFloat(document.getElementById('costoMin').value);
    const display = document.getElementById('resultado');

    if (!isNaN(tiempo) && !isNaN(costo) && tiempo >= 0 && costo >= 0) {
        const total = tiempo * costo;

        display.style.color = "#28a745";
        display.innerHTML = `
            <p>Duración: ${tiempo} min</p>
            <p>Tarifa: $${costo.toFixed(2)}</p>
            <hr>
            <p style="font-size: 1.2em;"><strong>Total a Pagar: $${total.toFixed(2)}</strong></p>
        `;
    } else {
        display.style.color = "#dc3545";
        display.innerHTML = "Por favor, ingrese valores válidos.";
    }
}