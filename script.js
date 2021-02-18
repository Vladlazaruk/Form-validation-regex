window.addEventListener('DOMContentLoaded', () =>{
    const form = document.querySelector('form');
    const inputs = document.querySelectorAll('input');
    
    function validateElem(elem){
        if(elem.name == 'username'){

        }
        if(elem.name == 'email'){
            
        }
        if(elem.name == 'password'){
            
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