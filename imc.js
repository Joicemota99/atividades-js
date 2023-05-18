let kg = prompt("Digite o Kg da pessoa: ");
let altura = prompt("Digite a altura da pessoa:");
{
  imc = kg / Math.pow(altura, 2);
  console.log(imc.toFixed(1));
}
