
let date = new Date();

let milisegAntes = date.getTime();
let nombre = prompt("Introduce tu nombre");

date = new Date();
let milisegDespues = date.getTime();


let segTardados = ((milisegDespues - milisegAntes)/1000).toFixed(2);

let elep  = document.createElement("p");
elep.innerHTML="Ha tardado "+ segTardados + " segundos";
document.body.appendChild(elep);