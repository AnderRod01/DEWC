let elep = document.createElement("p");
let texto = "";
let num = 1;
while (num<=100){
    if (num %2 == 0){
        texto =texto + num + ", ";
        if (num %5 == 0){
            texto =texto + "<br>";
        }
        
    }
    num++;
}
elep.innerHTML= texto;
document.body.appendChild(elep);