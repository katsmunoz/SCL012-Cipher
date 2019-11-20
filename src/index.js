//Vincular variables: DOM con HTML
let newTxt = document.getElementById('txtMsge1');
let offsetNumber = document.getElementById('offset-number');
let msgCoded = document.getElementById('txtMsge2');

// Llamar función ENCODE
document.getElementById('crear').addEventListener('click', crear);

function crear () {
// ALERT si es que el usuario no ingresa offset o mensaje
    if (offsetNumber.value === "" || newTxt.value === "") {
        alert('Recuerda ingresar tu mensaje y la clave numérica para continuar.');
    } else {
    msgCoded.innerHTML = window.cipher.encode(offsetNumber.value, newTxt.value);
    }
}

// Llamar función DECODE
document.getElementById('revelar').addEventListener('click', revelar);

function revelar () {
    if (offsetNumber.value === "" || newTxt.value === "") {
        alert('Recuerda ingresar tu mensaje y la clave numérica para continuar.');
    } else {
    msgCoded.innerHTML = window.cipher.decode(offsetNumber.value, newTxt.value);
    }
}

//Llamar funcion LIMPIAR
document.getElementById('cleanBtn').addEventListener('click', limpiar);

function limpiar () {
    window.location.reload();
    
}