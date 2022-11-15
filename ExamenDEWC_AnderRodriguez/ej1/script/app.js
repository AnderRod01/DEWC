let combo_nivel, combo_curso
let div_mensaje


window.onload = function(){
    combo_nivel = document.getElementById("nivel")
    combo_curso = document.getElementById("curso")
    div_mensaje = document.getElementById("mensaje")

    
    prepareEvents()
}

function prepareEvents() {
    combo_nivel.onchange = () => cargarCurso(combo_nivel.options[combo_nivel.selectedIndex].value)
    combo_curso.onchange = mostrarMensaje

}

function cargarCurso(nivel) {
    const properties = {
        url : "./curso.php"
    };

    let options = {
        method: "POST",
        headers: { "Content-type": "application/x-www-form-urlencoded; charset=UTF-8" },
        body : "elegido=" + nivel
    };
    fetch(properties.url, options)
    .then(data => data.text())
    .then(data => {
        
        combo_curso.innerHTML=""
        combo_curso.innerHTML = data

        div_mensaje.innerHTML = ''
        combo_curso.options[0].selected =true
    });
}

function mostrarMensaje (){
    let nivel = combo_nivel.options[combo_nivel.selectedIndex].text
    let curso = combo_curso.options[combo_curso.selectedIndex].text

    div_mensaje.innerHTML = "Estudias en <strong>" +nivel + "</strong> en <strong>" + curso +"</strong>"
}