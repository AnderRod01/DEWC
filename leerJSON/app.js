const XML_HTTP_REQ = new XMLHttpRequest()

let elep_1, elep_2, elebtn

window.onload
{
    elep_1 = document.getElementById("1")
    elep_2 = document.getElementById("2")
    elebtn = document.getElementsById("btn")

    prepareEvents()
}


function prepareEvents(){
    elebtn.addEventListener("click", cargarJSON)
    XML_HTTP_REQ.addEventListener("load", cambiarNombre)
}

function cargarJSON(){
    XML_HTTP_REQ.open("POST", "cuento.JSON", true)
    XML_HTTP_REQ.send()
}

function cambiarNombre(){
    let json = JSON.parse(XML_HTTP_REQ.responseText)

    elep_1.innerHTML = json.nombre
    elep_2.innerHTML = json.apellido
}