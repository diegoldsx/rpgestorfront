const amount = 1_000_000

const player = 22
const usdFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});
console.log(usdFormatter.format(amount / player)); 
