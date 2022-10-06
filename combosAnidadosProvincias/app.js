let provincias = new Array("Araba", "Bizkaia", "Gipuzkoa", "Nafarroa", "Lapurdi", "Zuberoa", "Nafarroa Beherea")

let municipios_1 = new Array("Seleccione Municipio", "Vitoria-Gasteiz", "Amurrio", "El Ciego", "La Guardia");
let municipios_2 = new Array("Seleccione Municipio", "Bilbao", "Barakaldo", "Durango", "Elorrio", "Muzkiz");
let municipios_3 = new Array("Seleccione Municipio", "Donostia-San Sebastián", "Arrasate-Mondragón", "Eibar");
let municipios_4 = new Array("Seleccione Municipio", "Iruña", "Burlada", "Estella-Lizarra", "Tafalla");
let municipios_5 = new Array("Seleccione Municipio", "Baiona", "Bastida", "Hendaya", "Miarritze");
let municipios_6 = new Array("Seleccione Municipio", "Maule", "Barkoxe", "Sohüta");
let municipios_7 = new Array("Seleccione Municipio", "Baigorri", "Garazi", "Oztibarre");

let todasProvincias = [
    [],
    municipios_1,
    municipios_2,
    municipios_3,
    municipios_4,
    municipios_5,
    municipios_6,
    municipios_7,
];

window.onload
{
    eleSelect_provincia = document.f1.provincia;
    eleSelect_municipio = document.f1.municipio;
    eleSelect_municipio.options[0].text= "Seleccione Municipio";
}




function cambiarProvincia (){
    let provincia = eleSelect_provincia[eleSelect_provincia.selectedIndex].value;

    if (provincia != 0){
        municipioSel = todasProvincias[provincia];

        eleSelect_municipio.length = municipioSel.length;

        for (let i = 0; i<municipioSel.length; i++){
            eleSelect_municipio.options[i].value = municipioSel[i];
            eleSelect_municipio.options[i].text = municipioSel[i];
        }


    }else{
        eleSelect_municipio.length = 1;
        eleSelect_municipio.options[0].text = "Seleccione Municipio"; 
    }

    eleSelect_municipio.options[0].selected = true;
    document.getElementById("mensaje").innerHTML ="";
}


function muestraMensaje (){
    let provSel = eleSelect_provincia[eleSelect_provincia.value].text;
    let municipioSel = eleSelect_municipio.value;

    if (municipioSel != "Seleccione Municipio"){
        elep = document.createElement("p");
        elep.innerHTML = "Ha seleccionado <b>"+provSel+"</b> en <b>"+municipioSel+"</b>";
        document.getElementById("mensaje").appendChild (elep);
    }else{
        document.getElementById("mensaje").innerHTML = "";
    }
}