function maiorNumero() {
    const num1 = parseFloat(prompt("Digite o primeiro número:"));
    const num2 = parseFloat(prompt("Digite o segundo número:"));
    const num3 = parseFloat(prompt("Digite o terceiro número:"));
    const maior = Math.max(num1, num2, num3);
    alert(`O maior número é: ${maior}`);
}
function ordemCrescente() {
    const num1 = parseFloat(prompt("Digite o primeiro número:"));
    const num2 = parseFloat(prompt("Digite o segundo número:"));
    const num3 = parseFloat(prompt("Digite o terceiro número:"));
    const numeros = [num1, num2, num3];
    numeros.sort((a, b) => a - b);
    alert(`Números em ordem crescente: ${numeros.join(', ')}`);
}
function verificarPalindromo() {
    const texto = prompt("Digite uma palavra ou frase:");    
    const textoProcessado = texto.replaceAll(' ', '').toUpperCase();
    const textoInvertido = textoProcessado.split('').reverse().join('');
    
    if (textoProcessado === textoInvertido) {
        alert(`"${texto}" É um palíndromo`);
    } else {
        alert(`"${texto}" NÃO é um palíndromo.`);
    }
}
function verificarTriangulo() {
    const lado1 = parseFloat(prompt("Digite o primeiro lado:"));
    const lado2 = parseFloat(prompt("Digite o segundo lado:"));
    const lado3 = parseFloat(prompt("Digite o terceiro lado:"));    
  
    if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
        if (lado1 === lado2 && lado2 === lado3) {
            alert("Os valores formam um triângulo EQUILÁTERO.");
        } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
            alert("Os valores formam um triângulo ISÓSCELES.");
        } else {
            alert("Os valores formam um triângulo ESCALENO.");
        }
    } else {
        alert("Os valores NÃO formam um triângulo!");
    }
}
function menu() {
    const opcao = prompt(
        "Escolha uma opção:\n" +
        "1 - Encontrar o maior de três números\n" +
        "2 - Ordenar três números em ordem crescente\n" +
        "3 - Verificar se uma string é palíndromo\n" +
        "4 - Verificar se três valores formam um triângulo e qual o tipo\n" +
        "0 - Sair"
    );
    
    switch (opcao) {
        case "1":
            maiorNumero();
            break;
        case "2":
            ordemCrescente();
            break;
        case "3":
            verificarPalindromo();
            break;
        case "4":
            verificarTriangulo();
            break;
        case "0":
            alert("Saindo...");
            return;
        default:
            alert("Opção inválida. Tente novamente.");
    }      
    menu();
}
menu();