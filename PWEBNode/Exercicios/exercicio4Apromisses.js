function parte1(){
    for(var i = 1;i<=10;i++){
        console.log('primeira parte '+ i)
    }
}
setTimeout(parte1, 2000);
const fs = require("fs").promisses;
fs.readFile("cidades.txt","utf-8")
    .then(data => {
        const registros = data.split("\n");
        registros.forEach((registro,index)=>{
            console.log("segunda parte: " + registro + " " + index);
        });
    })
    .catch(err=>{
        console.error("Erro ao ler o arquivo", err)
    });