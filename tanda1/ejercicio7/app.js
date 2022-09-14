let elep = document.createElement("p");
let texto = "";
let sum = 0;
let cont =0;
for (num =1;num <=100;num++){
    sum = sum + num;
    if (sum>1000){
        break;
    }
    if (sum%2 != 0){
        texto = texto + sum + ", "
        cont++;
    }
    
    if (cont == 4){
        if (sum)
        texto= texto + "<br>"
        cont = 0;
    }

}
elep.innerHTML= texto;
document.body.appendChild(elep);