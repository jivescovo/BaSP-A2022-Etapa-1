console.log('\nEXCERCISE 6: FUNCTIONS');

// a. Crear una función suma que reciba dos valores numéricos y retorne el resultado.
// Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha 
// variable en la consola del navegador.

console.log('--Excercise 6.a');

function sumNumbers (n1, n2) {
    return n1 + n2;
}

var num1 = 5, num2 = 15, res = 0;
res = sumNumbers(num1, num2);

console.log(res);

// b. A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número; 
// de no ser un número, mostrar una alerta aclarando que uno de los parámetros tiene error y 
// retornar el valor NaN como resultado.

console.log('\n--Excercise 6.b');

function sumNumbers (n1, n2) {
    if(typeof(n1) === 'number' && typeof(n2) === 'number'){
        return n1 + n2;
    }
    else{
        alert('One of the input arguments is not a number');
        return NaN;
    }
}

num1 = 5, num2 = 7;
res = sumNumbers(num1, num2);
console.log(res);

num1 = 5, num2 = 'j';
res = sumNumbers(num1, num2);
console.log(res);

// c. Aparte, crear una función validate Integer que reciba un número como parámetro y devuelva verdadero 
// si es un número entero.

console.log('\n--Excercise 6.c');

function validateInteger (num) {
    if(num % 1 === 0){
        return true;
    }
    else{
        return false;
    }
}

num1 = 5;
res = validateInteger(num1);
console.log(res);

num1 = 5.6;
res = validateInteger(num1);
console.log(res);


// d. A la función suma del ejercicio 6b) agregarle una llamada a la función del ejercicio 6c. y que valide que los
// números sean enteros. En caso que haya decimales mostrar un alerta con el error y retornar
// el número convertido a entero (redondeado).

console.log('\n--Excercise 6.d');

function sumNumbers (n1, n2) {
    if(typeof(n1) === 'number' && typeof(n2) === 'number'){
        if(validateInteger(n1)){
            if(validateInteger(n2)){
                return n1 + n2;
            }   
            else{
                alert('Second input argument is not an integer');
                return Math.round(n2);
            }
        }
        else{
            alert('First input argument is not an integer');
            return Math.round(n1);
        }
    }
    else{
        alert('One of the input arguments is not a number');
        return NaN;
    }
}

num1 = 5, num2 = 7;
res = sumNumbers(num1, num2);
console.log(res);

num1 = 'h', num2 = 7;
res = sumNumbers(num1, num2);
console.log(res);

num1 = 5.5, num2 = 7;
res = sumNumbers(num1, num2);
console.log(res);

num1 = 5, num2 = 1.7;
res = sumNumbers(num1, num2);
console.log(res);

// e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando
// que todo siga funcionando igual.

console.log('\n--Excercise 6.e');

function verifyInteger (n){
    if(validateInteger(n)){
        return n;
    }
    else{
        alert('Input argument is not an integer');
        return Math.round(n);
    }
}

function sumNumbers (a, b){
    if(typeof(a) === 'number' && typeof(b) === 'number'){
        a = verifyInteger(a);
        b  = verifyInteger(b);
        return a + b;
    }
    else{
        alert('One of the input arguments is not a number');
        return NaN;
    }
}

num1 = 5, num2 = 20;
res = sumNumbers(num1, num2);
console.log(res);

num1 = 'h', num2 = 7;
res = sumNumbers(num1, num2);
console.log(res);

num1 = 5.3, num2 = 7;
res = sumNumbers(num1, num2);
console.log(res);

num1 = 5, num2 = 9.7;
res = sumNumbers(num1, num2);
console.log(res);


