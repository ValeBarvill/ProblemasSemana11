function calcularPrecioFinal() {
    const precioBase = parseFloat(document.getElementById('precioOriginal').value);
    const display = document.getElementById('resultado');

    if (!isNaN(precioBase) && precioBase > 0) {
        // 1. Calcular descuento (20%)
        const descuento = precioBase * 0.20;
        const precioConDescuento = precioBase - descuento;

        // 2. Calcular IVA (15% sobre el precio con descuento)
        const iva = precioConDescuento * 0.15;
        const precioFinal = precioConDescuento + iva;

        // Mostrar resultados detallados
        display.style.color = "#333";
        display.innerHTML = `
            <p>Precio base: $${precioBase.toFixed(2)}</p>
            <p>Descuento (20%): -$${descuento.toFixed(2)}</p>
            <p><strong>Precio con descuento: $${precioConDescuento.toFixed(2)}</strong></p>
            <p>IVA (15%): +$${iva.toFixed(2)}</p>
            <hr>
            <p style="color: #28a745; font-size: 1.2em;"><strong>Total Final: $${precioFinal.toFixed(2)}</strong></p>
        `;
    } else {
        display.style.color = "#dc3545";
        display.innerHTML = "Por favor, ingrese un precio válido.";
    }
}