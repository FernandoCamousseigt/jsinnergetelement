/* var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var profesion = document.getElementById("profesion");
var salario = document.getElementById("salario");

nombre.innerHTML = prompt("Ingrese un nombre");
apellido.innerHTML = prompt("Ingrese un apellido");
profesion.innerHTML = prompt("Ingrese un profesion");
salario.innerHTML = prompt("Ingrese un salario"); */



/* var nombre = document.getElementById("nombre");
nombre.innerHTML = prompt("Ingrese un nombre"); */

//es lo mismo que:

//preguntar y guardar nombre
var p1 = prompt("Ingrese un nombre");
console.log(p1);

//reemplazar el contenido de idnombre en la tabla con p1
document.getElementById("nombre").innerHTML = p1;


