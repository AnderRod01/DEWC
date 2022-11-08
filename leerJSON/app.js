const XHTTP = new XMLHttpRequest()

let elep_1, elep_2, elebtn

window.onload
{
    elep_1 = document.getElementById("1")
    elep_2 = document.getElementById("2")
    elebtn = document.getElementById("btn")

    prepareEvents()
}

function prepareEvents(){
    elebtn.addEventListener("click", cambiarNombre)
}

function cambiarNombre(){

    XHTTP.onload = function(){
        let json = JSON.parse(XHTTP.responseText)

        elep_1.innerHTML = json.nombre
        elep_2.innerHTML = json.apellido
    }

    XHTTP.open("GET", "cuento.JSON", true)
    XHTTP.send()
}