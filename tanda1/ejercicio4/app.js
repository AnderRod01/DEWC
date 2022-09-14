let elep = document.createElement("p");
let texto = "";
sum = 0;
for (num = 1; num <=100; num++){
    sum = sum + num;
    texto = texto + sum + ", "
    if (num %10 == 0){
        texto= texto + "<br>"
    }
}
elep.innerHTML= texto;
document.body.appendChild(elep);