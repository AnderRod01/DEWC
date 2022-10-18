let eleTxt_dni, eleTxt_nombre, eleTxt_fecha, eleTxt_email, eleTxt_paginaWeb
let eleNum_hijos
let elePwd_contr


window.onload = function () {
    eleTxt_dni = document.getElementById('txtDni')
    eleTxt_nombre = document.getElementById('txtNombre')
    eleTxt_fecha = document.getElementById('txtFecha')
    eleTxt_email = document.getElementById('txtEmail')
    eleTxt_paginaWeb = document.getElementById('txtWeb')

    eleNum_hijos = document.getElementById('numHijos')
    elePwd_contr = document.getElementById('pwd')

    prepareEvents();
}

function prepareEvents (){
    eleInputs = document.getElementsByTagName('input')
    for (i =0; i<eleInputs.length; i++){
        eleInputs[i].addEventListener("focusout", validar)
    }
}

function validar (){
    switch (this.id) {
        case 'txtDni':
            if (!(/^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/.test(this.value))){
                this.value= ""
                this.style= "border: 1px solid red; border-radius:3px;"
            }else
                this.style=""
            
            break
        case 'txtNombre':
            if (!(/^[a-zA-z]*$/.test(this.value))){
                this.value= ""
                this.style= "border: 1px solid red; border-radius:5px;"
            }else
                this.style=""
            
            break
        case 'txtFecha':
            if (!(/^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/.test(this.value))){
                this.value= ""
                this.style= "border: 1px solid red; border-radius:5px;"
            }else
                this.style=""
            
            break
        case 'numHijos':
            if (this.value <0 || this.value >10){
                this.value= ""
                this.style= "border: 1px solid red; border-radius:5px;"
            }else
                this.style=""
            
            break
        case 'txtEmail':
            if (!(/^(.+\@.+\..+)$/.test(this.value))){
                this.value= ""
                this.style= "border: 1px solid red; border-radius:5px;"
            }else
                this.style=""
            
            break
        case 'txtWeb':
            if (!(/^(.+\..+\..+)$/.test(this.value))){
                this.value= ""
                this.style= "border: 1px solid red; border-radius:5px;"
            }else
                this.style=""
            break
        case 'pwd':
            if (!(/(^[0-9\s\+\-])+$/.test(this.value))){
                this.value= ""
                this.style= "border: 1px solid red; border-radius:5px;"
            }else
                this.style=""
            
            break;
        default:
            break;
    }
}