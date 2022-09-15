let txt = prompt ("Introduzca una cadena de texto");

let elep = document.createElement("p");

elep.innerHTML = "La longitud de su cadena de texto es "+ txt.length
document.body.appendChild(elep);