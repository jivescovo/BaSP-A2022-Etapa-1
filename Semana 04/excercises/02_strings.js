console.log('\nEXCERCISE 2: STRINGS');

// a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto 
// en mayúscula (utilizar toUpperCase).

console.log('--Excercise 2.a');

var string1 = 'helloworld';

string1 = string1.toUpperCase();

console.log(string1);

// b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres
// guardando el resultado en una nueva variable (utilizar substring).

console.log('\n--Excercise 2.b');

var string2;

string2 = string1.substring(0,5);

console.log(string2);

// c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres
// guardando el resultado en una nueva variable (utilizar substring).

console.log('\n--Excercise 2.c');

var string3;

string1 = 'helloworld';

string3 = string1.substring(7);

console.log(string3);

// d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula
// y las demás en minúscula. Guardar el resultado en una nueva variable 
// (utilizar substring, toUpperCase, toLowerCase y el operador +)

console.log('\n--Excercise 2.d');

var string4;

string1 = 'heLLowoRlD';

string2 = string1.substring(1);

string1 = string1.toUpperCase();

string2 = string2.toLowerCase();

string4 = string1.substring(0,1) + string2;

console.log(string4);

// e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del
// primer espacio en blanco y guardarla en una variable (utilizar indexOf).

console.log('\n--Excercise 2.e');

var pos;

string1 = 'Helloworld my name is Juan';

pos = string1.indexOf(' ');

console.log(pos);

// f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
// Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra
// de ambas palabras en mayúscula y las demás letras en minúscula 
// (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).

console.log('\n--Excercise 2.f');

var stringf = 'schOdrINger coMPlicaTed nabuCodoNosor', string1 = string2 = string3 = stringA = stringB = '';
var pos = prepos = 0;

pos = stringf.indexOf(' ');

prepos = pos;

string1 = stringf.substring(0, pos);

stringA = string1.substring(0,1);

stringB = string1.substring(1);

string1 = stringA.toUpperCase() + stringB.toLowerCase();

pos = stringf.indexOf(' ', pos + 1);

string2 = stringf.substring(prepos + 1, pos);

stringA = string2.substring(0,1);

stringB = string2.substring(1);

string2 = stringA.toUpperCase() + stringB.toLowerCase();

string3 = stringf.substring(pos + 1);

stringA = string3.substring(0,1);

stringB = string3.substring(1);

string3 = stringA.toUpperCase() + stringB.toLowerCase();

stringf = string1 + ' ' + string2 + ' ' + string3;

console.log(stringf);

