let importe = 2000
let eleSel_marca
let list_eleRad_tipo
let eleSel_anio
let eleBtn_submit

let descuentoMarca =0
let descuentoAnio = 0
let descuentoTipo = 0

window.onload = function(){
    eleSel_marca = document.getElementById("marca")
    eleSel_anio = document.getElementById("anio")
    // list_eleRad_tipo = document.getElementsByName("tipo")
    list_eleRad_tipo = document.getElementsByClassName("form-check-input")
    
    
    eleBtn_submit = document.getElementsByTagName("button")[0];

    llenarAnio()

    prepareEvents()
}

function prepareEvents(){


    eleBtn_submit.addEventListener('click', calcular)
}

function cambiarDescuento(){
    console.log(document.getElementsByName("tipo").value);
    for(let i=0; i < list_eleRad_tipo.length; i++)
    {
        if(list_eleRad_tipo[i].checked)
        {
            if (list_eleRad_tipo[i].value == "basico"){
                descuentoTipo = 0.3
            }else{
                descuentoTipo = 0.5
            }
        }
    }

    

    switch (eleSel_marca.value){
        case 1:
            descuentoMarca = 0.15
            break
        case 2:
            descuentoMarca = 0.05
            break
        case 3:
            descuentoMarca = 0.35
            break
        default:
            descuentoMarca = 0
            break
    }

    descuentoAnio = eleSel_anio.value

    if (list_eleRad_tipo.value == "basico"){
        descuentoTipo = 0.3
    }else{
        descuentoTipo = 0.5
    }

    console.log(descuentoAnio)
    console.log(descuentoTipo)
    console.log(descuentoMarca)

}

function calcular (){
    cambiarDescuento()

}


function llenarAnio (){
    for (i=0, anio=new Date().getFullYear(); anio>=1990; i++, anio--){
        eleOption = document.createElement('option')
        eleOption.value = anio
        eleOption.text = anio
        eleSel_anio.appendChild(eleOption)
    }
}
