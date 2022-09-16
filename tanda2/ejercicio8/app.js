
let cadena = "¡Hola!";

let txt = "<td>Contenido</td>";

for (let i=0; i< cadena.length; i++){
    txt += "<td>" + cadena.substring(i, i+1) + "</td>";
}
let padre = document.getElementById("prueba")
let eletl  = document.createElement("tr");
eletl.innerHTML=txt;
padre.appendChild(eletl);

