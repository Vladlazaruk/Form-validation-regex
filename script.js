window.addEventListener('DOMContentLoaded', () =>{
    const form = document.querySelector('form'),
          inputs = document.querySelectorAll('input'),
          regExpName = /^[a-z0-9_-]{6,16}$/,
          regExpEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
          regExpPassword = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/;

    
    function validateElem(elem){
        if(elem.name == 'username'){
            if(!regExpName.test(elem.value) && elem.value != ''){
                elem.nextElementSibling.textContent = 'Enter correct username';
                elem.style.border = '2px solid rgb(231, 20, 8)';
            } else{
                elem.nextElementSibling.textContent = '';
                elem.style.border = '2px solid rgb(0, 0, 0)';
            }
        }
        if(elem.name == 'email'){
            if(!regExpEmail.test(elem.value) && elem.value != ''){
                elem.nextElementSibling.textContent = 'Enter correct email';
                elem.style.border = '2px solid rgb(231, 20, 8)';
            } else{
                elem.nextElementSibling.textContent = '';
                elem.style.border = '2px solid rgb(0, 0, 0)';
            }
        }
        if(elem.name == 'password'){
            if(!regExpPassword.test(elem.value) && elem.value != ''){
                elem.nextElementSibling.textContent = 'Enter correct password';
                elem.style.border = '2px solid rgb(231, 20, 8)';
            } else{
                elem.nextElementSibling.textContent = '';
                elem.style.border = '2px solid rgb(0, 0, 0)';
            }
        }
        if(elem.name == 'confirmPassword'){
            
        }
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        inputs.forEach(input => {
            if(input.value == ''){
                console.log();
                input.nextElementSibling.textContent = 'Fill in the field';
            } else {
                input.nextElementSibling.textContent = '';
            }
        });
    });
    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            validateElem(input);
        });
    });
});