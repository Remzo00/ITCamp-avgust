//pass by value -> Vazi samo za primitivne tipove
let a = 5;
let b = a;
b = b + 1;

console.log("B: ", b);
console.log("A: ", a);

//pass by reference -> Vazi za objekte i nizove
let c = [1, 2];
let d = c;
d.push(3, 4);

console.log("C: ", c);
console.log("D: ", d);
