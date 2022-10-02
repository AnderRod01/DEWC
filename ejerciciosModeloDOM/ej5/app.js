let eleInputText_txtCalc;
let list_eleButton_numeros;

window.onload
{
    eleInputText_txtCalc = document.getElementById('txtCalc');
    list_eleButton_numeros = document.getElementsByTagName('input');

    prepareEvents();
}

function prepareEvents()
{
    for (let i =0; i<list_eleButton_numeros.length; i++){
        if(list_eleButton_numeros[i].type=="button"){
            console.log(list_eleButton_numeros[i].id);
            if(list_eleButton_numeros[i].id!="igual")
                list_eleButton_numeros[i].addEventListener("click", escribirNum);
            else
                list_eleButton_numeros[i].addEventListener("click",resolver);
        }
    }
}

function escribirNum (){
    let valor = this.value;
    if (valor == "C")
        eleInputText_txtCalc.value = "";
    else{
            let ultimoChar = eleInputText_txtCalc.value.substr(eleInputText_txtCalc.value.length -1);
            if (valor=='*' || valor=='/' || valor =='+' || valor =='-'){
                if(!(ultimoChar=='*' || ultimoChar=='/' || ultimoChar =='+' || ultimoChar =='-'))
                    eleInputText_txtCalc.value+= valor;
            }
            else
                eleInputText_txtCalc.value+= valor;

    }
}

function resolver(){
    let operacion=  eleInputText_txtCalc.value;
    let ultimoChar = eleInputText_txtCalc.value.substr(eleInputText_txtCalc.value.length -1);
    let primerChar = eleInputText_txtCalc.value.substr(0);

    if (ultimoChar=='*' || ultimoChar=='/' || ultimoChar =='+' || ultimoChar =='-'){
        operacion = operacion.substr(0, operacion.length-1);

    }
    if(operacion=="")
        operacion=0;
    if (primerChar=='*' || primerChar=='/' || primerChar =='+' || primerChar =='-'){
        if(operacion.length > 1)
            operacion = operacion.substr(1);
        else 
            operacion=0;
    }
    eleInputText_txtCalc.value = eval(operacion);
}