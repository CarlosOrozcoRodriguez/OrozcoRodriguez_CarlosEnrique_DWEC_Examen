/**
 * Del directorio llamado poo-jason-api, ejecute el index.html en un navegador, en el campo de nombre de usuario, emplee su cuenta de GitHub para traer sus datos, los cuales podrá visualizarlos en la consola del navegador en formato JASON. 
Creará un fichero con el nombre DatosGitHub.js
Utilizará los datos y formará una cadena JASON con lo siguiente:
Login, id, email y public_repos.  
Esa información le servirá como parámetro de entrada para el constructor de una clase que denominará DatosGitHub, la información será asignada como atributos de la clase, recuerde que debe transformar la cadena a objeto JavaScript usando el método parse.
Defina un único método para la clase llamado datosRecibidos() el cual mostrará por consola la información de cada atributo en una cadena formateada y concatenada usando la estructura ${` … `}.
Instancie el objeto con el nombre: datosGitHubInstancia con la cadena JASON que recolectó.
Se espera la salida de tipo:
El Usuario de GitHub ______ tiene un id________ cuyo correo es ___________ y tiene ______ repositorios públicos.
Si al invocar el método datosRecibidos() algún dato venía null desde GitHub adiciónelo al objeto y ejecute de nuevo el método.
Utilice Node.js para ejecutar el programa, haga una captura de pantalla con el comando, péguela aquí e inclúyala al repositorio.

 */

//cadena JASON con lo siguiente:
//Login, id, email y public_repos.  
var cadenaJSON = '{"login": "CarlosOrozcoRodriguez", "id": 84403964, "email": null, "public_repos": 15}';
//esto seran los parametros de entrada de DatosGitHub
class DatosGitHub {
    login;
    id;
    email;
    public_repos;
    constructor (cadenaJSON) {
        let objetoJSON = JSON.parse(cadenaJSON); //se transforma la cadena a objeto JSON
        this.login = objetoJSON.login;
        this.id = objetoJSON.id;
        this.email = objetoJSON.email;
        this.public_repos = objetoJSON.public_repos;
    }
    datosRecibidos (){
        console.log(`El Usuario de GitHub ${this.login} tiene un id${this.id} cuyo correo es ${this.email} y tiene ${this.public_repos} repositorios públicos.`);
    }
}

var datosGitHub = new DatosGitHub(cadenaJSON);
datosGitHub.datosRecibidos();
datosGitHub.email="ceor.orozco@gmail.com"; //como el correo venia nulo, lo introducimos "a mano"
datosGitHub.datosRecibidos();