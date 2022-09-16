console.log('EXCERCISE 1: VARIABLES AND OPERATORS')

// Crear 2 variables numericas y utilizar el operador suma para guardar el valor de la suma de ambos
// en una 3er variable.

console.log('--Excercise 1.a');

var num1, num2, num3;

num1 = 2;
num2 = 3;

num3 = num1 + num2;

console.log(num3);

// Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable

console.log('--Excercise 1.b');

var string1, string2, string3 = '';

string1 = 'Hello';
string2 = 'World';

string3 = string3.concat(string1, string2);

console.log(string3);


// Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando el
// resultado de la suma en una 3er variable (utilizar length).


console.log('--Excercise 1.c');

var len;

len = string1.length + string2.length;

console.log(len)
