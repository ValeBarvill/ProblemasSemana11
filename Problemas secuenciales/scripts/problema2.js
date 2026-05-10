function calcularLuz() {
    // Obtenemos los valores de los campos de texto
    const kw = parseFloat(document.getElementById('kwConsumidos').value);
    const costo = parseFloat(document.getElementById('costoKW').value);
    const display = document.getElementById('resultado');

    // Validamos que los números sean correctos
    if (!isNaN(kw) && !isNaN(costo) && kw >= 0 && costo >= 0) {
        const totalPagar = kw * costo;
        
        // Mostramos el resultado con formato de moneda
        display.style.color = "#28a745";
        display.innerHTML = `Total a pagar a CLS: <strong>$${totalPagar.toFixed(2)}</strong>`;
    } else {
        // En caso de error
        display.style.color = "#dc3545";
        display.innerHTML = "Error: Ingrese datos numéricos válidos.";
    }
}