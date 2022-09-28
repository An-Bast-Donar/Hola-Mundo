/**
 * Javascript nace para darle dinamismo a las paginas.
 * Lenguaje interpretado.
 * Orientado a objetos.
 * Debilmente tipado.
 * Lenguaje dinamico.
 */

/**
 * NOTAS:
 * Siempre se puede buscar informacion mas detallada sobre como realizar ciertas operaciones o sobre funciones ya escritas en la web.
 */

/**
 * Imprimir en consola
 * Para abrir la consola hay que abrir la pagina html vinculada al archivo js en el navegador, y en el apartado inspecionar elemento abir la opcion consola
 */
console.log("HOLA MUNDO");

/**
 * Tipos de valores
 * La funcion typeof() me muestra el tipo de variable que le envio por parametro
 */
console.log("\nTIPOS DE VARIABLES");
console.log(typeof (40));
console.log(typeof(40.5));
console.log(typeof("Juan Rondon"));
console.log(typeof(true));
console.log(typeof(null));
console.log(typeof(undefined));
console.log(typeof([1, 2, 3]));
console.log(typeof ({ clase: "JavaScript" }));

/**
 * Variables, guardar valores en memoria
 * Las variables se declara y se inicializan
 * Se declaran con la variable var y se inicializan igualandolas a un valor, esto se puede hacer en diferentes lineas o en la misma
 * Ej: var variable; (declarada)
 *     variable = "valor"; (inicializada)
 */
console.log("\nDECLARACION E INICIALIZACION DE VARIABLES");
var numero = 40;
var flotante = 40.5;
var string = "Juan Rondon";
var booleano = true;
var elementos = ["Hola", 40, true];
var maps = { nombre: "Diego", edad: 30 };
console.log(numero);
console.log(flotante);
console.log(string);
console.log(booleano);
console.log(elementos); // Los elementos internos se llaman por la posicion que ocupen, Ej: elementos[1]
console.log(maps); // Los elementos internos se llaman por su palabra clave, Ej: maps.nombre
/**
 * Operadores:
 * + Suma
 * - Resta
 * '*' Multiplica
 * '/' Divide
 *  % Residuo, Ej: 12 % 5 retorna 2
 * '**' Exponente, Ej: 2 ** 3 retorna 8, ó 10 ** -1 retorna 0.1
 */


/**
 * Las funciones son conjuntos de sentencias que podemos usar para generar cierto comportamiento.
 * Tenemos dos tipo de funciones en js, function Declaration y function Expression o Anonimas.
 */
console.log("\nFUNCIONES");
// Funcion Declarativa
function funcion01() {
    return true; 
}
console.log(funcion01()); // Llamamos a la funcion e imprimimos su resultado

var funcion02 = function(a,b) {  // Funcion de Expresion o Anonima
    return a + b;
}
console.log(funcion02(1,1));

function saludarEstudiante(estudiante) {
    console.log(`Hola ${estudiante}`);  // Forma de concatenar variables
    console.log("Hola " + estudiante);
}
saludarEstudiante("Juan");

/**
 * El Scope es el alcance que tienen las variables, depende de donde las declaremos y las mandamos llamar si tendremos acceso a ellas o no.
 * Tenemos dos tipos de Scope, Scope Global y Scope Local.
 * Para diferenciar una variable local de una global, se cambia la palabra reservada var por let
 */

/**
 * Hoisting es cuando las declaraciones de variables y funciones se procesan antes de ejecutar cualquier código, apesar de haber sido escritas en desorden.
 */

/**
 * La palabra reservada const es para declarar constantes en el codigo, se cambia por la palabra reservada var
 */

/**
 * If(true){} else if(true){} else{}
 * Operadores:
 * == Compara el valor
 * === Compara el valor y el tipo
 * '!=' Compara si tienen diferente valor
 * '!==' Compara si tienen diferente valor y diferente tipo
 * > Mayor que
 * < Menor que
 * >= Mayor o igual que 
 * <= Menor o igual que
 * 
 * && And logico
 * || Or logico
 * '!' Not logico
 * 
 * Si entra a un if el programa no valida el elseif o el esle posterior
 */

/**
 * Operador ternario
 * Condicion ? si si : si no;
 */
console.log("\nOPERADOR TERNARIO");
var resultado = true ? true : false;
console.log(resultado);

/**
 * Switch compara con un === por esa razón los elementos tiene que ser idénticos
 * */
console.log("\nSWITCH");
var number = 1; 
var result; 
switch (number) {
    case 1: 
        result = "sí es uno";
        break;
    case 10: 
        result = "sí es diez";
        break;
    case 100:
        result = "sí es cien";
        break;
    default:   
        result = "no match"; 
}
console.log(result);

/**
 * Los loops (bucles), son manera rápida y sencilla de hacer algo (una tarea) repetidamente.
 */
