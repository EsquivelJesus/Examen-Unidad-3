function Convertir(){
    var monto = parseInt(document.getElementById("Compra").value);
    var resultado =0;
    var cambio = 19.50;
    if(document,getElementById("Peso").checked){
        resultado = monto / cambio;
        alert("El cambio de Pesos a Dolares es de: $" + resultado.toFixed(2));
    }
    if(document.getElementById("Dolar").checked){
        resultado = monto * cambio;
        alert("El cambio de Dolares a Pesos es de: $" + resultado.toFixed(2));
    }
    else{
    alert("Tienes que llenar el campo y seleccionar un tipo de cambio");
    }
    document.getElementById("Venta").innerHTML= resultado.toFixed(2);
}