let ventana

function abrirGoogle (){
    ventana.close;

    window.open('https://www.google.es/','_self','resizable=no','scrollbars=no','toolbar=no','location=no','status=no','width=300','height=300','top='+altura/4+'','left='+ancho/2)
}

function abrirVentana(){

    let altura = screen.height;
    let ancho = screen.width;

    let input = document.querySelector("#txtNombre");

    if (input.value != ""){
        ventana = window.open('','_blank','resizable=no','scrollbars=no','toolbar=no','location=no','status=no','width=300','height=300','top='+altura/4+'','left='+ancho/2);

        ventana.document.write ("<p>Bienvenido "+ input.value + "<br></p><input type='button' value='Empezar a navegar' onclick='abrirGoogle()'>")
    }else{
        alert("Debes introducir un nombre");
    }
}