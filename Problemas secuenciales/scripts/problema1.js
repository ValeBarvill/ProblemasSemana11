function calcularConagua() {
    // Captura de datos
    const metros = parseFloat(document.getElementById('metros').value);
    const costoPorMetro = parseFloat(document.getElementById('costo').value);
    const cajaResultado = document.getElementById('resultado');

    // Proceso y validación
    if (!isNaN(metros) && !isNaN(costoPorMetro) && metros >= 0 && costoPorMetro >= 0) {
        const pagoTotal = metros * costoPorMetro;
        
        // Salida
        cajaResultado.style.color = "#28a745";
        cajaResultado.innerHTML = `El pago total es: <strong>$${pagoTotal.toFixed(2)}</strong>`;
    } else {
        cajaResultado.style.color = "#dc3545";
        cajaResultado.innerHTML = "Por favor, ingrese valores válidos.";
    }
}