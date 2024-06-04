// VARIABLES GLOBALES
let tarjTuResto = "N";
let totalFinal=0;

// FUNCION para generar el total de la cena
function total_parcial_cena(beb, com) {
    return (beb + com);
}

function tu_resto(pagoParcial){
    totalFinal = pagoParcial- (pagoParcial * .25);
    return totalFinal;
}

function pago_efectivo(pagoParcial){
    totalFinal = pagoParcial- (pagoParcial * .10);
    return totalFinal;
}



//////////////////////////////////////////////////////////////////////////

let mozo = prompt("Indique su número de mozo (1 o 2)");


while (mozo != 1 && mozo != 2) {
    alert("No existe el mozo Nº " + mozo);
    mozo = prompt("Indique su número correcto de mozo (1 o 2)");
}

if (mozo == 1) {
    alert("Bienvenido Hernán");
} else {
    alert("Bienvenida Julieta");
}

let bebida = parseInt (prompt("Ingrese el importe gastado en Bebidas"));

let comida = parseInt (prompt("Ingrese el importe gastado en Comida"));

let totalParcial = total_parcial_cena(bebida, comida);

// Interactua con el Mozo

let cerrar = prompt("Quiere cobrar la mesa ? - Ingrese SI o NO");


while (cerrar != "NO" && cerrar != "SI") {
    alert(cerrar + "no es una respuesta fue válida");
    cerrar = prompt("Quiere cerrar y cobrar la mesa ? - Ingrese SI o NO");
}

if (cerrar == "SI") {

    alert("RECORDÁ OFRECER NUESTRAS PROMOCIONES DISPONIBLES");
    alert("Efectivo -10% // TURESTO -15% adicinal !");

    let formaDePago = prompt("Cómo paga? /// E: Ef / T: Deb o Cred");

    if (formaDePago == "E") {

        tarjTuResto = prompt("Tiene TuResto? - SI o NO");

        if (tarjTuResto == "SI") {
          alert("Total a pagar con descuento + TuResto es de $" + tu_resto(totalParcial));

        } else {
          alert("Total a pagar en Efectivo es de $" + pago_efectivo(totalParcial));
        }

      
    } else {
        totalFinal = totalParcial+ (totalParcial * .21);
        alert("Solo aceptamos en un solo pago");
        alert("Total a pagar: $" + totalFinal );
    }
    
}
else {
    alert("El monto total SIN iva hasta este momento es de: $" + totalParcial);
    alert("La mesa sigue abierta hasta que quiera cerrarla");
}
