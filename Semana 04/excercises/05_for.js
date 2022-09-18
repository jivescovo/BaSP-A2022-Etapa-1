console.log('\nEXCERCISE 5: FOR');

// a. Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar
// una alerta utilizando cada una de las palabras.

console.log('--Excercise 5.a');

genArray = ['blue','dog','saturn','wave','earthquake'];

for(var i = 0; i < genArray.length; i++){
    alert(genArray[i]);
}

console.log('The answer is displayed in an alert on the web browser window');

// b. Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada 
// palabra modificada.

console.log('\n--Excercise 5.b');

for(var j = 0; j < genArray.length; j++){
    alert(genArray[j].substring(0,1).toUpperCase() + genArray[j].slice(1));
}

console.log('The answer is displayed in an alert on the web browser window');

// c. Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo
// con un bucle for para ir guardando cada palabra dentro de la variable sentence. 
// Al final mostrar una única alerta con la cadena completa.

console.log('\n--Excercise 5.c');

var sentence = '';

for(var k = 0; k < genArray.length; k++){
    sentence = sentence + genArray[k];
}

alert(sentence);

console.log('The answer is displayed in an alert on the web browser window');

// d. Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición, es decir
// que al final de la ejecución del bucle for debería haber 10 elementos dentro del array,
// desde el número 0 hasta al número 9. 
// Mostrar por la consola del navegador el array final (utilizar console.log).

console.log('\n--Excercise 5.d');

var emptyArray = [];

for(var h = 0; h < 10; h++){
    emptyArray[h] = h;
}

console.log(emptyArray);