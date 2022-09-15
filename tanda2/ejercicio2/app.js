let ancho = screen.width
let altura = screen.height


let diagonal = Math.sqrt(Math.pow(ancho, 2) + Math.pow(altura, 2))

let elep = document.createElement("p");

elep.innerHTML = "La diagonal de esta pantalla es: "+ diagonal
document.body.appendChild(elep);