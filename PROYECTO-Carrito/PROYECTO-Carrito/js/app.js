let lsteleA_aniadirCarrito
let localStorage
let tbl_listaCarrito


window.onload = function (){
    localStorage = window.localStorage

    lsteleA_aniadirCarrito = document.getElementsByClassName("u-full-width button-primary button input agregar-carrito")
    tbl_listaCarrito = document.getElementById("lista-carrito")

    
}

function prepareEvents(){
    lsteleA_aniadirCarrito.addEventListener()

}

function prepararLocalStorage (){
    let lstArticulos = getArticulosLocalStorage()

    lstArticulos.forEach(function (articulo){
        let tr = document.createElement('tr')
        for (i = 0; i<articulo.length; i++){
            let td = document.createElement('td')
            if (i == 0){
                td.innerHTML ="<img src= '"+ articulo[i]+"'>"
            }else{
                td.innerHTML = articulo[i]
            }
            tr.appendChild(td)
        }

    })
}

function getArticulosLocalStorage(){
    let lstArticulos
    if (localStorage.getItem('articulos') === "null")
        lstArticulos = []
    else
        lstArticulos = JSON.parse (localStorage.getItem('articulos'))

    return lstArticulos
}

