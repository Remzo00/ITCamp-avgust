//KORAK 1
//Definisati klasu Knjiga koja sadrži: naslov, autor, cena.
//Klasa Knjiga ima metode: getInfo()
//U metodi getInfo() prikazati informacije o knjizi.

//KORAK 2
//Definisati klasu User koja sadrži: ime, email.
//Klasa User ce sadrzati korpu ali ne u konstruktoru, koja ce po defaultu biti postavljena kao prazan niz
//Klasa User ima tri metode: addToCart(knjiga), viewCart(), createOrder().
//U metodi addToCart(knjiga) dodati knjigu u korpu.
//U metodi viewCart() prikazati informacije o korpi.
//U metodi createOrder() kreirati narudžbinu i isprazniti korpu

//KORAK 3
//Napraviti nekoliko instanci klase Knjiga
//Napraviti instancu klase User
//Dodati par knjiga u korpu
//Nakon dodavanja par knjiga, proveriti da li su knjige dodate u korpu
//Nakon kreiranja narudzbine, isprazniti korpu

//HINT
//Obzirom da je korpa prazan NIZ, imaj u vidu da ces raditi sa nizovima.
//Za dodavanje mozes koristiti push metodu da ubacis knjigu u niz.
//Za prikaz svih knjiga u korpi mozes koristiti forEach() metodu jer su knijige nizovi.


class Book {
    constructor(title, author, price) {
      this.title = title;
      this.author = author;
      this.price = price;
    }
  
    getInfo() {
      return `${this.title} by ${this.author}, Price: $${this.price}`;
    }
  }
  
  class User {
    constructor(name, email) {
      this.name = name;
      this.email = email;
      this.cart = [];
    }
  
    addToCart(book) {
      this.cart.push(book);
      console.log(`${book.title} dodata u korpu.`);
    }
  
    viewCart() {
      console.log("Korpa sadrži:");
      this.cart.forEach(book => console.log(book.getInfo()));
    }
  
    createOrder() {
      console.log(`Narudžbina za ${this.name} je kreirana.`);
      this.cart = []; 
    }
  }
  
  const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 15);
  const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 12);
  
  const user1 = new User("John", "john@example.com");
  
  user1.addToCart(book1);
  user1.addToCart(book2);
  
  user1.viewCart();
  
  user1.createOrder();
  
  user1.viewCart();