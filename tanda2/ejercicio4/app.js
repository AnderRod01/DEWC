let ancho = screen.width
let altura = screen.height

let txt = ""

let elep_screen = document.createElement("p");

elep_screen.innerHTML = "La resolución de la pantalla es "+ ancho + " x " + altura;
document.body.appendChild(elep_screen);

let navegador = navigator.appName;
let sistema = navigator.platform;
let version = navigator.appVersion;


let elep_navigator = document.createElement("p");
elep_navigator.innerHTML ="El nombre del navegador que usas es: "+navegador + "<br>"
    + "Usas el siguiente sistema operativo: " + sistema + "<br>"
    + "La version del navegador que usas es: " + version ;

document.body.appendChild(elep_navigator);

let elep_document = document.createElement("p");
elep_document.innerHTML ="La URL del documento es :" + document.baseURI;

document.body.appendChild(elep_document);


let elep_location = document.createElement("p");
elep_location.innerHTML ="El protocolo usado para acceder a esta pagina ha sido :" + location.protocol;

document.body.appendChild(elep_location);