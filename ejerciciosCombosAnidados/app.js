let paisesEuropa=["Seleccione País","España","Francia","Italia","Reino Unido","Alemania","Bélgica"];
let paisesAfrica=["Seleccione País","Marruecos","Nigeria","Zambia","Lesoto","Argelia","Somalia"];
let paisesAmerica=["Seleccione País","Canadá","Estados Unidos","México","Brasil","Argentina ","Chile"];
let paisesOceania=["Seleccione País","Australia","Nueva Zelanda","Tonga","Samoa","Islas Marshall ","Islas Salomón"];
let paisesAsia=["Seleccione País","China","Japón","Irán","Iraq","Afganistán","Paquistán"];

let continentes = [
    [],
    paisesEuropa,
    paisesAsia,
    paisesAfrica, 
    paisesAmerica,
    paisesOceania
];

let eleSelect_continentes;
let eleSelect_paises;


window.onload
{
    eleSelect_continentes = document.f1.continente;
    eleSelect_paises = document.f1.pais;
    eleSelect_paises.options[0].text= "Seleccione País";
}


function cambiarContinente (){
    let continente = eleSelect_continentes[eleSelect_continentes.selectedIndex].value;

    if (continente != 0){

        paisesSeleccionados =  continentes[continente];

        eleSelect_paises.length = paisesSeleccionados.length;

        for (let i = 0; i<paisesSeleccionados.length; i++){
            eleSelect_paises.options[i].value=paisesSeleccionados[i];
            eleSelect_paises.options[i].text = paisesSeleccionados[i]; 
        }

    }else{
        eleSelect_paises.length = 1;

        eleSelect_paises.options[0].text = "Seleccione País";
    }
    eleSelect_paises.options[0].selected = true;
    document.getElementById("mensaje").innerHTML = "";
}


function muestraMensaje (){
    let continenteSeleccionado = eleSelect_continentes[eleSelect_continentes.value].text;
    let paisSeleccionado = eleSelect_paises.value;

    if (paisSeleccionado != "Seleccione País"){
        elep = document.createElement("p");
        elep.innerHTML = "Ha seleccionado el continente <b>"+continenteSeleccionado+"</b> y el pais <b>"+paisSeleccionado+"</b>";
        document.getElementById("mensaje").appendChild (elep);
    }else{
        document.getElementById("mensaje").innerHTML = "";
    }


}