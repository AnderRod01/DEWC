let eleBtn_pedirDatos
let div_info


window.onload = function(){
    eleBtn_pedirDatos = document.getElementById("btnDatos")
    div_info = document.getElementById("informacion")

    prepareEvents()
}

function prepareEvents (){
    eleBtn_pedirDatos.onclick = cargarFichero 
}

function cargarFichero(){
    div_info.innerHTML = "<img src='images/cargando.gif'>"


    const properties = {
        url : "cargar.php"
    };

    let options = {
        method: "POST",
        headers: { "Content-type": "application/x-www-form-urlencoded; charset=UTF-8" },
    };

    fetch(properties.url, options)
    .then(data => data.text())
    .then(data => {
        if (data.search("CARGADOS") != -1){
            div_info.innerHTML = data
        }
        else{
            setTimeout(() => {  div_info.innerHTML = "<p>NO SE HAN PODIDO CARGAR LOS DATOS</p>" }, 5000);
        }
    })
}