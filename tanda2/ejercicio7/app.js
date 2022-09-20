let fecha = new Date();
let anio = 1990;
fecha = fecha.getTime();

let comienzo = new Date(anio,1,1).getTime();

let dias = (fecha-comienzo)/(1000*3600*24); 
let horas = (dias-Math.floor(dias)) * 24;
let min = (horas-Math.floor(horas)) * 60;  
let seg = Math.floor((min-Math.floor(min)) * 60); 



let elep=document.createElement("p");
elep.innerHTML="Desde el "+anio+" han pasado "+ Math.floor(dias)+"dias "+Math.floor(horas)+"h "+Math.floor(min)+"min "+seg+"s";
document.body.appendChild(elep);