/*tipos de variables*/

let namesAndSurnames = "Gonzalo Ponce";
var x = 10;
let precioProducto = 0;
var esMayorDeEdad = true;
let persona = ["Gonzalo", "Ponce", 28, true];
const PROGRAM_NAME = "APLICAION DE LOGICA DE PROGRAMACION";

var text = document.getElementById("textArea");
text.innerHTML = x;

/*Funciones
Las funciones son un bloque de codigo que tienen la responsabilidad de llevar a cabo una tarea en particular,
nos sirven para dividir nuestro codigo en partes mas pequeñas y manejables, ademas de que nos permiten reutilizar codigo
y evitar la repeticion de codigo innecesaria.
en algunos lenguajes tambien se conocen como metodos o procedimientos.
las funciones internamente hacen diferentes operaciones y pueden usar variables y constantes, pero tambien pueden recibir
parametros y devolver valores.
function myfunction (p1, p2) {
    //codigo a ejecutar
    return p1 + p2;
    la funcion returna la suma de p1 y p2
}
    al igual que las variables, las funciones toman sentido cuando las utilizamos, cuando las llamamos desde algun sitio
    como un boton o un evento.
*/

function changeVariable() {
    x = prompt("Ingrese un nuevo valor para x: ");
    text.innerHTML = x;
}

let operadoresMatematicos = 5 + 12 - 6 * 2 / 2 ** 3;

/*Operadores booleanos
and (&&)
or (||)
not (!)
*/

var edadPersona = 10;
var pesoPersona = 10;


function evaluarEdad() {
    edadPersona = parseInt(prompt("Ingrese su edad: "));
    if (edadPersona >= 18) {
        text.innerHTML = "Eres mayor de edad y aplicas al club deportivo";
        evaluarRequisitosMinimos();
    } else {
        text.innerHTML = "Eres menor de edad y no aplicas al club deportivo";
        return;
    }
}


/*Condicionales compuestos*/



function evaluarRequisitosMinimos() {
    pesoPersona = parseInt(prompt("Ingrese su peso en kg: "));
    if (edadPersona >= 18 && edadPersona <= 40 && pesoPersona >= 20) {
        alert("El candidato cumple con los requisitos y puede ser admitido al club deportivo");
        calcularCostoInscripcion();
        evaluarCategoria();
    } else {
        alert("No cumples con los requisitos minimos");
        return;
    }
    alert("Tu proceso de seleccion ha finalizado con exito");
}

//let nacional;
const PRECIO = 20;

function calcularCostoInscripcion() {
    let respuestaNacionalidad = prompt("Eres nacional? Responde si o no: ");
    if (respuestaNacionalidad.toLowerCase() == "si") {
        nacional = true;
    } else {
        nacional = false;
    }
    if ((nacional == true)) {
        let precioConDescuento = PRECIO - (PRECIO * 0.1);
        alert("El precio a pagar por ser nacional es: " + precioConDescuento);
    } else {
        alert("El precio a pagar por ser extranjero es: " + PRECIO);
    }
}


let estatura = 1.75;

function evaluarCategoria() {
    let estatura = parseFloat(prompt("Ingrese su estatura en metros: "));
    if (estatura >= 1.75) {
        alert("Eres alto y puedes continuar practicando basketball");
    } else {
        alert("Eres bajo y no eres apto para practicar basketball, debes practicar cualquier otro deporte");
    }
}

/*Funciones para programa calculadora*/

function sumar() {
    let num1 = parseFloat(prompt("Ingrese el primer número: "));
    let num2 = parseFloat(prompt("Ingrese el segundo número: "));
    let resultado = num1 + num2;
    //alert("El resultado de la suma es: " + resultado);
    text.innerHTML = "El resultado de la suma es: " + resultado;
}

function restar() {
    let num1 = parseFloat(prompt("Ingrese el primer número: "));
    let num2 = parseFloat(prompt("Ingrese el segundo número: "));
    let resultado = num1 - num2;
    text.innerHTML = "El resultado de la resta es: " + resultado;
}
function multiplicar() {
    let num1 = parseFloat(prompt("Ingrese el primer número: "));
    let num2 = parseFloat(prompt("Ingrese el segundo número: "));
    let resultado = num1 * num2;
    //alert("El resultado de la multiplicación es: " + resultado);
    text.innerHTML = "El resultado de la multiplicación es: " + resultado;
}
function dividir() {
    let num1 = parseFloat(prompt("Ingrese el primer número: "));
    let num2 = parseFloat(prompt("Ingrese el segundo número: "));
    if (num2 !== 0) {
        let resultado = num1 / num2;
        text.innerHTML = "El resultado de la división es: " + resultado;
    } else {
        text.innerHTML = "No se puede dividir entre cero.";
    }
}