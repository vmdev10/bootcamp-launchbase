// Criar um programa que calcula a média
// das notas entre os alunos e envia
// mensagem da nota da média.

// Object - Objetos
// É uma coleção de propriedades que recebem valores e/ou funcionalidades
// Delimitado por chaves {}

// Notação literal de um objeto:
const student01 = {
  name: "Ana",
  grade: 9.8,
};

const student02 = {
  name: "Wemerson",
  grade: 8.0,
};

const student03 = {
  name: "Júlia",
  grade: 2.5,
};

// Sempre que eu quiser acessar uma propriedade do obejto: objeto.propriedade
//O uso do ponto '.' permite o acesso a qualquer propriedade do objeto;
const averageGrade = (student01.grade + student02.grade + student03.grade) / 3;

console.log(`A média da turma foi, ${averageGrade}`);