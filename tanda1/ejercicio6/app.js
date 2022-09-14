let elep = document.createElement("p");
texto = ""
num = 1;
do{
    cont = 1;
    while (cont<=25){
        if (num %2 == 0){
            texto =texto + num + ", ";
            cont++;
            if (num %5 == 0){
                texto =texto + "<br>";
            }
        }
        num++;
    }
    elep.innerHTML= texto;
    document.body.appendChild(elep);
}while (confirm("Desea continuar?"));
