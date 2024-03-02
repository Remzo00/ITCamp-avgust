// Zadatak: Kreiranje Bankovnog Računa
// Korak 1: Definisanje klase BankAccount
// Kreirajte klasu BankAccount.
// Definišite konstruktor klase koji prima dva argumenta: accountNumber (broj računa) i initialBalance (početno stanje računa).
// Inicijalizujte svojstva accountNumber i balance na osnovu prosleđenih vrednosti.

// Korak 2: Implementacija metode deposit
// Dodajte metod deposit(amount) u klasu BankAccount.
// Metod treba da prima jedan argument amount (iznos koji se uplaćuje).
// Povećajte trenutni saldo računa za prosleđeni iznos amount.
// Ispišite poruku koja potvrđuje uspešno procesiranu uplatu i prikazuje novi saldo računa.

// Korak 3: Implementacija metode withdraw
// Dodajte metod withdraw(amount) u klasu BankAccount.
// Metod treba da prima jedan argument amount (iznos koji se isplaćuje).
// Proverite da li saldo računa ima dovoljno sredstava za isplatu. Ako ne, ispišite poruku "Insufficient funds!".
// U suprotnom, smanjite trenutni saldo računa za prosleđeni iznos amount.
// Ispišite poruku koja potvrđuje uspešno procesiranu isplatu i prikazuje novi saldo računa.

// Korak 4: Implementacija metode displayBalance
// Dodajte metod displayBalance() u klasu BankAccount.
// Metod treba jednostavno da prikaže trenutni saldo računa.

// Korak 5: Testiranje
// Kreirajte novu instancu bankovnog računa sa određenim brojem računa i početnim stanjem.
// Pozovite metode deposit i withdraw da simulirate uplatu i isplatu novca.
// Na kraju pozovite metod displayBalance da prikažete trenutno stanje računa.

class BankAccount {
  constructor(accountNumber, initialBalance) {
    this.accountNumber = accountNumber;
    this.initialBalance = initialBalance;
  }

  deposit(amount) {
    this.initialBalance += amount;
    console.log(
      `Deposit of ${amount} successfully processed. New balance: ${this.initialBalance}`
    );
  }

  withdraw(amount) {
    if (amount > this.initialBalance) {
      console.log("Insufficient funds!");
    } else {
      this.initialBalance -= amount;
      console.log(
        `Withdrawal of ${amount} successfully processed. New balance: ${this.initialBalance}`
      );
    }
  }

  displayBalance() {
    console.log(`Account balance: ${this.initialBalance}`);
  }
}

const myAccount = new BankAccount("123456789", 1000);
myAccount.displayBalance();

myAccount.deposit(500);
myAccount.withdraw(200);
myAccount.displayBalance();
