console.log('\nEXCERCISE 3: ARRAYS');

// a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
// "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).

console.log('--Excercise 3.a');

var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre',
'Octubre', 'Noviembre', 'Diciembre'];

console.log(meses[4], meses[10]);

// b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).

console.log('\n--Excercise 3.b');

meses = meses.sort();

console.log(meses);

// c. Agregar un elemento al principio y al final del array (utilizar unshift y push)

console.log('\n--Excercise 3.c');

meses.unshift('Hello');

meses.push('World');

console.log(meses);

// d. Quitar un elemento del principio y del final del array (utilizar shift y pop).

console.log('\n--Excercise 3.d');

meses.shift();

meses.pop();

console.log(meses);

// e. Invertir el orden del array (utilizar reverse).

console.log('\n--Excercise 3.e');

meses.reverse();

console.log(meses);

// f. Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join)

console.log('\n--Excercise 3.f');

console.log(meses.join('-'));

// g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice)

console.log('\n--Excercise 3.g');

meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre',
'Octubre', 'Noviembre', 'Diciembre'];

console.log(meses.slice(4, 11));

