window.onload = function () {

    var span = document.querySelectorAll('#form span');
    var fields = [];
    for(var j = 0; j < span.length; j++){
        fields[j] = span[j].id;
    }
    console.log(fields)
    console.log(span)

    // Full name validation

    var fullName = document.getElementById('fullName');

    fullName.onblur = function () {
        if(fullName.value.length > 3){
            for(var i = 0; i < fullName.value.length; i++){
                if(!isNaN(fullName.value[i]) && fullName.value[i] != ' '){
                    fields[0] = 'fullnNameError';
                    fullName.classList.add('fail');
                    span[0].innerHTML = 'Name should not have numbers';
                    break;
                }
            }
            if(i == fullName.value.length){
                fields[0] = '';
                fullName.classList.remove('fail');
                span[0].innerHTML = '';
            }
        }
        else if(fullName.value != ''){
            fields[0] = 'fullNameError';
            fullName.classList.add('fail');
            span[0].innerHTML = 'Name should be at least 3 characters long';
        }
        else{
            fields[0] = 'fullNameError';
            fullName.classList.remove('fail');
            span[0].innerHTML = '';
        }
    }

    fullName.onfocus = function () {
        fullName.classList.remove('fail');
        span[0].innerHTML = '';
    }

    // Email validation

    var email = document.getElementById('email');
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

    email.onblur = function () {
        if (!emailExpression.test(email.value) && email.value != '') {
            fields[1] = 'emailError';
            email.classList.add('fail');
            span[1].innerHTML = 'Please input a valid email address';
        }
        else{
            fields[1] = '';
            span[1].innerHTML = '';
        }
    }

    email.onfocus = function () {
        email.classList.remove('fail');
        span[1].innerHTML = '';
    }

    // Contact Area Validation

    var humanResources = document.getElementById('humanResources');
    var systems = document.getElementById('systems');
    var marketing = document.getElementById('marketing');
    var selected;

    humanResources.onclick = function () {
        selected = humanResources.value;
        fields[2] = '';
    }

    systems.onclick = function () {
        selected = systems.value;
        fields[2] = '';
    }

    marketing.onclick = function() {
        selected = marketing.value;
        fields[2] = '';
    }

    // Message validation

    var message = document.getElementById('message');

    message.onblur = function () {
        if(message.value.length < 3){
            fields[3] = 'messageError';
            message.classList.add('fail');
            span[3].innerHTML = 'Message should be at least, 3 characters long';
        }
        else{
            fields[3] = '';
            message.classList.remove('fail');
            span[3].innerHTML = '';
        }
    }

    message.onclick = function () {
        message.classList.remove('fail');
        span[3].innerHTML = '';
    }

    // Get some information submit form event

    var button = document.getElementById('submit');
    
    button.onclick = function (e) {
        e.preventDefault();
        var error, failure = success = '';
        for(var i = 0; i < fields.length; i++){
            switch(true){
                case fields[i] === 'fullNameError':
                    error = document.getElementById('fullNameError');
                    if(fullName.value == ''){
                        error.innerHTML = 'Please input a name';
                        failure = 'Full name missing\n';
                    }
                    else{  
                        failure = 'Please input a valid name\n';
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
                case fields[i] === 'contactAreaError':
                    error = document.getElementById('contactAreaError');
                        error.innerHTML = 'Please select a contact area';
                        failure = failure + 'Contact area missing\n';
                    break;
                case fields[i] === 'messageError':
                    error = document.getElementById('messageError');
                    if(message.value == ''){
                        error.innerHTML = 'Please input a message';
                        failure = failure + 'Message missing\n';
                    }
                    else{
                        failure = failure + 'Please input a valid message\n';
                    }
                    break;
                default:
                    break;
            }
        }
        console.log(fields)
        if(failure != ''){
            alert(failure);
        }
        else{
            success = fullName.value + '\n' + email.value + '\n' + selected + '\n' + message.value;
            alert('Info request successful\n' + success);
        }
    }

}