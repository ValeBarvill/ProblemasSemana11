function calcularViaticos() {
    const dias = parseInt(document.getElementById('dias').value);
    const costoHotel = parseFloat(document.getElementById('hotel').value);
    const costoComida = parseFloat(document.getElementById('comida').value);
    const display = document.getElementById('resultado');

    if (!isNaN(dias) && dias > 0 && !isNaN(costoHotel) && !isNaN(costoComida)) {
        // Otros gastos es fijo: $100 por día
        const otrosGastosDiarios = 100;

        // Cálculos totales
        const totalHotel = costoHotel * dias;
        const totalComida = costoComida * dias;
        const totalOtros = otrosGastosDiarios * dias;
        const montoTotalCheque = totalHotel + totalComida + totalOtros;

        display.style.color = "#333";
        display.innerHTML = `
            <p><strong>Desglose por ${dias} días:</strong></p>
            <p>Total Hotel: $${totalHotel.toFixed(2)}</p>
            <p>Total Comida: $${totalComida.toFixed(2)}</p>
            <p>Otros Gastos ($100/día): $${totalOtros.toFixed(2)}</p>
            <hr>
            <p style="color: #28a745; font-size: 1.2em;">
                <strong>Monto del Cheque: $${montoTotalCheque.toFixed(2)}</strong>
            </p>
        `;
    } else {
        display.style.color = "#dc3545";
        display.innerHTML = "Por favor, complete todos los campos con valores válidos.";
    }
}