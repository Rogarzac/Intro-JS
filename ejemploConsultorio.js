//String
var nombrePaciente = "Juan Alberto";
var nombreDoctor = "Dr. Alfonso Lopez Valdez";
var telefono = "83526577";

//number
var edadPaciente = 24;
var capacidadPacientesPorDoctor = 15;


//boolean
var requiereAcompanante = edadPaciente < 18;
var doctorDisponible = false;
//undefined
var telefonoOpcional;
var citaUrgente;

//null
var apellidosPaciente = null;
var correoElectronico = null;

//Stringtonumber y numbert to string
var edadPacienteCadena = edadPaciente.toString();
console.log (edadPacienteCadena);
console.log (typeof(edadPacienteCadena));
var telefonoNumerico = parseInt (telefono);
console.log (telefonoNumerico, typeof(telefonoNumerico));