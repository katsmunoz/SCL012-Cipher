//Vincular variables: DOM con HTML
let newTxt = document.getElementById('txtMsge1');
let offsetNumber = document.getElementById('offset-number');
let msgCoded = document.getElementById('txtMsge2');

// Llamar función ENCODE
document.getElementById('crear').addEventListener('click', crear);

function crear () {
    msgCoded.innerHTML = window.cipher.encode(offsetNumber.value, newTxt.value);
    
}

// Llamar función DECODE
document.getElementById('revelar').addEventListener('click', revelar);

function revelar () {
    msgCoded.innerHTML = window.cipher.decode(offsetNumber.value, newTxt.value);
    
}