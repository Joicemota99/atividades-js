// Juros composto
let m;
// Valor que deseja aplicar
let c = 3.0;
// Porcentagem de juros por mês
let i = 0.03;
let t = 2;

{
  m = c * Math.pow(1 + i, t);
  console.log(m.toFixed(3));
}
