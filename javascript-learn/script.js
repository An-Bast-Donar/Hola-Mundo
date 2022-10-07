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
 * ==================== Tipos de valores ====================
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
 * ==================== Variables, guardar valores en memoria ====================
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
 * ==================== Las funciones ====================
 * Son conjuntos de sentencias que podemos usar para generar cierto comportamiento.
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
 * ==================== El Scope ====================
 * Es el alcance que tienen las variables, depende de donde las declaremos y las mandamos llamar si tendremos acceso a ellas o no.
 * Tenemos dos tipos de Scope, Scope Global y Scope Local.
 * Para diferenciar una variable local de una global, se cambia la palabra reservada var por let
 */





/**
 * ==================== Hoisting ====================
 * Es cuando las declaraciones de variables y funciones se procesan antes de ejecutar cualquier código, apesar de haber sido escritas en desorden.
 */





/**
 * ==================== La palabra reservada const ====================
 * Es para declarar constantes en el codigo, se cambia por la palabra reservada var
 */





/**
 * ==================== Sentencia IF ====================
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
 * ==================== Operador ternario ====================
 * Condicion ? si si : si no;
 */
console.log("\nOPERADOR TERNARIO");
var resultado = true ? true : false;
console.log(resultado);





/**
 * ==================== Switch ====================
 * Compara con un === por esa razón los elementos tiene que ser idénticos
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
 * ==================== Los loops (bucles) ====================
 * Son manera rápida y sencilla de hacer algo (una tarea) repetidamente.
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
 * ==================== Array ====================
 * Es una estructura de datos, es un objeto tipo lista de alto nivel.
 * Los arrays son objetos de tipo lista cuyo prototipo tiene métodos para realizar operaciones de recorrido y mutación
 * Los Arrays tienen muchos metodos que nos ayudan a filtrar elementos y realizar mas acciones, se pueden buscar en el MDN
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

// Separa cada valor con el caracter en el parametro
console.log(frutas.join(" | "));

// Otra forma de arreglos con subindices diferentes a numeros
var jugadores = new Array();
jugadores["Cristiano Ronaldo"] = "Real Madrid";
jugadores["Messi"] = "Barcelona";
jugadores["Neymar"] = "PSG";
jugadores["Griezman"] = "Atlético de Madrid";
jugadores["Pogba"] = "Manchester United";
console.log(jugadores); 





/**
 * ==================== Objeto ====================
 * Es una colección de propiedades, y una propiedad es una asociación de key (nombre, o clave) y valores.
 */
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

// Un objeto puede contener objetos
var me = {
    name: {
        first: "Juan",
        last: "Rondon",
    },
    location: {
        neighborhood: "Provenza",
        city: "Bucaramanga",
        country: "Colombia",
    },
};
console.log(me.name.first);
console.log(me.location.city);





/**
 * ==================== Arreglos de objetos ====================
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

// Modificar un valor
articulos[2] = { nombre: 'Book', costo: 310 }
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
articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});
// Metodo for comun para recorrer cada articulo
for (let i = 0; i < articulos.length; i++) {
  console.log(articulos[i]);
}

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





/**
 * ==================== Atajos para uno a cada variables ====================
 */
console.log("\nATAJOS DE AGREGACION");
friendsAtYourParty = 0;
console.log(friendsAtYourParty);
friendsAtYourParty = friendsAtYourParty + 1;
console.log(friendsAtYourParty);
friendsAtYourParty += 1;
console.log(friendsAtYourParty);
friendsAtYourParty++;
console.log(friendsAtYourParty);
++friendsAtYourParty;
console.log(friendsAtYourParty);





/**
 * ==================== Ejemplo de concadenacion de caracteres una cantidad de veces limitada ====================
 */
console.log("\nEJEMPLO CONCADENACION CARACTERES");
const character = "🐩";
var word = ""; // start with an empty string
var timesToRepeat = 10;
for (let i = 0; i < timesToRepeat; i++) {
  word = word + character;
}
console.log(word);





/**
 * ==================== Funcion flecha ====================
 * ([param] [, param]) => { instrucciones }
 * param => expresión
 * 
 * Si no hay argumentos se tiene que indicar con (). Para un único argumento no son necesarios los parentesis.
 * Multiples instrucciones deben ser encerradas entre llaves. Una única expresión no necesita llaves. La expresión en si misma es el valor de retorno.
 */
