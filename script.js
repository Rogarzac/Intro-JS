//alert ("Hola mundo!"); comentario nomral

/*
Este 
es un
comentario
de 
varias 
llieas */

/* var frasco = "pastillas";
var frasco = "pasitas con chocolate";
var frasco = "shampoo";
console.log (frasco); */


/* 
Tipos de datos primitivos y no primitivos

string
number 
boolean
undefined
null
symbol
object (no es primitivo) */

// string es una cadena de texto, que siempre debe ir entre comillas simples o comillas dobles
var vaso = "leche";

//number 
var edad = 31;
//Boolean
var cuentasPremium = false;
//undefined es un tipo de dato que existe pero que no esta definido o inicializado
var proximaVisita= undefined;
//null es un valor que no tenemos pero que declaramos 
var asistenciaInvitado = null;

var edad = "31";
var peso = 66;

console.log(typeof(edad));

// typeof es una palabra reservada que nos ayuda a saber que tipo de dato tenemos
// var es una variable con alcance global (tiene mayor alcance)
// let es una variable con alcance local (solo se utiliza dentro de un bloque de código)
// const es una constante, es decir que es decir que su valor no cambia 



var pesoTexto = peso.toString();
console.log (pesoTexto, typeof(pesoTexto))
console.log(typeof(pesoTexto))


var edadNumero  = parseInt (edad);
console.log(edadNumero);
console.log(typeof(edadNumero));
