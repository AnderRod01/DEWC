//window.open(url,'_blank');
//                 window.open("./thankyou.html")
let eleChkbox_TOS
let eleTxt_dni, eleTxt_nombre, eleTxt_apellido, eleTxt_direccion, eleTxt_email, eleTxt_telefono
let territorio = ["Seleccione territorio", "Euskadi", "Nafarroa", "Iparralde"]
let euskadi = ["Araba", "Bizkaia", "Gipuzkoa"]
let navarra = ["Navarra"]
let iparralde = ["Lapurdi","Behe Nafarroa", "Zuberoa"]

let eleDate_fecha

let Municipios= [
        ["Gasteiz", "Laguardia", "Salvatierra"],
        ["Bilbo", "Barakaldo", "Durango"],
        ["Donosti", "Arrasate","Bergara"],
        ["Iruña", "Lizarra", "Ujue"],
        ["Baiona", "Biarritz", "Hendaya"],
        ["Bidarray","St-Palais"],
        ["Maule","Etxarri"]
]

let eleSelect_territorio, eleSelect_provincia, eleSelect_municipio
let edad
let eleBtn_enviar
let localStorage
let eleBtn_volver
let ventana


window.onload = function(){

    eleChkbox_TOS = document.getElementById("politicas")
    
    eleTxt_dni = document.getElementById("dni")
    eleTxt_nombre = document.getElementById("firstname")
    eleTxt_apellido = document.getElementById("lastname")
    eleTxt_email= document.getElementById("email")
    eleTxt_direccion = document.getElementById("address")
    eleTxt_telefono = document.getElementById("phone")

    eleSelect_municipio  = document.getElementById("municipio")
    eleSelect_provincia =document.getElementById("provincia")
    eleSelect_territorio = document.getElementById("territorio")
    llenarSelectTerritorio()

    eleBtn_enviar = document.getElementById("enviar")

    eleDate_fecha = document.getElementById("birthday")
    localStorage = window.localStorage
    


    prepareEvents()
}

function prepareEvents(){
    eleInputs = document.getElementsByTagName('input')
    for (i = 0; i < eleInputs.length; i++) {
        eleInputs[i].addEventListener("focusout", validar)
    }

    eleChkbox_TOS.addEventListener("change", comprobarCheck)
    eleBtn_enviar.addEventListener("click", enviar)

    eleSelect_territorio.addEventListener("change", cambiarTerritorio)
    eleSelect_provincia.addEventListener("change", cambiarProvincia)


}

function llenarSelectTerritorio (){
    let eleOption = document.createElement("option")
    eleSelect_territorio.appendChild(eleOption)
    eleSelect_territorio.options[0].value = 0
    eleSelect_territorio.options[0].text = "Seleccione territorio"

    for (i = 1; i<territorio.length; i++){
        let eleOption = document.createElement("option")
        eleSelect_territorio.appendChild(eleOption)
        eleSelect_territorio.options[i].value = territorio[i]
        eleSelect_territorio.options[i].text = territorio[i]
    }

    eleSelect_territorio.options[0].selected = true
}

function cambiarTerritorio (){
    let territorio = eleSelect_territorio.value
    eleSelect_provincia.innerHTML=""
    
    switch (territorio){
        case "Euskadi":
            for (i = 0; i<euskadi.length; i++){
                let eleOption = document.createElement("option")
                eleSelect_provincia.appendChild(eleOption)
                eleSelect_provincia.options[i].value = euskadi[i]
                eleSelect_provincia.options[i].text = euskadi[i]
            }
            break
        case "Nafarroa":
            for (i = 0; i<navarra.length; i++){
                let eleOption = document.createElement("option")
                eleSelect_provincia.appendChild(eleOption)
                eleSelect_provincia.options[i].value = navarra[i]
                eleSelect_provincia.options[i].text = navarra[i]
            }
            break
        case "Iparralde":
            for (i = 0; i<iparralde.length; i++){
                let eleOption = document.createElement("option")
                eleSelect_provincia.appendChild(eleOption)
                eleSelect_provincia.options[i].value = iparralde[i]
                eleSelect_provincia.options[i].text = iparralde[i]
            }
            break
    }

    cambiarProvincia()
}