console.log("\nFUNCION FLECHA");
function noFlechaSinArgumentos () {
  console.log("Esto es una funcion comun sin argumentos");
};
noFlechaSinArgumentos();
function noFlechaConArgumentos (arg01, arg02) {
  console.log(`Esto es una funcion comun con argumentos: ${arg01} ${arg02}`);
};
noFlechaConArgumentos('arg01', 'arg02');

funcionFlechaSinArgumentos01 = () => console.log("Esto es una funcion flecha sin argumentos y un unico valor de retorno");
funcionFlechaSinArgumentos01();

funcionFlechaSinArgumentos02 = () => 2 + 2;
console.log(`Esto es una funcion flecha sin argumentos y un unico valor de retorno: ${funcionFlechaSinArgumentos02()}`);
/**
 * Posibles casos:
 * Sin argumentos, una expresion: () => {exprecion} ó () => exprecion
 * Sin argumentos, multiples expresiones (intrsucciones): () => {instrucciones}
 * Con un argumento, unica expresion: (param) => {exprecion} ó param => {exprecion} ó (param) => exprecion ó param => exprecion
 * Con un argumentos, instrucciones: (param) => {instrucciones} ó param => {instrucciones}
 * Con argumentos, unica expresion: (param, param) => {exprecion} ó (param, param) => exprecion
 * Con argumentos, insturcciones: (param, param) => {instrucciones}
 */





/**
 * ==================== Algunas funciones para modificar variables ====================
 */
console.log("\nMODIFICACION DE VARIABLES");

// Minuscula
var sentence = "ThIs HaS wEiRd CaSiNg On It";
var lowerCaseSentence = sentence.toLowerCase();
console.log(sentence);
console.log(lowerCaseSentence);

// Redondear
var number = 5.3;
var roundedNumber = Math.round(number);
console.log(number);
console.log(roundedNumber);

// Buscar una variable en un
var testStringOne = "The quick brown fox jumps over the lazy dog";
var testStringTwo = "Mirror, mirror on the wall, don't say it cause I know I'm cute";
var stringToLookFor = "cute";
console.log(testStringOne.includes(stringToLookFor));
console.log(testStringTwo.includes(stringToLookFor));

// want to know how many milliseconds have elapsed since Jan 1 1970?
console.log(Date.now());





/**
 * ==================== La palabra reservada this ====================
 * Hace referencia al contexto
 */
console.log("\nCONTEXTO");
console.log(this);





/**
 * ==================== DOM ====================
 * Significan Document Object Model, o lo que es lo mismo, la estructura del documento HTML.
 * Una página HTML está formada por múltiples etiquetas HTML, anidadas una dentro de otra, formando un árbol de etiquetas relacionadas entre sí, que se denomina árbol DOM.
 * 
 * document.getElementById(id): Regresa el elemento con ese id, no hace falta escribir el # del id en el argumento de la funcion
 * document.getElementsByClassName(nombreDeClase): Regresa una lista con los elementos con esa clase, no hace falta escribir el . de la clase en el argumento de la funcion
 * document.getElementsByTagName(nombreDeEtiqueta): Regresa una lista con los elementos que respondan a la etiqueta enviada como argumento a la funcion
 * document.querySelector(selectorCss): Regresa el primer elemento encontrado con el selector css, si se envia un id o una clase debe ponerse el # o el . tal cual como en css
 * document.querySelectorAll(selectorCss): Regresa una lista con todos los elementos encontrados, el argumento recibe el mismo valor que en document.querySelector(selectorCss)
 * 
 * Cada elemento tiene propiedades que apuntan a los elementos relacionados con él:
 * firstElementChild
 * lastElementChild
 * nextElementChild/nextElementSibling
 * previousElementChild/previousElementSibling
 * childNodes
 * childElementCount
 * 
 * innerHTML: inserta html en la etiqueta que ejecute la funcion
 * innerText: inserta solo texto en la etiqueta que ejecute la funcion
 * 
 * getAttribute(): Obtiene el valor del atributo que se le pase como parametro
 * setAttribute(,): Se le pasa como primer parametro el atributo a modificar y como segundo parametro el nuevo valor
 */
console.log("\nDOM");

// Insertar titulo
var titulo = document.querySelector('.titulo');
titulo.innerText = 'TITULO';

// Insertar texto
var label = document.querySelector('.label');
label.innerText = 'Ingresa valor: ';

