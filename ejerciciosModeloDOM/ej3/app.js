function anade (){
    let eleLista = document.getElementById("lista");
    
    eleLi = document.createElement("li");
    eleLi.innerHTML = "Elemento nuevo";
    eleLista.appendChild (eleLi);
}   