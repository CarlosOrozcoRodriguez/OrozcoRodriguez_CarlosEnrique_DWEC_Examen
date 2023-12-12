/**En el Directorio datos-estudiante deberá crear un script que pregunte su nombre, apellidos, su edad y el ciclo formativo que cursa. Los mostrará en la página web. Cada dato debe ser preguntado en una ventana emergente distinta y mostrarlo en una línea distinta, en el campo del ciclo deberá mostrar el texto por defecto “DAW”. */

"use strict";

//se introducen los datos pedidos a traves de prompt, el ciclo tiene el valor DAW por defecto
var nombre = prompt("¿Cuál es tu nombre?");
var apellidos = prompt("¿Cuales son tus apellidos?");
var edad = prompt("¿Cuantos años tienes?");
var cicloFormativo = prompt("¿Qué ciclo estas cursando?","DAW");


//Se escriben los datos en la página web, se añade la etiqueta br para incluir el salto de linea
//Aunque se podría insertar en un punto concreto de la web, como no se especifica, lo añado al final
const SALTODELINEA = "<br>";
document.writeln(nombre + SALTODELINEA);
document.writeln(apellidos + SALTODELINEA);
document.writeln(edad + SALTODELINEA);
document.writeln(cicloFormativo + SALTODELINEA);

