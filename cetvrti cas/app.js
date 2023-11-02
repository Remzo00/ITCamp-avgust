// if (uslov){
//     //output
// }

//if
//else if
//else
//switch

let veciBroj = 10;
let manjiBroj = 5;

if (manjiBroj > veciBroj) {
  console.log(true);
} else {
  console.log(false);
}

let mesec = 6;

//Nije dobra praksa
if (mesec === 1) {
  console.log("Januar");
} else if (mesec === 2) {
  console.log("Februar");
} else {
  console.log("Jun");
}

switch (mesec) {
  case 1:
    console.log("Januar");
    break;
  case 2:
    console.log("Februar");
    break;
  default:
    console.log("Jun");
}

let godine = 2003;

if (2023 - godine >= 18) {
  console.log("punoletan");
} else {
  console.log("maloletan");
}
