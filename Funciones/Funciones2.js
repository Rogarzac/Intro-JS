// funciones 
///Programa para hacer limonada
//Funcion para exprimir
function exprimirLimones (cantidad){
    console.log("Exprimiendo " + cantidad + " limones.")
    let jugoExtraido = cantidad *10 //Considerando obtener 10 ml de jugo de limon
    console.log("se obtuvo " + jugoExtraido + "ml de jugo de limon.")
    return jugoExtraido; //return
}
/// funcion para mezclar el jugo de limon con agua y azucar
function mezclarJugoDeLimon ( cantidadDeJugo, cantidadDeAgua, cantidadDeAzucar){
console.log("mezclando " + cantidadDeJugo + "ml de jugo de limon " + cantidadDeAgua + "ml de agua y " + cantidadDeAzucar + "gramos de azucar.")
}
///funcion para servir la limonada 
function servirLimonada (){
    console.log ("Sirviendo la limonada en un vaso")
    vasoDeLimonada = true;
}

//Funcion principal que prepara mi Limonada 
function prepararLimonada (cantidad1){
    let jugoDeLimon = exprimirLimones (cantidad1);
    mezclarJugoDeLimon(jugoDeLimon, 200, 10);
    servirLimonada ();
}

///LLamamos a la funcion pprinciapl para preparar limonada
var vasoDeLimonada = false;
prepararLimonada (5);

////*Crear un programa donde verifiquemos un proceso dentro de nuestro consultorio dental.