let elep = document.createElement("p");
let texto = "";
for (num=1; num<=100; num++){
    if (num %2 == 0){
        texto =texto + num + ", ";
        if (num %5 == 0){
            texto =texto + "<br>";
        }

    }
}
elep.innerHTML= texto;
document.body.appendChild(elep);