let i;
let m = 90000;
let capitalInicial = 60000;
let numeroMeses = 24;

{
  i = Math.pow(m / capitalInicial, 1 / numeroMeses) - 1;
  i = i * 100;
  console.log(
    `O seu financiamento de ${capitalInicial} reais teve uma taxa de juros de ${i.toFixed(
      3
    )}%, pois após os ${numeroMeses} meses você teve que pagar ${m}`
  );
}
