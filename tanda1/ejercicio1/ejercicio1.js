let nom = prompt("introduce nombre:");
let ap1= prompt("Introduce primer apellido:");
let ap2 = prompt("Introduce segundo apellido:");

let elep = document.createElement("p");
elep.innerHTML="Nombre: "+nom+"<br><br> Primer apelldo: "+ap1 + "<br><br> Segundo apellido: " + ap2;
document.body.appendChild(elep);

let eleStr = document.createElement("strong")
eleStr.innerHTML=nom + " " + ap1 + " " +ap2;

document.body.appendChild(eleStr);





