let eleSelect_asunto
let eleDiv_curso

window.onload
{
    eleSelect_asunto = document.getElementById('selAsunto')
    eleDiv_curso = document.getElementById('curso')


    mostrarCurso()
    eleSelect_asunto.addEventListener('change', mostrarCurso)
}

function mostrarCurso(){
    if (eleSelect_asunto.value == 'curso'){
        eleDiv_curso.style = "display: block;"
    }else{
        eleDiv_curso.style = "display: none;"
    }
}