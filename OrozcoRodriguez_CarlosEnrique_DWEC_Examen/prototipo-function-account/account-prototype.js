
/**
 * Ejercicio 8: Puntos 2.0 (nota: Los valores numéricos que asigna al saldo no tienen por qué ser iguales a las salidas similares que se proponen, se da libertad para escoger la cantidad)
En el directorio prototipo-function-account escriba en un fichero llamado account-prototype.js una función prototipo llamada CuentaBancaria(nombre, dni, saldo), los atributos se deben inicializar con el constructor y el saldo inicial al menos tendrá la alternativa de valer cero o el valor dado por parámetro.
*/
function sanearNumero(numero) {
    if (isNaN(numero) ||  numero.toString().trim()=== "") {
        return false;
    }
    return parseFloat(numero);
}


var CuentaBancaria = {
    nombre : "Carlos",
    dni: "11111111X",
    saldo: 3,
    

/*
Además deberá tener un atributo que no se incluye en el constructor llamado: numeroCuenta, para inicializarlo utilice el siguiente algoritmo : "ES" + Math.floor(Math.random() * 99999999999999999999).toString().padStart(20, '0');
Este algoritmo creará un número de cuenta aleatorio por cada instancia con el formato de cuenta español.
*/
    numeroCuenta : "ES" + Math.floor(Math.random() * 99999999999999999999).toString().padStart(20, '0'),

/*

El prototipo tendrá cuatro métodos:
 	this.mostrarDatos = function() { … }
Dentro del cuerpo del método se debe programar: visualizar por consola los valores de los atributos concatenados usando la estructura ${ … } y separados por un salto de línea.
Se espera una salida similar a :
Nombre: Juan Pérez
DNI: 12345678A
Número de Cuenta: ES29817694284975090000
Saldo: 1000€
*/
    mostrarDatos : function () {
        console.log(`
        Nombre: ${this.nombre}
        DNI: ${this.dni}
        Número de Cuenta: ${this.numeroCuenta}
        Saldo: ${this.saldo}€`);
    },


/*

 	this.realizarIngreso = function(monto) { … }
Dentro del cuerpo se debe programar: una asignación de adición (+=) que simule un depósito en la cuenta con un valor pasado por parámetro denominado monto, que será sumado al saldo. Tenga en cuenta que el monto debe ser un número positivo.
Se debe sacar un mensaje por consola del estilo:
Ingreso realizado. Nuevo saldo: 1200€ 
*/
    realizarIngreso : function (monto){
        monto = sanearNumero(monto);
        if (monto === false || monto<0) {
            console.log(monto);
            console.log("Monto erroneo, debe ser positivo");
        } else {
            this.saldo += monto;
            console.log(`Ingreso realizado. Nuevo saldo: ${this.saldo}€ `);
        }
    },

/*
 	this.realizarRetiro = function(monto) { … }
Dentro del cuerpo se debe programar una asignación de resta (-=) para simular un retiro y un condicional que impida retirar dinero si el saldo es menor a la cantidad que se pretende extraer. Tenga en cuenta que el monto debe ser un número positivo.
Se debe sacar un mensaje por consola del estilo:
Retiro realizado. Nuevo saldo: 1150€
*/
    realizarRetiro : function (monto) {
        monto = sanearNumero(monto);
        if (monto === false || monto<0) {
            console.log("Monto erroneo, debe ser positivo");
        } else if (this.saldo < monto){
            console.log("La cantidad a retirar supera los fondos, no se puede realizar la operacion");
        } else {
            this.saldo -= monto;
            console.log(`Retiro realizado. Nuevo saldo: ${this.saldo}€ `);
        }
    },
/*
 	this.realizarTransferencia = function(cuentaDestino, monto)
Dentro del cuerpo se debe programar un algoritmo que realice una transferencia por el valor del parámetro monto al objeto cuenta que también se pasa por parámetro.
Recomendaciones: El monto debe ser positivo y menor que el saldo, debe utilizar el método anteriormente definido realizarIngreso(monto) para aplicarlo sobre el objeto cuenta al que se le desea hacer la transferencia.
*/
    realizarTransferencia : function (cuentaDestino, monto) {
        monto = sanearNumero(monto);
        if (monto === false || monto<0) {
            console.log("Monto erroneo, debe ser positivo");
        } else if (this.saldo < monto){
            console.log("La cantidad a transferir supera los fondos, no se puede realizar la operacion");
        } else {
            this.saldo -= monto;
            console.log(`Transferencia realizado a ${cuentaDestino.nombre}. Nuevo saldo: ${this.saldo}€ `);
        }
        cuentaDestino.realizarIngreso(monto);
    }
}
/*
Se debe sacar un mensaje por consola del estilo : 
Transferencia realizada. Nuevo saldo: 1050€
Instancie dos objetos para realizar pruebas, las salidas que se esperan deben ser similares a:
Nombre: Juan Pérez
DNI: 12345678A
Número de Cuenta: ES96437901235214400000
Saldo: 1000€
--------------------------------------------------------------
Nombre: Ana Gómez
DNI: 87654321B
Número de Cuenta: ES34618150159602370000
Saldo: 500€
Ingreso realizado. Nuevo saldo: 600€
Transferencia realizada. Nuevo saldo: 900€
--------------------------------------------------------------

Nombre: Juan Pérez
DNI: 12345678A
Número de Cuenta: ES96437901235214400000
Saldo: 900€
--------------------------------------------------------------
Nombre: Ana Gómez
DNI: 87654321B
Número de Cuenta: ES34618150159602370000
Saldo: 600€

 */

var saltoDeLinea = "--------------------------------------------------------------";

var cuentaJuan = Object.create(CuentaBancaria);
cuentaJuan.nombre = "Juan Pérez";
cuentaJuan.dni = "12345678A";
cuentaJuan.saldo = 1000;
cuentaJuan.mostrarDatos();
console.log(saltoDeLinea);

var cuentaAna = Object.create(CuentaBancaria);
cuentaAna.nombre = "Ana Gómez";
cuentaAna.dni = "87654321B";
cuentaAna.saldo = 500;
cuentaAna.mostrarDatos();
console.log(saltoDeLinea);


cuentaAna.realizarIngreso(100);
console.log(saltoDeLinea);

cuentaJuan.realizarTransferencia(cuentaAna,300.2);
console.log(saltoDeLinea);


cuentaJuan.mostrarDatos();
console.log(saltoDeLinea);

cuentaAna.mostrarDatos();

