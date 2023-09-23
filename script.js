let inputstring ='';
let buttons = document.querySelectorAll('.container-grid button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click',(e)=>{

        if(e.target.innerHTML == '='){
            inputstring = eval(inputstring);
            document.querySelector('.js-input').value = inputstring;
        }
        else if(e.target.innerHTML == 'C'){
            inputstring = '';
            document.querySelector('.js-input').value = inputstring;
        }
        else{
            console.log(e.target);
            inputstring = inputstring + e.target.innerHTML;
            document.querySelector('.js-input').value = inputstring;
        }
    })   
});