// Insertar placeholder
var input = document.querySelector('#input');
input.setAttribute('placeholder', 'Escribe aca');

// Cambiar color del estilo
var redSquare = document.querySelector(".red-square");
redSquare.style.backgroundColor = "limegreen";

// Cambiar texto de los items de los elementos
var elementsToChange = document.querySelectorAll(".js-target");
for (let i = 0; i < elementsToChange.length; i++) {
  let currentElement = elementsToChange[i];
  currentElement.innerText = "Modified by JavaScript!";
}

// Ejecutar alerta al oprimir el boton
var button = document.querySelector(".event-button");
button.addEventListener("click", function () {
  alert("Hey there!");
});

// Cambiar texto segun lo que se escriba en el input
var input01 = document.querySelector(".input-to-copy");
var paragraph01 = document.querySelector(".p-to-copy-to");
input01.addEventListener("keyup", function () {
  paragraph01.innerText = input01.value;
});
/**
 * input01.addEventListener("keyup", btnKeyup);
 * function btnKeyup () {
 *  paragraph01.innerText = input01.value;
 * }
 * 
 * Si no se le agrega parentecis a una funcion significa que se debe mandar a ejecutar, no que se ejecute
 * Los formularios tambien tienen eventos como el SubmitEvent, que es cuando se envia el formulario
 */

// Cambiar color segun el que se escriba en el input
var input02 = document.querySelector(".color-input");
var paragraph02 = document.querySelector(".color-box");
input02.addEventListener("change", function () {
  paragraph02.style.backgroundColor = input02.value;
});

// Ejecutar alerta segun el boton que se oprima
document.querySelector(".button-container").addEventListener("click", function (event) {
        console.log(event);
        alert(`You clicked on button ${event.target.innerText}`);
});
/**
 * Al hacer click sobre un elemento html o sobre alguna parte de la pagina, se activa un evento
 * Ese evento es un objeto que contiene informacion sobre la accion ejecutada, cordenadas del click, etc.
 * 
 * document.querySelector(".button-container").addEventListener("click", btnConainer);
 * function btnConainer(event) {
 *  console.log(event);
 *  alert(`You clicked on button ${event.target.innerText}`);
 * }
 */

// Gestionar clases
var caja = document.getElementById('caja-color');
caja.classList.add('color-verde'); //Añade una clase a mi elemento
caja.classList.remove('color-verde'); //Remueve una clase de mi elemento
//caja.classList.toggle('color-verde'); //Dependiendo de si tiene la clase o no, se añade o se remueve
//caja.classList.contains('color-verde'); //Devuelve true o false dependiendo si tiene la clase por la que preguntamos

// Crear un elemento desde cero
var img = document.createElement('img');
var divimg = document.getElementById('crearimg');
img.setAttribute('src', 'img/coffee.png')
divimg.append(img);
img.style.width = '300px';
img.style.height = '300px';




/**
 * ==================== MATH ====================
 * Math es una biblioteca muy completa  de constantes y funciones matematicas
 * Puede consultarse atravez del MDN
 */
console.log("\nMATH");
console.log(Math.E);
console.log(Math.PI);





/**
 * ==================== DEBUGGER ====================
 * La palabra reservada debugger pausa la ejecucion en el navegador y en el apartado de inspecionar consola se puede visualizar el estado de la app
 * debugger;
 */





/**
 * ==================== LOCAL STORAGE ====================
 * Se pueden grabar solo string
 * Existen metoos para grabar objetos
 * Se puede visualizar desde el apartado de aplicacion -> localstore en inspeccionar
 * Si se intemta jalar un item del local storage que no existe, regresara null
 */
console.log("\nLOCAL STORAGE");
function guardar_localstorage() {
    let miname = "Juan";
    let persona = {
        nombre: "Fernando",
        edad: 31,
        correo: "xyz.xyz.com",
        coords: {
            lat: 10,
            lng: -10
        }
    };
    localStorage.setItem("nombre", miname);
    localStorage.setItem("persona", JSON.stringify(persona));
}
function obtener_localstorage() {
    let miname = localStorage.getItem("nombre");
    let persona = JSON.parse(localStorage.getItem("persona"));
    console.log(miname, persona,  localStorage.getItem("nombre") ? true : false)
}
guardar_localstorage();
obtener_localstorage();





/**
 * ==================== ECMASCRIPT ====================
 * 
 */ 