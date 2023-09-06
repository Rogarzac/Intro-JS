//funciones
/*Una funcion es unbloque de codigo que realiza una tarea especifica cuando se le llama

Cada funcion de JS es un objeto que se llama funcion
*/

function saludar1 (){
    console.log ("hola mundo")
}
saludar1 ();

/** * Las funciones son simplemente objetos especiales con la capacidad adicional de ser invocados (llamados como funciones). Esto significa que puedes asignar funciones a variables, pasarlas como argumentos a otras funciones y devolver funciones desde otras funciones. Esto facilita la creación de funciones de orden superior, como funciones de devolución de llamada y funciones que generan otras funciones. */

/*
//Declarar funciones 
la palabra reservada function, que nos indica que estamos definiendo una funcion.

El nombre de la función, dependiendo de la accion a realizar.

Un par de parentesis () despues del nombre. puede contener parametros. En este caso no tenemos ninguno

Segundo es un juego de llaves {} para cerrar nuestro bloque de codigo.


Dependiendo de las intrucciones dentro del cuerpo de la funcion y del proposito de la misma, se determina si la funcion retorna un valor
*/

/*
Llamamos una funcion y le vamos a almacenar un resultado
*/

function suma (a,b){
    return a + b;
}
var resultado = suma (5,3);
console.log(resultado)

/*La función suma toma dos argumentos (a y b) y devuelve la suma de estos dos valores. Luego, llamamos a la función y almacenamos el resultado en la variable resultado. */

//Funcion que muestre un mensaje en la consola
function saludar (nombre){
    console.log("Hola, " + nombre + "!")
}
saludar("Roberto");


//Hoisting
/*Es fundamental en el entendimiento de la forma en que se ejecuta nuestro codigo de JS, esto aplica tanto para variables como para funciones. Como tal, la traduccion de hosting es elevación, a partir de aquí su entendimiento es mucho mas intuitivo, lo que hace a grandes rasgos es "elevar" las funciones y variables declaradas dentro del código.
Yo puedo invocar una funcion antes de siquiera declararla  
*/

console.log(miVariable); // no da error pero imprime undefined
var miVariable =10;
// Scope = alacance, hace referencia al alcance de una variable en nuestro codigo JS.
/*
Global: quiere decir que se puede utilizar o trabjar con una variable dentro de cualquier parte del codigo

var: no es tan recomendado,por el comportamiento de la variable y la poca adaptabilidad.
let: es preferible e incluso mas segura de utilizar  porque ademas de funcionar de manera global, tambien puede ser utilizada de anera local.
const: esto quiere decir que su valor no puede ser reasignado
*/
// Variable Local 
function funcionVariableLocal (){
var mensaje = "esta es una variable local";
console.log(mensaje);}

funcionVariableLocal ();
/* * En este ejemplo, la variable mensaje se declara dentro de la función funcionConVariableLocal. Es una variable local porque solo es accesible dentro del ámbito de esa función. Si intentamos acceder a ella fuera de la función, obtendremos un error. */

//Variable Global
var mensajeGlobal ="Esta es una variable global"
function funcionConVariableGlobal (){
    console.log(mensajeGlobal);
}
funcionConVariableGlobal();

//funciones anonimas //////////////////////////

/* 
Estas funciones pueden ser declaradas sin un nombre y luego asignadas a variables o pasarse como parametros en otras funciones.
la diferencia princial de estas funciones es que se declaran sin un nombre
*/
 
const saludo = function (){
    console.log ("Hola vida")
}

saludo();

//Funciones Flecha//
/* 
 Una forma mas concisa de definir dunciones anonima. Se le llama flecha debido a su sintaxis que utiliza (=>)
 Basicamente, se tratara de remplazar la palabra function y añadir => antes de abrir nuestra llaves
*/

const resta =(a,b) => a - b;
//Esta funcion (flecha) es una forma más corta de la siguiente funcion;
// const resta = function (a,b){
// return a - b;}
console.log(resta(5,3));
