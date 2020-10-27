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
const imc = [
  {
    name: "Ana",
    height: 1.57,
    weight: 45.0,
  },

  {
    name: "Júlia",
    height: 0.55,
    weight: 13.0,
  },

  {
    name: "Ricardo",
    height: 1.76,
    weight: 120.0,
  },
];

const imcPerson01 = imc[0].weight / imc[0].height ** 2;
const imcPerson02 = imc[1].weight / imc[1].height ** 2;
const imcPerson03 = imc[2].weight / imc[2].height ** 2;

if (imcPerson01 >= 30) {
  console.log(`${imc[0].name} você está acima do peso.`);
} else {
  console.log(`${imc[0].name} você não está acima do peso.`);
}

if (imcPerson02 >= 30) {
  console.log(`${imc[1].name} você está acima do peso.`);
} else {
  console.log(`${imc[1].name} você não está acima do peso.`);
}

if (imcPerson03 >= 30) {
  console.log(`${imc[2].name} você está acima do peso.`);
} else {
  console.log(`${imc[2].name} você não está acima do peso.`);
}
