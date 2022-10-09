let eleInputText_txtCalc;
let list_eleButton_numeros;

let esRaiz = false;
let esInverso = false;
let porcentaje = false;

window.onload = function () {
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
    document.onkeydown = teclado;
}

function teclado(elEvento) {
    evento = elEvento || window.event;
    k = evento.key;
    
    
    if (k =="Enter"){
        resolver() //aunque lo resuelve por alguna razon no se ve el value del input:text, en el log se puede ver que si que se resuelve
        console.log(eleInputText_txtCalc.value)
    }else{
        let ultimoChar = eleInputText_txtCalc.value.substr(eleInputText_txtCalc.value.length -1);
        if (k=='*' || k=='/' || k =='+' || k =='-'){
            if(!(ultimoChar=='*' || ultimoChar=='/' || ultimoChar =='+' || ultimoChar =='-')){
                eleInputText_txtCalc.value += k 
            }
        }else{
            if (validarNum(k))
                eleInputText_txtCalc.value += k 
        }
    }
}

function validarNum(num){
    if (!isNaN(parseFloat(num))){
        return true;
    }
    return false
}

function escribirNum (){
    let valor = this.value;
    if (valor == "C"){
        eleInputText_txtCalc.value = "";
    }
    else if(valor=="CE"){

        let txt = eleInputText_txtCalc.value
        let i = 0
        while(!isNaN(parseFloat(txt[i])) || txt[i] == "."){
            i++
        }
        if (i!= txt.length)
            eleInputText_txtCalc.value = txt.substr(0, i+1)
        else
            eleInputText_txtCalc.value = ""
    
    }
    else if(valor=="Retr"){
        let txt = eleInputText_txtCalc.value
        eleInputText_txtCalc.value = txt.substr(0, txt.length -1)
    }
    else if(valor=="+/-"){
        let txt = eleInputText_txtCalc.value
        let i = 0
        while(!isNaN(parseFloat(txt[i])) || txt[i] == "." || txt[i] == "-"){
            i++
        }
        if (i!= txt.length){
            let num = txt.substr(i+1)
            eleInputText_txtCalc.value = txt.substr(0, i+1) + num*-1
        }
        else{
            eleInputText_txtCalc.value = txt*-1
        }
    }
    else if(valor=="%"){
        porcentaje = true
        resolver()
    }
    else if(valor=="1/x"){
        esInverso = true
        resolver()
    }
    else if(valor=="Raiz"){
        esRaiz = true
        resolver()
    }
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

    if (esRaiz){
        operacion = Math.sqrt(operacion)
        eleInputText_txtCalc.value = Function("return " + operacion)();
        esRaiz = false
    }
    else if (esInverso){
        operacion = "1/" + operacion
        eleInputText_txtCalc.value = Function ("return " + operacion)();
        esInverso = false
    }else if (porcentaje){
        operacion+= "/100"
        eleInputText_txtCalc.value = Function ("return " + operacion)();
        porcentaje = false
    }
        eleInputText_txtCalc.value = Function ("return " + operacion)();
}