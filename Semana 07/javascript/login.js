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
        var j = f = n = l = L = c = 0;
        if (password.value.length >= 8) {            
            for (var i = 0; i < password.value.length; i++) {
                switch(true) {
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
            } if (f != 0) {
                fields[1] = 'passwordError';
                password.classList.add('fail');
                span[1].innerHTML = 'Password should not have spaces';
            } else if (L == 0 || l == 0) {
                fields[1] = 'passwordError';
                password.classList.add('fail');
                span[1].innerHTML = 'Password should have at least one uppercase and one lower case letter';
            } else if (n == 0) {
                fields[1] = 'passwordError';
                password.classList.add('fail');
                span[1].innerHTML = 'Password should have at least one number';
            } else if (j == 3) {
                fields[1] = '';
                password.classList.remove('fail');
                span[1].innerHTML = '';
            }

            
            // if (j < 3 || f != 0) {
            //     fields[1] = 'passwordError';
            //     password.classList.add('fail');
            //     span[1].innerHTML = 'Please input a valid password';
            // } else {
            //     fields[1] = '';
            //     password.classList.remove('fail');
            //     span[1].innerHTML = '';
            // }
        } else if (password.value != '') {
            fields[1] = 'passwordError';
            password.classList.add('fail');
            span[1].innerHTML = 'Password must have atleast 8 characters';
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
        // var error, failure = success = '';
        var error = '';
        var errorCount = 0;
        for (var i = 0; i < fields.length; i++) {
            switch(true) {
                case fields[i] === 'emailError':
                    error = document.getElementById('emailError');
                    errorCount++;
                    if (email.value == '') {
                        error.innerHTML = 'Please input an email address';
                        //failure = 'Email address missing\n'; //remplazar failure por un contador
                        
                        modalContent[i].innerHTML = 'Email address missing';
                        modalContent[i].classList.add('test');
                    }
                    else {  
                        // failure = 'Please input a valid email address\n';
                        modalContent[i].innerHTML = 'Please input a valid email address';
                        modalContent[i].classList.add('test');
                    }
                    break;
                case fields[i] === 'passwordError':
                    error = document.getElementById('passwordError');
                    errorCount++;
                    // var newSpan = document.createElement('p');
                    if (password.value == '') {
                        error.innerHTML = 'Please input a password';
                        //failure = failure + 'Password missing';
                        modalContent[i].innerHTML = 'Password missing';
                        modalContent[i].classList.add('test');
                        // newSpan.innerHTML = 'Password missing';
                        // document.getElementsByClassName('modal-body')[0].appendChild(newSpan);
                    }
                    else {
                        // failure = failure + 'Please input a valid password';
                        modalContent[i].innerHTML = 'Please input a valid password';
                        modalContent[i].classList.add('test');
                    }
                    break;
                default:
                    break;
            }
        }
        // if (failure != '') {
        if (errorCount != 0) {
            // alert(failure);
            // console.log(failure)
            console.log(modalContent.innerHTML)
            text.innerHTML = 'Failure: check input arguments';
            // modalContent.innerHTML = failure;
            modal.style.display = "flex";
        } else {
            // success = email.value + '\n' + password.value;
            // alert('Login Successful\n' + success);
            fetch('https://basp-m2022-api-rest-server.herokuapp.com/login?' + new URLSearchParams({
                email: email.value,
                password: password.value
            }))
            // fetch('https://basp-m2022-api-rest-server.herokuapp.com/login?' + 'email=' + email.value + '&password=' + password.value)
                .then((result) => {
                    if (result.status >= 400) {
                        result.json()
                            .then((res) => {
                                console.log(res)
                                // throw new Error (result.status + ' ' + result.statusText + '\n' + res.msg);
                                throw new Error (res.msg);
                            })
                            .catch((err) => {
                                // alert(err);
                                text.innerHTML = 'Response from server: ' + result.status + ' ' + result.statusText;
                                modalContent[0].innerHTML = err;
                                // modalContent[1].innerHTML = '';
                                modal.style.justifyContent = 'center';
                                modal.style.display = "flex";
                            })
                        // throw new Error (result.status + ' ' + result.statusText); 
                    } else {
                        result.json()
                            .then((res) => {
                                console.log(res)
                                // alert('Request successful\n' + 'Response from Server: ' + res.msg);
                                text.innerHTML = 'Response from server: ' + result.status + ' ' + result.statusText;
                                modalContent[0].innerHTML = res.msg;
                                // modalContent[1].innerHTML = '';
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
        that.innerHTML = '';
    }

}
