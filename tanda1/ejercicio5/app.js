let elep = document.createElement("p");
let texto = "";
sum = 0;
num = 1;
while (num <=100){
    sum = sum + num;
    texto = texto + sum + ", "
    if (num %10 == 0){
        texto= texto + "<br>"
    }
    num++;
}
elep.innerHTML= texto;
document.body.appendChild(elep);