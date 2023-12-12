/**
 * En el Directorio menu-hamburguesa tiene la estructura típica de una página web que al disminuir el tamaño de su pantalla se hace responsive y oculta el header para mostrar un menú hamburguesa alternativo.
Debe programar la funcionalidad en el archivo hamburguesa.js que realice lo siguiente:
Observe que el elemento imagen del icono de la hamburguesa tiene asignado en el media querie la clase hamburger, sobre este elemento se debe programar un evento (implementando la función callback en formato flecha) que al darle clic aplique la clase nav-links.active empleando el método toggle. Esto permitirá cada vez que se ejecute cambiar de estado la visibilidad del elemento HTML, es decir, si está visible pasa a oculto y si se encuentra oculto pasa a visible.
De esta manera se desplegará el menú alternativo en pantallas menores o iguales a 768 px.
El código debe tener además de lo anterior, una parte comentada donde se implemente la solución pero modificando la función callback como anónima y en notación declarativa con el identificador toggleNav()

 */

//hamburger, sobre este elemento se debe programar un evento
var logoConEvento = document.querySelector(".hamburger");
//el evento afectara a los enlaces de navegacion
var targetDelEvento = document.querySelector(".nav-links");
//evento con función callback en formato flecha
logoConEvento.addEventListener("click", ()=>{
    //al darle clic aplique la clase nav-links.active empleando el método toggle
    targetDelEvento.classList.toggle("active");
});

//con funcion anónima
// logoConEvento.addEventListener("click", function(){
//     //al darle clic aplique la clase nav-links.active empleando el método toggle
//     targetDelEvento.classList.toggle("active");
// });

// con función con nombre 
// logoConEvento.addEventListener("click", function toggleNav(){
//     //al darle clic aplique la clase nav-links.active empleando el método toggle
//     targetDelEvento.classList.toggle("active");
// });