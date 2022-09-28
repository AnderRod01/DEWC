let eleImg_hora1, eleImg_hora2;
let eleImg_min1, eleImg_min2;
let eleImg_seg1, eleImg_seg2;
let eleImg_dia1, eleImg_dia2;
let eleImg_mes1, eleImg_mes2;
let eleImg_anio1, eleImg_anio2, eleImg_anio3, eleImg_anio4;
let eleImg_barra1, eleImg_barra2, eleImg_puntos1, eleImg_puntos2;

const RUTAS_MAPA = {
    0: "./images/0.jpg",
    1: "./images/1.jpg",
    2:"./images/2.jpg",
    3:"./images/3.jpg",
    4:"./images/4.jpg",
    5:"./images/5.jpg",
    6:"./images/6.jpg",
    7:"./images/7.jpg",
    8:"./images/8.jpg",
    9:"./images/9.jpg",
    "barra":"./images/barra.jpg",
    "puntos":"./images/puntos.jpg"
}

window.onload
{
    eleImg_barra1 = document.getElementById("barra1");
    eleImg_barra2 = document.getElementById("barra2");
    eleImg_puntos1 = document.getElementById("puntos1");
    eleImg_puntos2 = document.getElementById("puntos2");
    
    eleImg_hora1 = document.getElementById ("hora1");
    eleImg_hora2 = document.getElementById("hora2");
    eleImg_min1 = document.getElementById("min1");
    eleImg_min2 = document.getElementById("min2");
    eleImg_seg1 = document.getElementById("seg1");
    eleImg_seg2 = document.getElementById("seg2");

    eleImg_dia1 = document.getElementById("dia1");
    eleImg_dia2 = document.getElementById("dia2");
    eleImg_mes1 = document.getElementById("mes1");
    eleImg_mes2 = document.getElementById("mes2");
    eleImg_anio1 = document.getElementById("anio1");
    eleImg_anio2 = document.getElementById("anio2");
    eleImg_anio3 = document.getElementById("anio3");
    eleImg_anio4 = document.getElementById("anio4");

    eleImg_barra1.innerHTML = "<img src='"+RUTAS_MAPA["barra"]+"'></img>"
    eleImg_barra2.innerHTML = "<img src='"+RUTAS_MAPA["barra"]+"'></img>"

    eleImg_puntos1.innerHTML = "<img src='"+RUTAS_MAPA["puntos"]+"'></img>"
    eleImg_puntos2.innerHTML = "<img src='"+RUTAS_MAPA["puntos"]+"'></img>"
    refresh();
    setInterval(refresh, 1000);
}



function refresh () {
    let date = new Date();
    let anio = date.getFullYear();
    let mes = 1+date.getMonth();
    let dia = date.getDate();

    let hora = date.getHours();
    let minutos = date.getMinutes();
    let segundos = date.getSeconds();

    //anio
    let anio1 = Math.floor(anio%10);
    eleImg_anio1.innerHTML = "<img src='"+RUTAS_MAPA[anio1]+"'></img>";

    let anio2 = Math.floor(anio%100 / 10);
    eleImg_anio2.innerHTML = "<img src='"+RUTAS_MAPA[anio2]+"'></img>";

    let anio3 = Math.floor(anio%1000/100);
    eleImg_anio3.innerHTML = "<img src='"+RUTAS_MAPA[anio3]+"'></img>";

    let anio4 = Math.floor(anio/1000);
    eleImg_anio4.innerHTML = "<img src='"+RUTAS_MAPA[anio4]+"'></img>";


    //mes
    let mes1 =Math.floor(mes/10);
    eleImg_mes1.innerHTML = "<img src='"+RUTAS_MAPA[mes1]+"'></img>";

    let mes2 = mes%10;
    eleImg_mes2.innerHTML = "<img src='"+RUTAS_MAPA[mes2]+"'></img>";


    //dia
    let dia1= Math.floor(dia/10);
    eleImg_dia1.innerHTML = "<img src='"+RUTAS_MAPA[dia1]+"'></img>";

    let dia2 = dia%10;
    eleImg_dia2.innerHTML = "<img src='"+RUTAS_MAPA[dia2]+"'></img>";

    //hora
    let hora1 = Math.floor(hora/10);
    eleImg_hora1.innerHTML = "<img src='"+RUTAS_MAPA[hora1]+"'></img>";

    let hora2 = hora%10;
    eleImg_hora2.innerHTML = "<img src='"+RUTAS_MAPA[hora2]+"'></img>";

    //minutos
    let min1 = Math.floor(minutos/10);
    eleImg_min1.innerHTML = "<img src='"+RUTAS_MAPA[min1]+"'></img>";

    let min2 = minutos%10;
    eleImg_min2.innerHTML = "<img src='"+RUTAS_MAPA[min2]+"'></img>";

    //segundos

    let seg1 = Math.floor(segundos/10);
    eleImg_seg1.innerHTML = "<img src='"+RUTAS_MAPA[seg1]+"'></img>";

    let seg2 = segundos%10;
    eleImg_seg2.innerHTML = "<img src='"+RUTAS_MAPA[seg2]+"'></img>";
}







