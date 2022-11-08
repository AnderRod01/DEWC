let eleBtn_JSON, eleTable_Marcadores
const XHTTP = new XMLHttpRequest()

window.onload = function (){

    eleBtn_JSON = document.getElementById("btnJSON")
    eleTable_Marcadores = document.getElementById("tablaMarcadores")

    prepareEvents()
}

function prepareEvents(){
    eleBtn_JSON.addEventListener("click", cargarTabla)
}

function cargarTabla(){

    XHTTP.open("GET", "marcadores.JSON", true)
    XHTTP.send()

    XHTTP.onreadystatechange = function (){
        if ((this.readyState == 4) && (this.status == 200 )){
            let json = JSON.parse(XHTTP.responseText)

            json.forEach(marcador => {
                tr = document.createElement("tr")
                tr.innerHTML = '<td>'+marcador.city+'</td><td>'+marcador.description+'</td><td>'+marcador.ranking+'</td>'
                eleTable_Marcadores.appendChild(tr)
            });

            eleBtn_JSON.disabled = true
        }
    }
}