var estudiantes = ['Maria', 'Sergio', 'Rosa', 'Daniel'];
function greetStudent(estudiante) {
    console.log(`Hola ${estudiante}`);
}
console.log("\nFOR COMUN");
for (let i = 0; i < estudiantes.length; i++) {
    greetStudent(estudiantes[i]);
}
console.log("\nFOR CADA ELEMENTO");
for (let estudiante of estudiantes) {
    greetStudent(estudiante);
}
console.log("\nWHILE");
while (estudiantes.length > 0) {   // Aquí la tarea se hará siempre y cuando sea true, cuando llegué a false, dejará de hacer la tarea
    let estudiante = estudiantes.shift();  // shift() es un método que saca un elemento del array de la posición 0 a la última, Pop() comienza de la última a la primera.
    greetStudent(estudiante);
}

/**
 * Un array es una estructura de datos, es un objeto tipo lista de alto nivel.
 * Los arrays son objetos de tipo lista cuyo prototipo tiene métodos para realizar operaciones de recorrido y mutación
 */
var frutas = []; // Array Literal Syntax 
var frutas = ["Manzana", "Platano", "Cereza", "Fresa"];
console.log("\nVALORES DEL ARRAY");
console.log(frutas, frutas.length, frutas[0]); 
// length es una propiedad del array para obtener su tamaño
// Accede (por índice) a un elemento del Array. Los arrays iician en "0" 

// Metodos para mutar arrays
// .push();
var masFrutas = frutas.push("Uvas"); // Añade ese item al final

// .pop();
var utlimo = frutas.pop(); // Elimina el ultimo elemento, tambien recibe el/los valores a eliminar que esten de ultimos

// unshift()
var nuevaLogitud = frutas.unshift("Uvas"); // Añade ese item al inicio 

// shift()
var borrarFruta = frutas.shift(); // Elimina el primer elemento, tambien recibe el/los valores a eliminar que esten de primeros

// .indexOf();
var posicion = frutas.indexOf("Platano"); // Da la posición de ese item

// Metodo Includes
var incluyeFruta = frutas.includes("Pera"); 

/**
 * Un objeto es una colección de propiedades, y una propiedad es una asociación de key (nombre, o clave) y valores.
 */
//
console.log("\nOBJETOS");
// Declarar e inicializar un objeto, el objeto tambien puede contener funciones en sus propiedades
var objecto = {}; // Object Literal Syntax 
var miAuto = {
    marca: "Toyota",  // key: value 
    modelo: "Corolla",
    annio: 2020,
    detallesDelAuto: function() {   // Metodo de un objeto (una función dentro de un objeto)
      return `Auto ${this.modelo} ${this.annio}`;
  }
};
console.log("auto", miAuto, miAuto.detallesDelAuto());

// Función constructora. como la plantilla para crear diferentes objetos con las mismas propiedades
function auto(marca, modelo, annio) {  // Creas una función con los parametros que va a recibir, 
    this.marca = marca;   // Utilizamos el "this" para asignar valores a las propiedades del objeto 
    this.modelo = modelo;
    this.annio = annio;
    this.detallesDelAuto = function() {
      return `Auto ${modelo} ${annio}`;
  }
}
var newAuto = new auto("Tesla", "Model 3", 2020);
console.log(newAuto, newAuto.detallesDelAuto());

/**
 * Arreglos de objetos
 */
console.log("\nARREGLO DE OBJETOS");
var articulos = [
    { nombre: 'Bici', costo: 3000 },
    { nombre: 'TV', costo: 2500 },
    { nombre: 'Libro', costo: 320 },
    { nombre: 'Celular', costo: 10000 },
    { nombre: 'laptop', costo: 20000 },
    { nombre: 'teclado', costo: 500 },
    { nombre: 'audifonos', costo: 1700 }
]
console.log(articulos);

// Metodo Filter  
/* Válida si es un true o false para poder meterlos al nuevo array, y éste método no modifica el array original */
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500  /* Menor o igual a 100 */ 
});
console.log(articulosFiltrados);

// Metodo Map 
/* Me regresa de todos los articulos el nombre de cada uno */
var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre  
});
console.log(nombreArticulos);

// Metodo Find
/* Con este método se valida un true o false para encontrar un elemento y si está lo regresa y si no, no pasa nada */
var encuentraArticulos = articulos.find(function(articulo){
    return articulo.nombre === 'laptop';
});
console.log(encuentraArticulos);

// Metodo forEach
/* Recorre cada articulo */
articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

// Metodo Some
/* Este método nos regresa un false o un true para validar si hay o no artículos que cumplan la validación */
var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});
console.log(articulosBaratos); 

// Metodo Every
/* Este método checa que todos los elementos en el array cumplan con la validación que ponemos, y al final nos regresa un true o un false */
var articulosBaratos = articulos.every(function(articulo){
    return articulo.costo <= 700;
});
console.log(articulosBaratos); 

// Metodo Reduce
/* Este método corre una función en cada elemento del array, para comenzar a sumar los costos de cada elemento. */
var costoTotal = articulos.reduce(function(totalActual, articulo){
    return articulo.costo + totalActual;
}, 0); // El 0 será la cantidad inicial con la que comenzará el totalActual
console.log(costoTotal);
