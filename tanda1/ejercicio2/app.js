let elep = document.createElement("p");
for (num=1; num<=100; num++){
    if (num %5 == 0){
        elep.innerHTML = num + ",<br>";
        document.body.appendChild(elep);
    }else{
        if (num %2 == 0){
            elep.innerHTML = num + ", ";
            document.body.appendChild(elep);
        }
    }
}