let idDrop = document.getElementById('myDropdown')
let button1 = document.getElementById('button1')

function toggler(){
    idDrop.classList.toggle('display-block')
    button1.classList.toggle(button2)
}

button1.addEventListener('click', toggler)