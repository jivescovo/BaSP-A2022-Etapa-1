window.onload = function () {
    var span = document.querySelectorAll('form > div > span');
    var fields = [];
    for(var j = 0; j < span.length; j++){
        fields[j] = span[j].id;
    }

    // Name validation

    var firstName = document.getElementById('name');

    firstName.onblur = function () {
        if(firstName.value.length > 3){
            for(var i = 0; i < firstName.value.length; i++){
                if(!isNaN(firstName.value[i]) && firstName.value[i] != ' '){
                    fields[0] = 'nameError';
                    firstName.classList.add('fail');
                    span[0].innerHTML = 'Name should not have numbers';
                    break;
                }
            }
            if(i == firstName.value.length){
                fields[0] = '';
                firstName.classList.remove('fail');
                span[0].innerHTML = '';
            }
        }
        else if(firstName.value != ''){
            fields[0] = 'nameError';
            firstName.classList.add('fail');
            span[0].innerHTML = 'Name should be at least 3 characters long';
        }
        else{
            fields[0] = 'nameError';
            firstName.classList.remove('fail');
            span[0].innerHTML = '';
        }
    }

    firstName.onfocus = function () {
        firstName.classList.remove('fail');
        span[0].innerHTML = '';
    }

    // Surname validation

    var surname = document.getElementById('surname');

    surname.onblur = function () {
        if(surname.value.length > 3){
            for(var i = 0; i < surname.value.length; i++){
                if(!isNaN(surname.value[i])){
                    fields[1] = 'surnameError';
                    surname.classList.add('fail');
                    span[1].innerHTML = 'Surname should not have numbers';
                    break;
                }
            }
            if(i == surname.value.length){
                fields[1] = '';
                surname.classList.remove('fail');
                span[1].innerHTML = '';
            }
        }
        else if(surname.value != ''){
            fields[1] = 'surnameError';
            surname.classList.add('fail');
            span[1].innerHTML = 'Surname should be at least 3 characters long';
        }
        else{
            fields[1] = 'surnameError';
            surname.classList.remove('fail');
            span[1].innerHTML = '';
        }
    }

    surname.onfocus = function () {
        surname.classList.remove('fail');
        span[1].innerHTML = '';
    }

    // DNI validation

    var dni = document.getElementById('dni');

    dni.onblur = function () {
        if(dni.value.length > 7){
            for(var i = 0; i < dni.value.length; i++){
                if(isNaN(dni.value[i])){
                    fields[2] = 'dniError';
                    dni.classList.add('fail');
                    span[2].innerHTML = 'DNI should only be composed of numbers';
                    break;
                }
            }
            if(i == dni.value.length){
                fields[2] = '';
                dni.classList.remove('fail');
                span[2].innerHTML = ''; 
            }
        }
        else if(dni.value != ''){
            fields[2] = 'dniError';
            dni.classList.add('fail');
            span[2].innerHTML = 'DNI shoud have more than 7 numbers';
        }
        else{
            fields[2] = 'dniError';
            dni.classList.remove('fail');
            span[2].innerHTML = '';
        }
    }

    dni.onfocus = function () {
        dni.classList.remove('fail');
        span[2].innerHTML = '';
    }

    // DOB validation

    var dob = document.getElementById('birthDate');

    dob.onblur = function () {
        if(dob.value === ''){
            fields[3] = 'birthDateError';
            dob.classList.add('fail');
            span[3].innerHTML = 'Make sure to input a date of birth';
        }
    }

    dob.onclick = function () {
        fields[3] = 'birthDteError';
        dob.classList.remove('fail');
        span[3].innerHTML = '';
    }

    // Phone number validation

    var phone = document.getElementById('phoneNumber');

    phone.onblur = function () {
        if(phone.value.length == 10){
            for(var i = 0; i < phone.value.length; i++){
                if(isNaN(phone.value[i])){
                    fields[4] = 'phoneError';
                    phone.classList.add('fail');
                    span[4].innerHTML = 'Phone number should only be composed of numbers';
                    break;
                }
            }
            if(i == phone.value.length){
                fields[4] = '';
                phone.classList.remove('fail');
                span[4].innerHTML = ''; 
            }
        }
        else if(phone.value != ''){
            fields[4] = 'phoneError';
            phone.classList.add('fail');
            span[4].innerHTML = 'Phone number should be 10 numbers in length';
        }
        else{
            fields[4] = 'phoneError';
            phone.classList.remove('fail');
            span[4].innerHTML = '';
        }
    }

    phone.onfocus = function () {
        phone.classList.remove('fail');
        span[4].innerHTML = '';
    }

    // Address validation

    var address = document.getElementById('address');

    address.onblur = function () {
        var v = 0;
        if(address.value.length >= 5){
            for(var i = 0; i < address.value.length; i++){
                if(address.value[i] == ' ' && address.value[i+1] == ''){
                    fields[5] = 'addressError';
                    address.classList.add('fail');
                    span[5].innerHTML = 'Address should have both text and a number';
                    break;
                }
                else if(address.value[i] == ' ' && !isNaN(address.value[i+1])){
                    v++;
                }
            }
            if(v == 1){
                fields[5] = '';
                address.classList.remove('fail');
                span[5].innerHTML = '';
            }
            else{
                fields[5] = 'addressError';
                address.classList.add('fail');
                span[5].innerHTML = 'Address should have both text and a number';
            }
        }
        else if(address.value != ''){
            fields[5] = 'addressError';
            address.classList.add('fail');
            span[5].innerHTML = 'Address should be at least 5 characters long';
        }
        else{
            fields[5] = 'addressError';
            address.classList.remove('fail');
            span[5].innerHTML = '';
        }
    }
    
    address.onfocus = function () {
        address.classList.remove('fail');
        span[5].innerHTML = '';
    }

    // Location validation

    var location = document.getElementById('location');

    location.onblur = function () {
        var v= 0;
        if(location.value.length > 3){
            for(var i = 0; i < location.value.length; i++){
                if(!isNaN(location.value[i]) && location.value[i] != ' '){
                    fields[6] = 'locationError';
                    location.classList.add('fail');
                    span[6].innerHTML = 'Location should not have numbers';
                    break;
                }
            }
            if(i != location.value.length){        
                fields[6] = 'locationError';
                location.classList.add('fail');
            }
            else{
                fields[6] = '';
                location.classList.remove('fail');
                span[6].innerHTML = '';
            }
        }
        else if(location.value != ''){
            fields[6] = 'locationError';
            location.classList.add('fail');
            span[6].innerHTML = 'Location should be more than 3 characters long';
        }
        else{
            fields[6] = 'locationError';
            location.classList.remove('fail');
            span[6].innerHTML = '';
        }
    }
    
    location.onfocus = function () {
        location.classList.remove('fail');
        span[6].innerHTML = '';
    }

    // Zip code validation

    var zipCode = document.getElementById('zipCode');

    zipCode.onblur = function () {
        if(4 <= zipCode.value.length && zipCode.value.length <= 5){
            for(var i = 0; i < zipCode.value.length; i++){
                if(isNaN(zipCode.value[i])){
                    fields[7] = 'zipCodeError';
                    zipCode.classList.add('fail');
                    span[7].innerHTML = 'Zip Code should only be composed of numbers';
                    break;
                }
            }
            if(i != zipCode.value.length){
                fields[7] = 'zipCodeError';
                zipCode.classList.add('fail');
                // span[7].innerHTML = 'zip fail'; 
            }
            else{
                fields[7] = '';
                zipCode.classList.remove('fail');
                span[7].innerHTML = ''; 
            }
        }
        else if(zipCode.value != ''){
            fields[7] = 'zipCodeError';
            zipCode.classList.add('fail');
            span[7].innerHTML = 'Zip Code should be between 4 and 5 numbers in length';
        }
        else{
            fields[7] = 'zipCodeError';
            zipCode.classList.remove('fail');
            span[7].innerHTML = '';
        }
    }

    zipCode.onfocus = function () {
        zipCode.classList.remove('fail');
        span[7].innerHTML = '';
    }

    // Email validation

    var email = document.getElementById('email');
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

    email.onblur = function () {
        if (!emailExpression.test(email.value) && email.value != '') {
            fields[8] = 'emailError';
            email.classList.add('fail');
            span[8].innerHTML = 'Please input a valid email address';
        }
        else{
            fields[8] = '';
            span[8].innerHTML = '';
        }
    }

    email.onfocus = function () {
        email.classList.remove('fail');
        span[8].innerHTML = '';
    }

    // Password validation

    var password = document.getElementById('password');
    password.onblur = function () {
        var j = f = n = l = L = c = 0;
        if(password.value.length >= 8){            
            for (var i = 0; i < password.value.length; i++){
                switch(true){
                    case password.value[i] === ' ':
                        password.classList.add('fail');
                        f++;
                        break;
                    case isNaN(password.value[i]) && password.value[i] == password.value[i].toUpperCase() && L == 0:
                        L++;
                        j++;
                        break;
                    case isNaN(password.value[i]) && password.value[i] == password.value[i].toLowerCase() && l == 0:
                        l++;
                        j++;
                        break;
                    case !isNaN(password.value[i]) &&  n == 0:
                        n++;
                        j++;
                        break;
                    default:
                        break;
                }
            }
            if(j < 3 || f != 0){
                fields[9] = 'passwordError';
                password.classList.add('fail');
                span[9].innerHTML = 'Please input a valid password';
            }
            else{
                fields[9] = '';
                password.classList.remove('fail');
                span[9].innerHTML = '';
            }
        }
        else if(password.value != ''){
            fields[9] = 'passwordError';
            password.classList.add('fail');
            span[9].innerHTML = 'Please input a valid password';
        }
    }

    password.onfocus = function () {
        password.classList.remove('fail');
        span[9].innerHTML = '';
    }

    // Repeat password validation

    var repeatPassword = document.getElementById('repeatPassword');

    repeatPassword.onblur = function () {
        if(repeatPassword.value != password.value && password.value != ''){
            fields[10] = 'passwordRepeatError';
            repeatPassword.classList.add('fail');
            span[10].innerHTML = 'Password does not match';
        }
        else{
            fields[10] = '';
            repeatPassword.classList.remove('fail');
            span[10].innerHTML = '';
        }
    }

    repeatPassword.onfocus = function () {
        repeatPassword.classList.remove('fail');
        span[10].innerHTML = '';
    }

    // Register form event

    var button = document.getElementById('create');
    
    button.onclick = function (e) {
        e.preventDefault();
        var error, failure = success = '';
        for(var i = 0; i < fields.length; i++){
            switch(true){
                case fields[i] === 'nameError':
                    error = document.getElementById('nameError');
                    if(firstName.value == ''){
                        error.innerHTML = 'Please input a name';
                        failure = 'Name missing\n';
                    }
                    else{
                        failure = 'Please input a valid name\n';
                    }
                    break;
                case fields[i] === 'surnameError':
                    error = document.getElementById('surnameError');
                    if(surname.value == ''){
                        error.innerHTML = 'Please input a surname';
                        failure = failure + 'Surname missing\n';
                    }
                    else{
                        failure = failure + 'Please input a valid surnaname\n';
                    }
                    break;
                case fields[i] === 'dniError':
                    error = document.getElementById('dniError');
                    if(dni.value == ''){
                        error.innerHTML = 'Please input a DNI';
                        failure = failure + 'DNi missing\n';
                    }
                    else{
                        failure = failure + 'Please input a valid DNI\n';
                    }
                    break;
                case fields[i] === 'birthDateError':
                    error = document.getElementById('birthDateError');
                    if(dob.value == ''){
                        error.innerHTML = 'Please input a Date of Birth';
                        failure = failure + 'Date of Birth missing\n';
                    }
                    break;
                case fields[i] === 'phoneError':
                    error = document.getElementById('phoneError');
                    if(phone.value == ''){
                        error.innerHTML = 'Please input a phone number';
                        failure = failure + 'Phone number missing\n';
                    }
                    else{
                        failure = failure + 'Please input a valid phone number\n';
                    }
                    break;
                case fields[i] === 'addressError':
                    error = document.getElementById('addressError');
                    if(address.value == ''){
                        error.innerHTML = 'Please input an address';
                        failure = failure + 'Address missing\n';
                    }
                    else{
                        failure = failure + 'Please input a valid address\n';
                    }
                    break;
                case fields[i] === 'locationError':
                    error = document.getElementById('locationError');
                    if(location.value == ''){
                        error.innerHTML = 'Please input a location';
                        failure = failure + 'Location missing\n';
                    }
                    else{
                        failure = failure + 'Please input a valid location\n';
                    }
                    break;
                case fields[i] === 'zipCodeError':
                    error = document.getElementById('zipCodeError');
                    if(zipCode.value == ''){
                        error.innerHTML = 'Please input a Zip Code';
                        failure = failure + 'Zip Code missing\n';
                    }
                    else{
                        failure = failure + 'Please input a valid Zip Code\n';
                    }
                    break;
                case fields[i] === 'emailError':
                    error = document.getElementById('emailError');
                    if(email.value == ''){
                        error.innerHTML = 'Please input an email';
                        failure = failure + 'Email missing\n';
                    }
                    else{
                        failure = failure + 'Please input a valid email\n';
                    }
                    break;
                case fields[i] === 'passwordError':
                    error = document.getElementById('passwordError');
                    if(password.value == ''){
                        error.innerHTML = 'Please input a password';
                        failure = failure + 'Password missing\n';
                    }
                    else{
                        failure = failure + 'Please input a valid password\n';
                    }
                    break;
                case fields[i] === 'passwordRepeatError':
                    error = document.getElementById('passwordRepeatError');
                    failure = failure + 'Please make sure passwords match\n';
                    break;
                default:
                    break;
            }
        }
        if(failure != ''){
            alert(failure);
        }
        else{
            success = firstName.value + '\n' + surname.value + '\n' + dni.value + '\n' + dob.value + '\n' 
            + phone.value + '\n' + address.value + '\n' + location.value + '\n' + zipCode.value + '\n' + email.value + '\n' 
            + password.value;
            alert('Account creation Successful\n' + success);
        }
    }
}