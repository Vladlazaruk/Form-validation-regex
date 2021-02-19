window.addEventListener('DOMContentLoaded', () =>{
    const form = document.querySelector('form'),
          inputs = document.querySelectorAll('input'),
          checkbox = document.querySelector('.checkbox'),
          pass = form.querySelector('#password'),
          passConf = form.querySelector('#confirmPassword'),
          checkedImg = form.querySelector('.checked');
          regExpName = /^[a-z0-9_-]{6,16}$/,
          regExpEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
          regExpPassword = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/;
    let isItValidateName = false,
        isItValidateEmail = false,
        isItValidatePass  =false;
   
    
    function validateElem(elem){

        if(elem.name == 'username'){
            if(!regExpName.test(elem.value)){
                elem.nextElementSibling.textContent = 'Enter correct username';
                elem.style.border = '2px solid rgb(231, 20, 8)';
                elem.previousElementSibling.style.visibility = 'hidden';
                console.log(isItValidateName);
               if(elem.value == ''){
                    elem.nextElementSibling.textContent = 'Fill in the field';
                    elem.style.border = '2px solid rgb(231, 20, 8)';
                    elem.previousElementSibling.style.visibility = 'hidden';
                    console.log(isItValidateName);
                }
            } else{
                elem.nextElementSibling.textContent = '';
                elem.style.border = '2px solid rgb(0, 0, 0)';
                elem.previousElementSibling.style.visibility = 'visible';
                isItValidateName = true;
                console.log(isItValidateName);
               
            }
        }

        if(elem.name == 'email'){
            if(!regExpEmail.test(elem.value)){
                elem.nextElementSibling.textContent = 'Enter correct email';
                elem.style.border = '2px solid rgb(231, 20, 8)';
                elem.previousElementSibling.style.visibility = 'hidden';
                console.log(isItValidateEmail);
                if(elem.value == ''){
                    elem.nextElementSibling.textContent = 'Fill in the field';
                    elem.style.border = '2px solid rgb(231, 20, 8)';
                    elem.previousElementSibling.style.visibility = 'hidden';
                    console.log(isItValidateEmail);
                }   
            } else{
                elem.nextElementSibling.textContent = '';
                elem.style.border = '2px solid rgb(0, 0, 0)';
                elem.previousElementSibling.style.visibility = 'visible';
                isItValidateEmail = true;
                console.log(isItValidateEmail);
            }
        }
        
        if(elem.name == 'password'){
            if(!regExpPassword.test(elem.value)){
                elem.nextElementSibling.textContent = 'Enter correct password';
                elem.style.border = '2px solid rgb(231, 20, 8)';
                elem.previousElementSibling.style.visibility = 'hidden';
                console.log(isItValidatePass);
                if(elem.value == ''){
                  elem.nextElementSibling.textContent = 'Fill in the field';
                  elem.previousElementSibling.style.visibility = 'hidden';
                  console.log(isItValidatePass);
                }

            }else{
                elem.nextElementSibling.textContent = '';
                elem.style.border = '2px solid rgb(0, 0, 0)';
                elem.previousElementSibling.style.visibility = 'visible';
                console.log(isItValidatePass);
                }
           
        }

        if(elem.name == 'confirmPassword'){
            if(pass.value != passConf.value && passConf.value != ''){
                pass.nextElementSibling.textContent = 'Password mismatch';
                passConf.nextElementSibling.textContent = 'Password mismatch';
                elem.style.border = '2px solid rgb(231, 20, 8)';
                elem.previousElementSibling.style.visibility = 'hidden';
                console.log(isItValidatePass);
                
            } else {
                pass.nextElementSibling.textContent = '';
                passConf.nextElementSibling.textContent = '';
                pass.style.border = '2px solid rgb(0, 0, 0)';
                passConf.style.border = '2px solid rgb(0, 0, 0)';
                elem.previousElementSibling.style.visibility = 'visible';
                isItValidatePass = true;
                console.log(isItValidatePass);
              
            }
        }
    }

    function clearForm(elem){
        elem.previousElementSibling.style.visibility = 'hidden';
    }

    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            validateElem(input);
        });
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log(checkbox.checked);
        if(isItValidateName == true && isItValidateEmail == true && isItValidatePass  == true && checkbox.checked == true){
            alert('ok');
            form.reset();
            inputs.forEach(input =>{
                clearForm(input);
            });
        }
      
    });


});
