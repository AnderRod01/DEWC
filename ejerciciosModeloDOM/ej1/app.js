
function contarEnlaces(){
    let enlaces = document.getElementsByTagName('a');

    elep= document.createElement("p");
    elep.innerHTML = enlaces.length;
    document.body.appendChild(elep);
}

function direccionPenultimoEnlace (){
    let enlaces = document.getElementsByTagName('a');

    elep= document.createElement("p");
    elep.innerHTML = enlaces[enlaces.length-2];
    document.body.appendChild(elep);
}

function enlacesAPrueba (){
    let enlaces = document.getElementsByTagName('a');

    let num = 0;
    for (let i=0; i< enlaces.length; i++){
        if (enlaces[i].href == "http://prueba/"){
            num++;
        }      
    }


    elep= document.createElement("p");
    elep.innerHTML = num;
    document.body.appendChild(elep);
}

function enlacesTercerParrafo(){
    let parrafos = document.getElementsByTagName('p');
    let enlaces = parrafos[2].getElementsByTagName('a');

    elep= document.createElement("p");
    elep.innerHTML = enlaces.length;
    document.body.appendChild(elep);
}

