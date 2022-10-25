let ventana;

function abrirGoogle (){
   
    ventana.close();
    window.location.href = "https://www.google.es/";
    
}

function abrirVentana(){

    let altura = screen.height;
    let ancho = screen.width;

    let input = document.querySelector("#txtNombre");

    if (input.value != ""){
        ventana = window.open('','_blank','resizable=no','scrollbars=no','toolbar=no','location=no','status=no','width=300','height=300','top='+altura/4+'','left='+ancho/2);

        let elep = document.createElement("p");
        elep.innerHTML = "Bienvenido "+ input.value + "<br>";
        ventana.document.body.appendChild (elep);

        let eleBtn = document.createElement("input");
        eleBtn.type = "button";
        eleBtn.value ="Empezar a navegar";
        eleBtn.onclick = abrirGoogle;
          
        ventana.document.body.appendChild(eleBtn);

        
    }else{
        alert("Debes introducir un nombre");
    }
}