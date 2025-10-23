function calcularIMC() {
    const altura = parseFloat(prompt("Digite sua altura em metros (ex: 1.70):"));  
  
    if (isNaN(altura) || altura <= 0) {
        alert("Digite uma altura válida!");
        return;
    }  
  
    const peso = parseFloat(prompt("Digite seu peso em quilogramas (ex: 70.5):"));
    
    if (isNaN(peso) || peso <= 0) {
        alert("Digite um peso válido!");
        return;
    }
    
    const imc = peso / (altura^2);
    
    let classificacao = "";
    
    if (imc < 18.5) {
        classificacao = "MAGREZA";
    } else if (imc < 25) {
        classificacao = "NORMAL";
    } else if (imc < 30) {
        classificacao = "SOBREPESO";
    } else if (imc < 40) {
        classificacao = "OBESIDADE";
    } else {
        classificacao = "OBESIDADE GRAVE";
    }   
  
    alert(
        `Seu IMC é: ${imc.toFixed(2)}\n` +
        `Classificação: ${classificacao}\n\n` +
        `Referência:\n` +
        `- Menor que 18.5: MAGREZA\n` +
        `- Entre 18.5 e 24.9: NORMAL\n` +
        `- Entre 25 e 29.9: SOBREPESO\n` +
        `- Entre 30 e 39.9: OBESIDADE\n` +       
        `- Maior que 40: OBESIDADE GRAVE`
    );
}
calcularIMC();
