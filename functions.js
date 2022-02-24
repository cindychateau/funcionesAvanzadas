var divs = document.querySelectorAll('.div'); //querySelector(regresar el primer elemento) querySelectorAll (arreglo todos los elementos)
//console.log(divs);

var colores = ["red", "blue", "green", "black", "aqua", "white"];

// for(var i=0; i<divs.length; i++) {
//     divs[i].innerText = i;
//     divs[i].style.backgroundColor = colores[i];
// }

divs.forEach( function(x, i, arr){
    x.innerText = i;
    x.style.backgroundColor = colores[i];
})