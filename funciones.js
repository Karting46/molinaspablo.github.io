const telefono = "342 5 065 360";
const email = "molinaspablo46@gmail.com";
var imprimir = print;

//Tres funciones que me muerstran los datos en el recuadro de la derecha de pie de pagina..

document.getElementById('telefono').onclick = function()
    {
        document.getElementById('infor').innerHTML = telefono;
    }

document.getElementById('email').onclick = function()
    {
        document.getElementById('infor').innerHTML = email;
    }

document.getElementById('imprimir').onclick = function()
    {
        window.print (imprimir);
    }

/**Acá iría la función para hacer scroll en forma vertical */

