const km = parseFloat(prompt('Quanti chilometri vuoi fare?'));
const eta = parseInt(prompt('Quanti anni hai?'));

let totalPrice = 0.21 * km;

if (eta < 18) {
  let diff = totalPrice * 20 / 100;
  totalPrice = totalPrice - diff;
}
else if (eta > 65) {
  let diff = totalPrice * 40 / 100;
  totalPrice = totalPrice - diff;
}

console.log(totalPrice.toFixed(2));