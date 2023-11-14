//1. Definisali smo funkciju, popsift, koji uzima niz kao argument i vraća novi niz.
// Izmenite funkciju, tako da uklonite  prve i poslednje elemente argumentskog niza
// i dodelite uklonjene elemente njihovim odgovarajućim varijablama,
// tako da povratni niz sadrži njihove vrednosti.

function popShift(arr) {
  let popped = arr.pop();
  let shifted = arr.shift();
  return [shifted, popped];
}

console.log(popShift(["challenge", "is", "not", "complete"]));

//3. Data je funckija htmlColorNames koja sadrzi HTML boje. Izmenite funckiju koristeci splice()
// tako da izbrisete prva dva elementa u nizu i dodate boju 'DarkSalmon' i 'BlanchedAlmond' umesto izbrisana dva elementa

function htmlColorNames(arr) {
  arr.splice(0, 2, "Dark Salmon", "BlanchedAlmond");
  return arr;
}

console.log(
  htmlColorNames([
    "DarkGoldenRod",
    "WhiteSmoke",
    "LavenderBlush",
    "PaleTurquoise",
    "FireBrick",
  ])
);

// 4. Data je funckija forecast koja ima niz u sebi. Izmenite funckiju koristeci slice()
// da biste izvukli informacije iz niza i vratite novi niz koji sadrzi 'warm' i 'sunny'

function forecast(arr) {
  var vreme = arr.slice(2, 4);
  console.log(vreme);
  return arr;
}

console.log(
  forecast(["cold", "rainy", "warm", "sunny", "cool", "thunderstorms"])
);

//1. Nestovati nizove: jednom nestovati deep, dva puta deeper, tri puta deepest
let myNestedArray = [
  ["unshift", false, 1, 2, 3, "complex", "nested"],
  ["loop", "shift", 6, 7, 1000, "method"],
  ["concat", false, true, "spread", "array", ["deep"]],
  ["mutate", 1327.98, "splice", "slice", "push", [["deeper"]]],
  ["iterate", 1.3849, 7, "8.4876", "arbitrary", "depth", [[["deepest"]]]],
];

//2. Ispisati niz Learning to code is fun
let spreadOut = ["to", "code"];
let noviNiz = ["Learning", ...spreadOut, "is", "fun"];

//3. U datom objektu promeniti vrednost online iz 42 u 45
let userActivity = {
  id: 23894201352,
  date: "January 1, 2017",
  data: {
    totalUsers: 51,
    online: 42,
  },
};

userActivity.data.online = 45;

console.log(userActivity);
