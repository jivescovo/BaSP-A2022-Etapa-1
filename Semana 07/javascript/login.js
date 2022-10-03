window.onload = function () {

    var span = document.querySelectorAll('form > span');
    var fields = [];
    for (var j = 0; j < span.length; j++) {
        fields[j] = span[j].id;
    }

    // Email validation

    var email = document.getElementById('email');
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

    email.onblur = function () {
        if (!emailExpression.test(email.value) && email.value != '') {
            fields[0] = 'emailError';
            email.classList.add('fail');
            span[0].innerHTML = 'Please input a valid email address';
        } else {
            fields[0] = '';
            span[0].innerHTML = '';
        }
    }

    email.onfocus = function () {
        email.classList.remove('fail');
        span[0].innerHTML = '';
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
                fields[1] = 'passwordError';
                password.classList.add('fail');
                span[1].innerHTML = 'Password should not have spaces';
            }
            else if (upperCase == 0 || lowerCase == 0) {
                fields[1] = 'passwordError';
                password.classList.add('fail');
                span[1].innerHTML = 'Password should have at least one uppercase and one lower case letter';
            }
            else if (number == 0) {
                fields[1] = 'passwordError';
                password.classList.add('fail');
                span[1].innerHTML = 'Password should have at least one number';
            }
            else if (keyCharacter == 3) {
                fields[1] = '';
                password.classList.remove('fail');
                span[1].innerHTML = '';
            }
        }
        else if (password.value != '') {
            fields[1] = 'passwordError';
            password.classList.add('fail');
            span[1].innerHTML = 'Password must have atleast 8 chracters';
        }
    }
    password.onfocus = function () {
        password.classList.remove('fail');
        span[1].innerHTML = '';
    }

    // Login form event

    var button = document.getElementById('login');

    button.onclick = function (e) {
        e.preventDefault();
        var error = '';
        var errorCount = 0;
        for (var i = 0; i < fields.length; i++) {
            switch(true) {
                case fields[i] === 'emailError':
                    error = document.getElementById('emailError');
                    errorCount++;
                    if (email.value == '') {
                        error.innerHTML = 'Please input an email address';
                        modalContent[i].innerHTML = 'Email address missing';
                        modalContent[i].classList.add('add-margin');
                    }
                    else {
                        modalContent[i].innerHTML = 'Please input a valid email address';
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
                    }
                    else {
                        modalContent[i].innerHTML = 'Please input a valid password';
                        modalContent[i].classList.add('add-margin');
                    }
                    break;
                default:
                    break;
            }
        }
        if (errorCount != 0) {
            text.innerHTML = 'Failure: check input arguments';
            modal.style.display = "flex";
        } else {
            fetch('https://basp-m2022-api-rest-server.herokuapp.com/login?' + new URLSearchParams({
                email: email.value,
                password: password.value
            }))
                .then((result) => {
                    if (result.status >= 400) {
                        result.json()
                            .then((res) => {
                                throw new Error (res.msg);
                            })
                            .catch((err) => {
                                text.innerHTML = 'Response from server: ' + result.status + ' ' + result.statusText;
                                modalContent[0].classList.add('add-margin');
                                modalContent[0].innerHTML = err;
                                modal.style.justifyContent = 'center';
                                modal.style.display = "flex";
                            })
                    } else {
                        result.json()
                            .then((res) => {
                                text.innerHTML = 'Response from server: ' + result.status + ' ' + result.statusText;
                                modalContent[0].classList.add('add-margin');
                                modalContent[0].innerHTML = res.msg;
                                modal.style.justifyContent = 'center';
                                modal.style.display = "flex";
                            })
                    }
                })
                .catch(() => {
                    alert('Something went wrong with the fetch method');
                })
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
