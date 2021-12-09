//Ingreso de productos
class Perfumes {

    constructor (nombre, marca, genero, precio){
    this.nombre = nombre;
    this.marca = marca;
    this.genero = genero;
    this.precio = precio;
    }

    iva(){
        let calculo = this.precio * 0.21;
        alert(`El Iva es de ${calculo}`);
        return calculo;  

    }
    

}

let nombre = prompt("Ingrese el nombre del perfume:").toUpperCase();

let marca = prompt("Ingrese la marca del perfume:").toUpperCase();

let genero = prompt("Ingrese el genero del perfume:").toUpperCase();

let precio = parseInt(prompt("Ingrese el precio del perfume:"));


let perfume1 = new Perfumes (nombre, marca, genero, precio);

console.log(perfume1);
alert(`El perfume ingresado es ${perfume1.nombre} de ${perfume1.marca} con un precio de ${perfume1.precio} `);
console.log(perfume1.iva()); //Calculo del valor del IVA





//Calculo para el valor total de varios productos en un carrito de compras.

let valor = parseInt(prompt("ingrese el valor del Perfume:"));
let valor2 = parseInt(prompt("ingrese el valor de otro Perfume:"));
let cuota = parseInt(prompt("¿En cuantas cuotas quiere pagar?"));
let iva = 0.21;
let sumaParcial = 0;
let sumaTotal = 0;

let sumar = (valor, valor2) => {
    return valor + valor2
};


let calculoIva = (sumar, iva) => {
    return sumar * iva;
};

let calculoCuota = (sumar, cuota) => {
    return sumar / cuota;
};




alert ("Su total es:" + " " + sumar(valor, valor2));
alert("El valor por cuota es:" + " " + calculoCuota(sumar(valor, valor2), cuota));
alert("El valor correspondiente al iva es:" + " " + calculoIva(sumar(valor, valor2), iva));

do{ 
    respuesta = prompt("Desea sumar otro producto? (si/no)").toUpperCase();
    console.log(respuesta);
    
    if (respuesta == "SI"){
        valor3 = parseFloat(prompt("ingrese el valor de otro producto:"));
        sumaParcial = valor3 + sumaParcial;
        sumaTotal = sumaParcial + sumar (valor, valor2);
        alert ("Su total es:" + " " + sumaTotal);
    }
    


} while (respuesta != "NO");

alert("El valor por cuota es:" + " " + calculoCuota(sumaTotal, cuota));
alert("El valor correspondiente al iva es:" + " " + calculoIva(sumaTotal, iva));