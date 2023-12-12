/**
 * En el Directorio if-op-logicos tiene la estructura básica de un HTML, deberá crear un fichero llamado script.js, enlazarlo al archivo HTML y crear el siguiente programa:
Escribirá una función llamada saludarSegunHora(), en ella deberá instanciar un objeto de la clase Date() que es un objeto predefinido de JavaScript, este objeto tiene un método llamado getHours() que devuelve la hora actual en formato numérico.
Deberá programar una serie de sentencias condicionales que saluden al usuario según sea la hora:  5 – 12 “buenos días”; 12 – 18 “buenas tardes” y lo demás “buenas noches”.
El saludo se debe escribir sobre el documento HTML utilizando JavaScript dentro de etiquetas de párrafo.

 */

function saludarSegunHora() {
    let fecha = new Date(); //instanciamos el objeto
    let horas = fecha.getHours(); //sacamos las horas
    // console.log(fecha);
    // console.log(horas);

    let documento = document; //apuntamos al DOM

    // de 5 a 12 buenos dias 
    if (horas >= 5 && horas <12) { //12 no inclusive
        documento.write("<p>buenos días</p>")    
    } else if (horas >= 12 && horas <18) { //hasta las 18 buenas tardes
        documento.write("<p>buenas tardes</p>")    
    } else { //y lo demas buenas noches
        documento.write("<p>buenas noches</p>")    
    }
}

saludarSegunHora(); //llamamos a la funcion, si no no saldrá nada por pantalla