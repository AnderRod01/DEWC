let combo_provincia, combo_municipio, eleDiv_mensaje

window.onload = function(){
    combo_municipio = document.getElementById("municipio")
    combo_provincia = document.getElementById("provincia")
    eleDiv_mensaje = document.getElementById("mensaje")

    cargarProvincias()
    console.log(combo_provincia.options)
    combo_provincia.onchange = ()=> cargarMunicipios(combo_provincia.options[combo_provincia.selectedIndex].value)
    combo_municipio.onchange = mostrarMensaje
}

function cargarProvincias (){
    const properties = {
        url : "php/cargaProvinciasJSON.php"
    };

    let options = {
        method: "POST",
        headers: { "Content-type": "application/x-www-form-urlencoded; charset=UTF-8" },
        body : "tipo=provincia"
    };

    fetch(properties.url, options) // promise
    .then(data => data.json())
    .then(json => {
        console.log(json);
        combo_provincia.innerHTML = ''
        let provincia = document.createElement('option');
        provincia.value = "0"
        provincia.innerText = "- Elige Opcion -"
        combo_provincia.appendChild(provincia)
        for (const key in json) {

            let provincia = document.createElement('option');
            provincia.value = key
            provincia.innerText = json[key]
            combo_provincia.appendChild(provincia)
        }
    });
}


function cargarMunicipios(codigo_provincia){
    const properties = {
        url : "php/cargaMunicipiosJSON.php"
    };

    let options = {
        method: "POST",
        headers: { "Content-type": "application/x-www-form-urlencoded; charset=UTF-8" },
        body : "tipo=municipio&provincia=" + codigo_provincia
    };

    fetch(properties.url, options) // promise
    .then(data => data.json())
    .then(json => {
        console.log(json);
        combo_municipio.innerHTML = ''
        for (const key in json) {

            let municipio = document.createElement('option');
            municipio.value = key
            municipio.innerText = json[key]
            combo_municipio.appendChild(municipio)
        }
    });
}

function mostrarMensaje (){
    console.log(combo_municipio.options[combo_municipio.selectedIndex].text);

    let provincia = combo_provincia.options[combo_provincia.selectedIndex].text
    let municipio = combo_municipio.options[combo_municipio.selectedIndex].text

    eleDiv_mensaje.innerText = "Ha seleccionado la provincia "+ provincia + " y el municipio " + municipio+".";
}   