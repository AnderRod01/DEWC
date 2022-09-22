function copiarTexto (){
    let cuadro1 = document.getElementById("cuadro1");
    let cuadro2 = document.getElementById("cuadro2"); 

    cuadro2.value = cuadro1.value;
    cuadro1.value = "";
}