let ventanas = [];

function cerrarVentanas (){
    ventanas[this.id].close();
}


function abrirVentanas(){
    for (let i= 0; i<5; i++){
        if (ventanas[i] != null){
            ventanas[i].close();
        }
        ventanas[i] = window.open('','_blank','resizable=no','scrollbars=no','toolbar=no','location=no','status=no','width=300','height=300');

        let eleBtn = document.createElement("input");
        eleBtn.type = "button";
        eleBtn.value ="Cerrar";
        eleBtn.id = i;
        eleBtn.onclick = cerrarVentanas;
          
        ventanas[i].document.body.appendChild(eleBtn);

    }
    
}