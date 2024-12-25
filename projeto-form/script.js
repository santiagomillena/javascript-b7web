let FormValidator = {
    handleSubmit:(event)=>{
        event.preventDefault();

         
    }
}

let form = document.querySelector('.validator');
form.addEventListener('submit', validator.handleSubmit);
