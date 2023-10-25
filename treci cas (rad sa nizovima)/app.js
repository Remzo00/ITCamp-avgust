const cars = ["bmw", "audi", "vw", "mercedes"]
cars.splice(1, 2, "fiat")
console.log(cars)

const num = [1, 2]
const nums = [...num, 3, 4]
console.log(nums)

//Metode za rad sa nizovima
//push() -> dodaje element na kraju niza
//pop() -> brise element na kraju niza
//unshift() -> dodaje element na pocetku niza
//shift() -> brise prvi element u nizu
//slice() -> ne menja originarli niz, vec prikazuje selektovane elemente u novom nizu
//splice() -> menja niz za razliku od slice(), brise selektovane elemente i krao treci argument dodaje novi element
//spread operator (...) -> kopira niz

//{} -> objekat
//[] -> niz
//() -> funkcija


//Zadaci

//1.Dovršite niz tako što ćete promenljivoj arr dodeliti niz od najmanje 5 elemenata dužine.
//niz treba da sadrži najmanje jedan string, jedan broj i jednu logičku vrednost.
let niz;

//2.Da biste dovršili ovaj izazov, postavite 2. poziciju (indeks 1) miArrai-a na bilo šta što želite, osim slova b.
let myArray = ["a", "b", "c", "d"];
console.log(myArray);

//3. Definisali smo funkciju mixedNumbers, kojoj prosleđujemo niz kao argument.
//izmenite funkciju koristeći push() i unshift() da dodate 'I', 2, 'tri' na početak niza i 7, 'VIII',
//9 na kraj tako da vraćeni niz sadrži reprezentacije brojeva 1-9 po redu.
function mixedNumbers(arr) {
    //Promeniti code ispod 
    
    // Promeniti kod iznad
    return arr;
  }
  
  console.log(mixedNumbers(['IV', 5, 'six']));