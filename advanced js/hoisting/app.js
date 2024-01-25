// Hoisting je koncept u JavaScriptu koji se odnosi na podizanje (hoisting) deklaracija promenljivih i funkcija
// na vrh njihovih oblasti važenja (scope) tokom faze kompilacije,
// pre nego što se izvršava sam kod.

//Output: undefined
console.log(x);
var x = 5;

//Error
console.log(a);
let a = 5;

//Output: "Pozdrav"
pozdrav1();
function pozdrav1() {
  console.log("Pozdrav");
}
pozdrav1();
//Error
pozdrav();
const pozdrav = () => {
  console.log("Pozdrav");
};
pozdrav();
