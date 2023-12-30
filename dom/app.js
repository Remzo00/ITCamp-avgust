//DOM u JavaScriptu oznacava Document Object Model, sto je standardna reprezentacija HTML
//ili XML documenta u obliku objekta. DOM omogucava programerima da manipulisu sadrzajem,
//strukturom i stilom web stranice koriscenjem JavaScripta.

//Svaki element na web stranici se moze posmatrati kao objekat u DOM-u, a svaki objekat ima
//svojstva i metode kojima se moze manipulisati.

//Koriscenjem DOM-a, JavaScript omogucava dinamicko generisanje i azuriranje sadrzaja web
//stranice bez potrebe da se ceo dokument ucita ponovo. To je jedan od temeljnih principa,
//web programiranja i veoma vazan za razvoj interaktivnih i dinamickih web aplikacija.

//getElementById -> Uzima element po njegovom ID-u

// const noviElement = document.getElementById("naslov");
// // const noviElement = document.querySelector(".naslov");
// const items = document.getElementsByClassName("list-group-fruit");
// items[1].style.backgroundColor = "red";
// items[0].innerText = "nesto";
// // items.style.color = "green";

// for (let i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = "red";
//   console.log(items);
// }

// noviElement.style.color = "blue";

// function boja() {
//   noviElement.style.color = "red";
// }

// function validacija() {
//   const email = document.forms["myForm"]["email"];
//   const pass = document.forms["myForm"]["password"];
//   const confirm = document.forms["myForm"]["confirmPass"];

//   if (email.value.length < 9) {
//     alert("Popuni email");
//     return false;
//   }

//   if (pass.value.length < 6) {
//     alert("Password mora imati vise karaktera");
//     return false;
//   }

//   if (confirm.value !== pass.value) {
//     alert("Sifre moraju biti iste");
//     return false;
//   }
// }

// //eventListener
// const modal = document.getElementById("modal");
// const modalButton = document.getElementById("modal-button");
// const modalCloseButton = document.querySelector(".close");

// modalButton.addEventListener("click", function () {
//   modal.style.display = "block";
// });

// modalCloseButton.addEventListener("click", function () {
//   modal.style.display = "none";
// });

//Nodes

const paragraf = document.createElement("p");
const tekst = document.createTextNode("Neki tekst");
paragraf.appendChild(tekst);

const div = document.createElement("div");
const body = document.getElementById("body");
body.appendChild(div);
div.appendChild(paragraf);
