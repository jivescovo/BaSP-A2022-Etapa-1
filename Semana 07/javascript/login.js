window.onload = function () {

    var span = document.querySelectorAll('form > span');
    var fields = [];
    for(var j = 0; j < span.length; j++){
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
        }
        else{
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
                fields[1] = 'passwordError';
                password.classList.add('fail');
                span[1].innerHTML = 'Please input a valid password';
            }
            else{
                fields[1] = '';
                password.classList.remove('fail');
                span[1].innerHTML = '';
            }
        }
        else if(password.value != ''){
            fields[1] = 'passwordError';
            password.classList.add('fail');
            span[1].innerHTML = 'Please input a valid password';
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
        var error, failure = success = '';
        for(var i = 0; i < fields.length; i++){
            switch(true){
                case fields[i] === 'emailError':
                    error = document.getElementById('emailError');
                    if(email.value == ''){
                        error.innerHTML = 'Please input an email address';
                        failure = 'Email address missing\n';
                    }
                    else{  
                        failure = 'Please input a valid email address\n';
                    }
                    break;
                case fields[i] === 'passwordError':
                    error = document.getElementById('passwordError');
                    if(password.value == ''){
                        error.innerHTML = 'Please input a password';
                        failure = failure + 'Password missing';
                    }
                    else{
                        failure = failure + 'Please input a valid password';
                    }
                    break;
                default:
                    break;
            }
        }
        if(failure != ''){
            alert(failure);
        }
        else{
            // success = email.value + '\n' + password.value;
            // alert('Login Successful\n' + success);
            var resu;
            fetch('https://basp-m2022-api-rest-server.herokuapp.com/login?' + new URLSearchParams({
                email: email.value,
                password: password.value
            }))
            // fetch('https://basp-m2022-api-rest-server.herokuapp.com/login?' + 'email=' + email.value + '&password=' + password.value)
                .then((result) => {
                    if(result.status >= 400){
                        result.json()
                            .then((res) => {
                                throw new Error (result.status + ' ' + result.statusText + '\n' + res.msg);
                            })
                            .catch((err) => {
                                alert(err)
                            })
                        // throw new Error (result.status + ' ' + result.statusText); 
                    }else{
                        console.log(result)
                        result.json()
                            .then((res) => {
                                alert('Request successful\n' + 'Response from Server: ' + res.msg);
                            })
                    }
                })
                // .catch((err) => {
                //     alert(err);
                // })
        }
    }
}
