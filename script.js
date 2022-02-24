var variable = 0; //Alcance local, el valor puede cambiar
const constante = "Constante"; //NO puede cambiar su valor -> Contraseña, APIKEY, E-mail
let let_var = 1; //Solo funciona en el bloque en el que se declara -> IF, FOR, WHILE, FOREACH


for(let i=0 ; i<5; i++) {
    //console.log(i);
}

//console.log(i);

for(var j=0; j<5; j++) {
    //console.log('Dentro '+j);
}

//console.log('Fuera: '+j);

function sumatoria(parametro1, parametro2) {
    return parametro1+parametro2;
}

//Funcion Flecha
var sumatoriaFlecha = (parametro1, parametro2) => parametro1+parametro2;

var helloWorld = nombre => console.log("Hello World "+nombre);

var sum = sumatoria(1, 2);
var sumF = sumatoriaFlecha(1, 2);

helloWorld("Cynthia");

var nums = [3, 2, 4, 6, 7];
for(var i=0; i<nums.length; i++) {
    //console.log(nums[i]);
}

nums.forEach(function (num, posicion, arreglo){ //Funcion anonima
   // console.log(num);
});

function imprime(num, posicion, arreglo) {
    console.log(num);
}

nums.forEach(imprime);
