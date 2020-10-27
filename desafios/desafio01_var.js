/*
Cálculo de IMC
    Crie um programa para calcular o IMC 
    e nível de obesidade de uma pessoa.

    Comece criando constantes para armazenar o nome, peso, altura e sexo de uma pessoa, por exemplo:
    const nome = "Carlos";
    const peso = 84;
    const altura = 1.88;

    A partir desses dados armazene em uma constante chamada imc o cálculo do índice de massa corporal
    definido pela fórmula abaixo:
    
    peso / (altura * altura);

    Baseado no valor obtido através desse cálculo exiba as seguintes mensagens:

    SE o IMC maior ou igual a 30: Carlos você está acima do peso;
    SE o IMC menor que 29.9: Carlos você não está acima do peso;

*/
const name = "Ana";
const height = 1.57;
const weight = 90.0;

const imc = weight / height ** 2;

if (imc >= 30) {
  console.log(`${name} você está acima do peso.`);
} else {
  console.log(`${name} você não está acima do peso.`);
}
