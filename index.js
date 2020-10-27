// Criar um programa que calcula a média
// das notas entre os alunos e envia
// mensagem da nota da média.
// Se a média for maior que cinco, parabenizar a turma.

const nameStudent01 = "Ana";
const gradeStudent01 = 9.8;

const nameStudent02 = "Wemerson";
const gradeStudent02 = 8.0;

const nameStudent03 = "Júlia";
const gradeStudent03 = 4.5;

const averageGrade = (gradeStudent01 + gradeStudent02 + gradeStudent03) / 3;

console.log(`A média da turma foi, ${averageGrade}`);

if (averageGrade > 5.0) {
  console.log(`Parabéns a turma!`);
}
