/**
 * Escriba el código necesario para modelar cada una de las clases en un único fichero que llamará Aulas.js, el método presentarMateriales() debe estar acorde al contexto de cada clase y sus atributos (es suficiente con mostrarlos por consola con la estructura ${` … `}).
Sobrescriba el método presentarMateriales() en cada una de las clases.
Para la clase Aula se espera que retorne: “Bienvenidos al aula 1, la cual tiene capacidad para 20 personas”.
Para la clase Musica: “Bienvenidos al aula de música número 2. Hoy presentaremos los materiales necesarios para la clase de saxofón, solamente tenemos 10 plazas”.
Para la clase Tecnologia: “Bienvenidos al aula de tecnología número 3. El día de hoy hemos comprador 20 ordenadores adicionales para aprender a programar, en total ahora tenemos 30 estudiantes de capacidad”.
Utilice Node.js para ejecutar el programa instanciando un objeto para cada clase, haga una captura de pantalla con el comando, péguela aquí e inclúyala al repositorio.
¿Cómo se llama la característica de la POO que permite sobrescribir los métodos en herencia? Para responder a esta pregunta haga un console.log al final del código.


 */

class Aula {
    numero;
    capacidad;
    constructor (numero, capacidad){
        this.numero = numero;
        this.capacidad = capacidad;
    }
    presentarMateriales() {
        console.log(`Bienvenidos al aula ${this.numero}, la cual tiene capacidad para ${this.capacidad} personas`);        
    }
}

class Musica extends Aula {
    instrumento;
    constructor (numero, capacidad, instrumento){
        super(numero, capacidad);
        this.instrumento = instrumento;
    }
    presentarMateriales(){
        console.log(`Bienvenidos al aula de música número ${this.numero}. Hoy presentaremos los materiales necesarios para la clase de ${this.instrumento}, solamente tenemos ${this.capacidad} plazas`);
    }
}

class Tecnologia extends Aula {
    cantidadOrdenadores;
    constructor (numero, capacidad, cantidadOrdenadores){
        super(numero, capacidad);
        this.cantidadOrdenadores = cantidadOrdenadores;
    }
    presentarMateriales () {
        console.log(`Bienvenidos al aula de tecnología número ${this.numero}. El día de hoy hemos comprador ${this.cantidadOrdenadores} ordenadores adicionales para aprender a programar, en total ahora tenemos ${this.capacidad} estudiantes de capacidad`);
    }
}

var aula = new Aula(1, 20);
aula.presentarMateriales();

var aulaDeTecnologia = new Tecnologia(3, 30, 20);
aulaDeTecnologia.presentarMateriales();

var aulaDeMusica = new Musica(2, 10, "Saxofon");
aulaDeMusica.presentarMateriales();

console.log("El metodo que permite cambiar las características heredadas de una clase padre a una clase hijo, se denomina polimorfismo");