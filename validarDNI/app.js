const LETRAS = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']

let eleInputText_num
let eleInputText_letra
let eleBtn_validar
let eleP_error

window.onload
{
    eleInputText_num = document.getElementById('txtNum')
    eleInputText_letra = document.getElementById('txtLetra')
    eleBtn_validar = document.getElementById('validar')
    eleP_error = document.createElement('p')
    eleBtn_validar.addEventListener('click', validar)
}

function validar(){
    if (eleInputText_letra.value.length != 1){
        eleP_error.innerHTML = "Debes introducir una LETRA"
        document.body.appendChild(eleP_error)
    }else{
        if (eleInputText_num.value.length != 8 && isNaN(parseFloat(eleInputText_num.value))){
            eleP_error.innerHTML ="El número de DNI debe tener 8 dígitos"
            document.body.appendChild(eleP_error)
        }else{
            let num = eleInputText_num.value
            let letra = LETRAS[num%23]
            
            if (letra == eleInputText_letra.value.toUpperCase()){
                eleP_error.innerHTML ="DNI VÁLIDO"
                document.body.appendChild(eleP_error)
            }else{
                eleP_error.innerHTML ="DNI NO VÁLIDO"
                document.body.appendChild(eleP_error)
            }
        }
    }
}