function cambiarProvincia(){
    let provincia = eleSelect_provincia.value
    eleSelect_municipio.innerHTML=""

    switch (provincia){
        case "Araba":
            for (i = 0; i<Municipios[0].length; i++){
                let eleOption = document.createElement("option")
                eleSelect_municipio.appendChild(eleOption)
                eleSelect_municipio.options[i].value = Municipios[0][i]
                eleSelect_municipio.options[i].text = Municipios[0][i]
            }
            break
        case "Bizkaia":
            for (i = 0; i<Municipios[1].length; i++){
                let eleOption = document.createElement("option")
                eleSelect_municipio.appendChild(eleOption)
                eleSelect_municipio.options[i].value = Municipios[1][i]
                eleSelect_municipio.options[i].text = Municipios[1][i]
            }
            break
        case "Gipuzkoa":
            for (i = 0; i<Municipios[2].length; i++){
                let eleOption = document.createElement("option")
                eleSelect_municipio.appendChild(eleOption)
                eleSelect_municipio.options[i].value = Municipios[2][i]
                eleSelect_municipio.options[i].text = Municipios[2][i]
            }
            break
        case "Navarra":
            for (i = 0; i<Municipios[3].length; i++){
                let eleOption = document.createElement("option")
                eleSelect_municipio.appendChild(eleOption)
                eleSelect_municipio.options[i].value = Municipios[3][i]
                eleSelect_municipio.options[i].text = Municipios[3][i]
            }
            break
        case "Lapurdi":
            for (i = 0; i<Municipios[4].length; i++){
                let eleOption = document.createElement("option")
                eleSelect_municipio.appendChild(eleOption)
                eleSelect_municipio.options[i].value = Municipios[4][i]
                eleSelect_municipio.options[i].text = Municipios[4][i]
            }
            break
        case "Behe Nafarroa":
            for (i = 0; i<Municipios[5].length; i++){
                let eleOption = document.createElement("option")
                eleSelect_municipio.appendChild(eleOption)
                eleSelect_municipio.options[i].value = Municipios[5][i]
                eleSelect_municipio.options[i].text = Municipios[5][i]
            }
            break
        case "Zuberoa":
            for (i = 0; i<Municipios[6].length; i++){
                let eleOption = document.createElement("option")
                eleSelect_municipio.appendChild(eleOption)
                eleSelect_municipio.options[i].value = Municipios[6][i]
                eleSelect_municipio.options[i].text = Municipios[6][i]
            }
            break
    }
}

function comprobarCheck(){
    if (eleChkbox_TOS.checked = true){
        eleBtn_enviar.disabled = false
    }
}

function enviar (){
    if (eleSelect_territorio.value!=0 && comprobarVacios()){
        let lstDatos = {
            dni:eleTxt_dni.value,
            address:eleTxt_direccion.value,
            email:eleTxt_email.value,
            fnaci:eleDate_fecha.value,
            fname:eleTxt_nombre.value,
            lname:eleTxt_apellido.value,
            municipality:eleSelect_municipio.value,
            phone:eleTxt_telefono.value,
            province:eleSelect_provincia.value,
            years:edad
        }

        localStorage.setItem(eleTxt_dni.value, JSON.stringify(lstDatos))
        ventana = window.open("./thankyou.html")
        eleBtn_volver = ventana.document.getElementById("volver")
        eleBtn_volver.addEventListener("click", cerrarVentana)

    }else{
        alert("Debes rellenar todos los campos")
    }
}

function cerrarVentana(){
    console.log("hola")
    ventana.close()
}

function comprobarVacios (){
    eleInputs = document.getElementsByTagName('input')
    for (i = 0; i < eleInputs.length; i++) {
        if (eleInputs[i].value =="")
            return false
    }
    return true
}

function calcularEdad(){
    
    let date = new Date()
    
    let arrFec = eleDate_fecha.value.split('-')

    let fechaNac = new Date(arrFec[0], arrFec[1], arrFec[2])
    let aniosDesde1970 = date-fechaNac;


    let edad=new Date(aniosDesde1970).getFullYear()-1970
    return edad
}

function validar(){
    switch (this.id){
        case 'dni':
            if (!(/^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/.test(this.value))) {
                this.value=""
                alert("DNI mal formado")

            }
            break

        case 'email':
            if (!(/^(.+\@.+\..+)$/.test(this.value))) {
                this.value = ""
                alert("Email mal formado")
            }
            break

        case 'phone':
            if (!(/^\+?\d{0,2}\d{9}$/.test(this.value)) ){
                this.value=""
                alert("Teléfono mal formado")
            }
            break

        case 'firstname':
            if(!(/^[a-z,ª,á,é,í,ó,ú,\s]{1,50}$/.test(this.value.toLowerCase()))){
                this.value=""
                alert("Nombre mal formado")
            }
            break

        case 'lastname':
            if(!(/^[a-z,ª,á,é,í,ó,ú,\s]{1,50}$/.test(this.value.toLowerCase()))){
                this.value=""
                alert("Apellido mal formado")
            }
            break
        case 'address':
            if (!(/^[c]\/[a-z,ª,á,é,í,ó,ú,\s,\d,º]{1,50}$/.test(this.value.toLowerCase()))){
                this.value=""
                alert("Dirección mal formada")
            }
            break
        case 'birthday':
           edad = calcularEdad()
           break
    }
}

