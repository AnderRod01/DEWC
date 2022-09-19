function abrirVentana(){

    let altura = screen.height;
    let ancho = screen.width;


    window.open('https://www.google.es','_blank','width=300','height=300','menubar=yes','resizable=no','scrollbars=no','toolbar=no','location=no','status=no','top='+altura/4+'','left='+ancho/2).focus();
}