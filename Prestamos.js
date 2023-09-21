document.addEventListener("DOMContentLoaded", function () {
    let calcularButton = document.getElementById("calcular");
    let prestamoForm = document.getElementById("prestamoForm");
    let resultadoDiv = document.getElementById("resultado");
    
    // Objeto para guardar los datos del préstamo
    let prestamoArray = JSON.parse(localStorage.getItem("prestamos")) || [];

    calcularButton.addEventListener("click", function () {
        let prestamoData = {};
        prestamoData.nombre = document.getElementById("nombre").value;  
        prestamoData.monto = parseFloat(document.getElementById("monto").value);
        prestamoData.plazo = parseInt(document.getElementById("plazo").value);
        prestamoData.tasa = parseFloat(document.getElementById("tasa").value) / 100;

        if (isNaN(prestamoData.monto) || isNaN(prestamoData.plazo) || isNaN(prestamoData.tasa)) {
            resultadoDiv.innerHTML = "Por favor, ingresa valores válidos.";
        } else {
            let cuota = (prestamoData.monto * prestamoData.tasa) / (1 - Math.pow(1 + prestamoData.tasa, -prestamoData.plazo));
            resultadoDiv.innerHTML = `Tu cuota mensual será de: $${cuota.toFixed(2)}`;


            prestamoArray.push(prestamoData);

            localStorage.setItem("prestamos", JSON.stringify(prestamoArray));

            // Puedes acceder a los datos del préstamo a través de loanData
            console.log(prestamoData);
        }
    });
});
