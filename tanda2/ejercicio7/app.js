let date = new Date();

let fecNacimiento = prompt("Introduce tu fecha de nacimiento  (aaaa/mm/dd)")

let arrFec = fecNacimiento.split('/');

dateNac = new Date(arrFec[0], arrFec[1], arrFec[2]);



let aniosDesde1970 = date-dateNac;


let edad=new Date(aniosDesde1970).getFullYear()-1970;

let elep  = document.createElement("p");
elep.innerHTML="Tienes " + edad + " años";
document.body.appendChild(elep);
