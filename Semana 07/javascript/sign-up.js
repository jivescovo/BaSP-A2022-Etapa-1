window.onload = function () {
    var span = document.querySelectorAll('form > div > span');
    var fields = [];
    for (var j = 0; j < span.length; j++) {
        switch (true) {
            case localStorage.getItem('name') == null && j == 0:
                fields[j] = span[j].id;
                break;
            case localStorage.getItem('lastName') == null && j == 1:
                fields[j] = span[j].id;
                break;
            case localStorage.getItem('dni') == null && j == 2:
                fields[j] = span[j].id;
                break;
            case localStorage.getItem('dob') == null && j == 3:
                fields[j] = span[j].id;
                break;
            case localStorage.getItem('phone') == null && j == 4:
                fields[j] = span[j].id;
                break;
            case localStorage.getItem('address') == null && j == 5:
                fields[j] = span[j].id;
                break;
            case localStorage.getItem('city') == null && j == 6:
                fields[j] = span[j].id;
                break;
            case localStorage.getItem('zip') == null && j == 7:
                fields[j] = span[j].id;
                break;
            case localStorage.getItem('email') == null && j == 8:
                fields[j] = span[j].id;
                break;
            case localStorage.getItem('password') == null && j == 9:
                fields[j] = span[j].id;
                break;
            default:
                break;
        }
    }

    // Name validation

    var firstName = document.getElementById('name');

    firstName.onblur = function () {
        if (firstName.value.length > 3) {
            for (var i = 0; i < firstName.value.length; i++) {
                if (!isNaN(firstName.value[i]) && firstName.value[i] != ' ') {
                    fields[0] = 'nameError';
                    firstName.classList.add('fail');
                    span[0].innerHTML = 'Name should not have numbers';
                    break;
                }
            }
            if (i == firstName.value.length) {
                fields[0] = '';
                firstName.classList.remove('fail');
                span[0].innerHTML = '';
            }
        }
        else if (firstName.value != '') {
            fields[0] = 'nameError';
            firstName.classList.add('fail');
            span[0].innerHTML = 'Name should be at least 3 characters long';
        } else {
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
        if (surname.value.length > 3) {
            for (var i = 0; i < surname.value.length; i++) {
                if (!isNaN(surname.value[i])) {
                    fields[1] = 'surnameError';
                    surname.classList.add('fail');
                    span[1].innerHTML = 'Surname should not have numbers';
                    break;
                }
            }
            if (i == surname.value.length) {
                fields[1] = '';
                surname.classList.remove('fail');
                span[1].innerHTML = '';
            }
        }
        else if (surname.value != '') {
            fields[1] = 'surnameError';
            surname.classList.add('fail');
            span[1].innerHTML = 'Surname should be at least 3 characters long';
        } else {
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
        if (dni.value.length > 7) {
            for (var i = 0; i < dni.value.length; i++) {
                if (isNaN(dni.value[i])) {
                    fields[2] = 'dniError';
                    dni.classList.add('fail');
                    span[2].innerHTML = 'DNI should only be composed of numbers';
                    break;
                }
            }
            if (i == dni.value.length) {
                fields[2] = '';
                dni.classList.remove('fail');
                span[2].innerHTML = '';
            }
        }
        else if (dni.value != '') {
            fields[2] = 'dniError';
            dni.classList.add('fail');
            span[2].innerHTML = 'DNI shoud have more than 7 numbers';
        } else {
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
        if (dob.value === '') {
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
        if (phone.value.length == 10) {
            for (var i = 0; i < phone.value.length; i++) {
                if (isNaN(phone.value[i])) {
                    fields[4] = 'phoneError';
                    phone.classList.add('fail');
                    span[4].innerHTML = 'Phone number should only be composed of numbers';
                    break;
                }
            }
            if (i == phone.value.length) {
                fields[4] = '';
                phone.classList.remove('fail');
                span[4].innerHTML = '';
            }
        }
        else if (phone.value != '') {
            fields[4] = 'phoneError';
            phone.classList.add('fail');
            span[4].innerHTML = 'Phone number should be 10 numbers in length and contain only numbers';
        } else {
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
        var let = numb = space = 0;
        if (address.value.length >= 5) {
            for (var i = 0; i < address.value.length; i++) {
                if (isNaN(address.value[i]) && address.value[i] != ' ') {
                    let++;
                } else if (!isNaN(address.value[i]) && address.value[i] != ' ') {
                    numb++;
                } else {
                    space++;
                }
            }
            if (let >= 5 && numb != 0 && space >= 1) {
                fields[5] = '';
                address.classList.remove('fail');
                span[5].innerHTML = '';
            } else {
                fields[5] = 'addressError';
                address.classList.add('fail');
                span[5].innerHTML = 'Address should have both text and a number';
            }
        }
        else if (address.value != '') {
            fields[5] = 'addressError';
            address.classList.add('fail');
            span[5].innerHTML = 'Address should be at least 5 characters long';
        } else {
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
        if (location.value.length > 3) {
            for (var i = 0; i < location.value.length; i++) {
                if (isNaN(location.value[i]) && !isNaN(location.value[i+1]) && location.value[i+1] != ' ' ||
                !isNaN(location.value[i]) && location.value[i] != ' ' && isNaN(location.value[i+1])) {
                    fields[6] = 'locationError';
                    location.classList.add('fail');
                    span[6].innerHTML = 'Location should have spaces between letters and numbers';
                    break;
                }
            }
            if (i != location.value.length) {
                fields[6] = 'locationError';
                location.classList.add('fail');
            } else {
                fields[6] = '';
                location.classList.remove('fail');
                span[6].innerHTML = '';
            }
        }
        else if (location.value != '') {
            fields[6] = 'locationError';
            location.classList.add('fail');
            span[6].innerHTML = 'Location should be more than 3 characters long';
        } else {
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
        if (4 <= zipCode.value.length && zipCode.value.length <= 5) {
            for (var i = 0; i < zipCode.value.length; i++) {
                if (isNaN(zipCode.value[i])) {
                    fields[7] = 'zipCodeError';
                    zipCode.classList.add('fail');
                    span[7].innerHTML = 'Zip Code should only be composed of numbers';
                    break;
                }
            }
            if (i != zipCode.value.length) {
                fields[7] = 'zipCodeError';
                zipCode.classList.add('fail');
            } else {
                fields[7] = '';
                zipCode.classList.remove('fail');
                span[7].innerHTML = '';
            }
        }
        else if (zipCode.value != '') {
            fields[7] = 'zipCodeError';
            zipCode.classList.add('fail');
            span[7].innerHTML = 'Zip Code should be between 4 and 5 numbers in length';
        } else {
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
        } else {
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
        var keyCharacter = space = number = lowerCase = upperCase = c = 0;
        if (password.value.length >= 8) {
            for (var i = 0; i < password.value.length; i++) {
                switch(true) {
                    case password.value[i] === ' ':
                        password.classList.add('fail');
                        space++;
                        break;
                    case isNaN(password.value[i]) && password.value[i] == password.value[i].toUpperCase() && upperCase == 0:
                        upperCase++;
                        keyCharacter++;
                        break;
                    case isNaN(password.value[i]) && password.value[i] == password.value[i].toLowerCase() && lowerCase == 0:
                        lowerCase++;
                        keyCharacter++;
                        break;
                    case !isNaN(password.value[i]) &&  number == 0:
                        number++;
                        keyCharacter++;
                        break;
                    default:
                        break;
                }
            }
            if (space != 0) {
                fields[9] = 'passwordError';
                password.classList.add('fail');
                span[9].innerHTML = 'Password should not have spaces';
            }
            else if (upperCase == 0 || lowerCase == 0) {
                fields[9] = 'passwordError';
                password.classList.add('fail');
                span[9].innerHTML = 'Password should have at least one uppercase and one lower case letter';
            }
            else if (number == 0) {
                fields[9] = 'passwordError';
                password.classList.add('fail');
                span[9].innerHTML = 'Password should have at least one number';
            }
            else if (keyCharacter == 3) {
                fields[9] = '';
                password.classList.remove('fail');
                span[9].innerHTML = '';
            }
        }
        else if (password.value != '') {
            fields[9] = 'passwordError';
            password.classList.add('fail');
            span[9].innerHTML = 'Password must have atleast 8 chracters';
        }
    }
    password.onfocus = function () {
        password.classList.remove('fail');
        span[9].innerHTML = '';
    }

    // Repeat password validation

    var repeatPassword = document.getElementById('repeatPassword');

    repeatPassword.onblur = function () {
        if (repeatPassword.value != password.value && password.value != '') {
            fields[10] = 'passwordRepeatError';
            repeatPassword.classList.add('fail');
            span[10].innerHTML = 'Password does not match';
        } else {
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
        //var error, failure = success = '';
        var error = '';
        var errorCount = 0;
        for (var i = 0; i < fields.length; i++) {
            switch(true) {
                case fields[i] === 'nameError':
                    error = document.getElementById('nameError');
                    errorCount++;
                    if (firstName.value == '') {
                        error.innerHTML = 'Please input a name';
                        modalContent[i].innerHTML = 'Name missing';
                        modalContent[i].classList.add('add-margin');
                    } else {
                        modalContent[i].innerHTML = 'Please input a valid name';
                        modalContent[i].classList.add('add-margin');
                    }
                    break;
                case fields[i] === 'surnameError':
                    error = document.getElementById('surnameError');
                    errorCount++;
                    if (surname.value == '') {
                        error.innerHTML = 'Please input a surname';
                        modalContent[i].innerHTML = 'Surname missing';
                        modalContent[i].classList.add('add-margin');
                    } else {
                        modalContent[i].innerHTML = 'Please input a valid surname';
                        modalContent[i].classList.add('add-margin');
                    }
                    break;
                case fields[i] === 'dniError':
                    error = document.getElementById('dniError');
                    errorCount++;
                    if (dni.value == '') {
                        error.innerHTML = 'Please input a DNI';
                        modalContent[i].innerHTML = 'DNI missing';
                        modalContent[i].classList.add('add-margin');
                    } else {
                        modalContent[i].innerHTML = 'Please input a valid DNI';
                        modalContent[i].classList.add('add-margin');
                    }
                    break;
                case fields[i] === 'birthDateError':
                    error = document.getElementById('birthDateError');
                    errorCount++;
                    if (dob.value == '') {
                        error.innerHTML = 'Please input a Date of Birth';
                        modalContent[i].innerHTML = 'Date of Birth missing';
                        modalContent[i].classList.add('add-margin');
                    }
                    break;
                case fields[i] === 'phoneError':
                    error = document.getElementById('phoneError');
                    errorCount++;
                    if (phone.value == '') {
                        error.innerHTML = 'Please input a phone number';
                        modalContent[i].innerHTML = 'Phone number missing';
                        modalContent[i].classList.add('add-margin');
                    } else {
                        modalContent[i].innerHTML = 'Please input a valid phone number';
                        modalContent[i].classList.add('add-margin');
                    }
                    break;
                case fields[i] === 'addressError':
                    error = document.getElementById('addressError');
                    errorCount++;
                    if (address.value == '') {
                        error.innerHTML = 'Please input an address';
                        modalContent[i].innerHTML = 'Address missing';
                        modalContent[i].classList.add('add-margin');
                    } else {
                        modalContent[i].innerHTML = 'Please input a valid address';
                        modalContent[i].classList.add('add-margin');
                    }
                    break;
                case fields[i] === 'locationError':
                    error = document.getElementById('locationError');
                    errorCount++;
                    if (location.value == '') {
                        error.innerHTML = 'Please input a location';
                        modalContent[i].innerHTML = 'Loacation missing';
                        modalContent[i].classList.add('add-margin');
                    } else {
                        modalContent[i].innerHTML = 'Please input a valid location';
                        modalContent[i].classList.add('add-margin');
                    }
                    break;
                case fields[i] === 'zipCodeError':
                    error = document.getElementById('zipCodeError');
                    errorCount++;
                    if (zipCode.value == '') {
                        error.innerHTML = 'Please input a Zip Code';
                        modalContent[i].innerHTML = 'Zip Code missing';
                        modalContent[i].classList.add('add-margin');
                    } else {
                        modalContent[i].innerHTML = 'Please input a valid zip code';
                        modalContent[i].classList.add('add-margin');
                    }
                    break;
                case fields[i] === 'emailError':
                    error = document.getElementById('emailError');
                    errorCount++;
                    if (email.value == '') {
                        error.innerHTML = 'Please input an email';
                        modalContent[i].innerHTML = 'Email address missing';
                        modalContent[i].classList.add('add-margin');
                    } else {
                        modalContent[i].innerHTML = 'Please input a valid email';
                        modalContent[i].classList.add('add-margin');
                    }
                    break;
                case fields[i] === 'passwordError':
                    error = document.getElementById('passwordError');
                    errorCount++;
                    if (password.value == '') {
                        error.innerHTML = 'Please input a password';
                        modalContent[i].innerHTML = 'Password missing';
                        modalContent[i].classList.add('add-margin');
                    } else {
                        modalContent[i].innerHTML = 'Please input a valid password';
                        modalContent[i].classList.add('add-margin');
                    }
                    break;
                case fields[i] === 'passwordRepeatError':
                    error = document.getElementById('passwordRepeatError');
                    errorCount++;
                    modalContent[i].innerHTML = 'Please input a make sure passwords match';
                    modalContent[i].classList.add('add-margin');
                    break;
                default:
                    break;
            }
        }
        if (errorCount != 0) {
            text.innerHTML = 'Failure: check input arguments';
            modal.style.display = 'flex';
        } else {
            fetch('https://basp-m2022-api-rest-server.herokuapp.com/signup?' + new URLSearchParams({
                name: firstName.value,
                lastName: surname.value,
                dni: dni.value,
                dob: dob.value.substring(5,7) + '/' + dob.value.substring(8) + '/' + dob.value.substring(0,4),
                phone: phone.value,
                address: address.value,
                city: location.value,
                zip: zipCode.value,
                email: email.value,
                password: password.value
            }))
                .then((result) => {
                    if (result.status >= 400) {
                        result.json()
                            .then((res) => {
                                for (var i = 0; i < res.errors.length; i++) {
                                   modalContent[i].innerHTML = res.errors[i].msg;
                                   modalContent[i].classList.add('add-margin');
                                }
                                throw new Error (res.msg)
                            })
                            .catch((err) => {
                                text.innerHTML = 'Response from server: ' + result.status + ' ' + result.statusText;
                                modal.style.justifyContent = 'center';
                                modal.style.display = "flex";
                            })
                    }
                    else {
                        result.json()
                            .then((res) => {
                                var f = 0;
                                for (var prop in res.data) {
                                    localStorage.setItem(prop, res.data[prop]);
                                    modalContent[f].innerHTML = prop + ': ' + res.data[prop] + '\n';
                                    modalContent[f].classList.add('add-margin');
                                    f++;
                                }
                                text.innerHTML = 'Response from server: ' + result.status + ' ' + result.statusText;
                                modal.style.justifyContent = 'center';
                                modal.style.display = "flex";
                            })
                            .catch(() => {
                                alert('Something went wrong with the request');
                            })
                    }
                })
                .catch(() => {
                    alert('Something went wrong with the fetch method');
                })
        }
    }

    //Local storage data load

    firstName.value = localStorage.getItem('name');
    surname.value = localStorage.getItem('lastName');
    dni.value = localStorage.getItem('dni');
    dob.value = convertLsToInput(localStorage.getItem('dob'));
    phone.value = localStorage.getItem('phone');
    address.value = localStorage.getItem('address');
    location.value = localStorage.getItem('city');
    zipCode.value = localStorage.getItem('zip');
    email.value = localStorage.getItem('email');
    password.value = repeatPassword.value = localStorage.getItem('password');

    function convertLsToInput (date) {
        if (date === null) {
            return null;
        }
        else {
            date = date.substring(6) + '-' + date.substring(0,2) + '-' + date.substring(3,5);
            return date;
        }
    }

     // Modals

     var modal = document.getElementById("myModal");
     var modalContent = document.querySelectorAll('.modal-body > p');
     var cross = document.getElementsByClassName("close")[0];
     var text = document.getElementsByClassName("modal-text-span")[0];

     cross.onclick = function() {
         for (var i = 0; i < modalContent.length; i++) {
             clear(modalContent[i]);
         }
         modal.style.display = "none";
     }

     window.onclick = function(event) {

         if (event.target == modal) {
             for (var i = 0; i < modalContent.length; i++) {
                 clear(modalContent[i]);
             }
             modal.style.display = "none";
         }
     }

     function clear (that) {
        that.classList.remove('add-margin');
         that.innerHTML = '';
     }

}