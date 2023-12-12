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
const noviElement = document.querySelector(".naslov");
const items = document.getElementsByClassName("list-group-fruit");
items[1].style.backgroundColor = "red";
items[0].innerText = "nesto";
// items.style.color = "green";

for (let i = 0; i < items.length; i++) {
  items[i].style.backgroundColor = "red";
  console.log(items);
}

noviElement.style.color = "blue";

function boja() {
  noviElement.style.color = "red";
}
