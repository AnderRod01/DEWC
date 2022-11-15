//para redondear a 2 decimales (a/b).toFixed(2);
let eleBtn_obtener, eleTxt_minimo
let div_contenido, div_estadisticas

window.onload = function (){
    eleBtn_obtener = document.getElementsByTagName("button")[0]
    eleTxt_minimo = document.getElementById("salarioMinimo")
    div_contenido = document.getElementById("contenido")
    div_estadisticas = document.getElementById("estadisticas")
    

    eleBtn_obtener.onclick = () => cargarTabla ()
}

function cargarTabla (){
    const properties = {
        url : "./tabla.json"
    }

    fetch(properties.url) // promise
    .then(data => data.json())
    .then(json => {
        div_contenido.innerHTML=''

        let minimo = eleTxt_minimo.value
        let minSalario = Number.MAX_VALUE
        let maxEdad = Number.MIN_VALUE
        let nombreMaxEdad =""
        let nombreMinSalario = ""

        let cantPersonas =0
        let sumaEdades = 0
        if (isNaN(minimo))
            minimo = 0
        
        let tabla = document.createElement("table")
        let thead = document.createElement("thead")
        let fila  = document.createElement("tr")
        
        fila.innerHTML = "<th>#</th>    <th>Nombre</th> <th>Email</th>   <th>Edad</th>   <th>Estado</th>   <th>Salario</th>";
        thead.appendChild(fila)
        let tbody = document.createElement("tbody")

        for (let key in json){
            if (json[key]["salario"] >= minimo){
                let filaBody = document.createElement("tr")
                filaBody.innerHTML = "<td>"+json[key]["id"]+"</td>    <td>"+json[key]["nombre"]+"</td> <td>"+json[key]["email"]+"</td>   <td>"+json[key]["edad"]+"</td>   <td>"+json[key]["estado"]+"</td>   <td>"+json[key]["salario"]+"</td>"

                tbody.appendChild(filaBody)

                if (minSalario > json[key]["salario"]){
                    minSalario = json[key]["salario"]
                    nombreMinSalario = json[key]["nombre"]
                }

                if (maxEdad < json[key]["edad"]){
                    maxEdad = json[key]["edad"]
                    nombreMaxEdad = json[key]["nombre"]
                }
                cantPersonas++
                sumaEdades+= json[key]["edad"]

            }
        }
        tabla.appendChild(thead)
        tabla.appendChild(tbody)
        div_contenido.appendChild(tabla)
        

        let mediaEdad = (sumaEdades/cantPersonas).toFixed(2)

        let txtMedia = "<br><br>La media de Edad es " + mediaEdad
        let txtMenorSalario = "La persona de mas edad es " + nombreMaxEdad + " y la de menor salario es " + nombreMinSalario

        div_estadisticas.innerHTML = txtMedia+"<br>" +txtMenorSalario



    });
}

